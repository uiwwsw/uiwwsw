const fs = require('fs');
const { execFileSync } = require('node:child_process');
const https = require('https');
const path = require('path');
const { parse } = require('yaml');
const { load } = require('cheerio');
const { PROFILE } = require('./profile-data');
const README_FILES = { en: 'README.md', ko: 'README.ko.md' };

const WRITING_ARCHIVE_URL = 'https://uiwwsw.github.io/writing/';
const LEGACY_SERVICE_REGISTRY_URL = 'https://raw.githubusercontent.com/brewstar-code/brewstar-code.github.io/main/_data/services.yml';
const MOB_BASE_URL = 'https://uiwwsw.github.io/mob/';

function fetchText(url) {
    return new Promise((resolve, reject) => {
        const request = https.get(url, (response) => {
            if (
                response.statusCode >= 300
                && response.statusCode < 400
                && response.headers.location
            ) {
                response.resume();
                resolve(fetchText(new URL(response.headers.location, url).toString()));
                return;
            }

            if (response.statusCode !== 200) {
                reject(new Error(`Request failed: ${url} (${response.statusCode})`));
                response.resume();
                return;
            }

            const chunks = [];
            response.on('data', (chunk) => chunks.push(chunk));
            response.on('end', () => resolve(Buffer.concat(chunks).toString()));
        });

        request.setTimeout(20000, () => request.destroy(new Error(`Request timed out: ${url}`)));
        request.on('error', reject);
    });
}

function escapeMarkdown(text) {
    return String(text).replace(/([[\]])/g, '\\$1');
}

function renderNavigation(links, locale) {
    return links
        .map((link) => `<a href="${link.href}">${link.label[locale]}</a>`)
        .join(' &nbsp;·&nbsp; ');
}

function renderSelectedWork(items, locale) {
    return items.map((item) => `- **[${escapeMarkdown(item.label)}](${item.url})**${item.description[locale] ? ` · ${escapeMarkdown(item.description[locale])}` : ''}`).join('\n');
}

function renderProducts(products, locale) {
    return products.map((product) => {
        const name = locale === 'en' ? product.nameEn : product.nameKo;
        const description = PROFILE.productCopy[product.key][locale];
        const technologies = product.techStack.map((tech) => `\`${tech}\``);
        const platforms = product.platforms.map((platform) => `[${platform.label}](${platform.url})`);
        const details = [...technologies, ...platforms].join(' · ');

        return `- **[${name}](${product.homeUrl})** · ${description}<br>
  ${details}`;
    }).join('\n');
}

function renderWritingPosts(posts) {
    return posts
        .map((post) => `- [${escapeMarkdown(post.title)}](${post.link}) <sub>${post.date}</sub>`)
        .join('\n');
}

function buildReadme({ products, writingPosts, selectedWork, locale = 'en' }) {
    if (!Object.hasOwn(README_FILES, locale)) {
        throw new RangeError(`Unsupported README locale: ${locale}`);
    }
    const copy = PROFILE.copy[locale];
    if (!writingPosts.length) throw new Error('No writing posts to publish.');
    const writing = writingPosts[0];
    const recentPosts = writingPosts.slice(1, 3);
    return `# ${PROFILE.identity.name[locale]}

**${PROFILE.identity.role}** · ${copy.languageLink}

${PROFILE.identity.headline[locale]}<br>
${PROFILE.identity.introduction[locale]}

## ${copy.workHeading}

${renderSelectedWork(selectedWork, locale)}

## ${copy.personalHeading}

${copy.personal}

[${escapeMarkdown(writing.title)}](${writing.link})<br>
${copy.latestWriting} <sub>${writing.date} · ${copy.articleLanguage}</sub>

${renderNavigation(PROFILE.links, locale)}

<details>
<summary><strong>${copy.recentSummary}</strong></summary>

<!--START_WRITING-->
${renderWritingPosts(recentPosts)}
<!--END_WRITING-->

</details>

<details>
<summary><strong>${copy.projectsSummary}</strong></summary>

${renderSelectedWork(PROFILE.personalProjects, locale)}

${copy.appsIntro}

<!--START_PRODUCTS-->
${renderProducts(products, locale)}
<!--END_PRODUCTS-->

</details>
`;
}

function parseWritingArchive(html) {
    const $ = load(html);
    const articles = $('ol.writing-list > li > article').toArray();
    if (articles.length === 0) {
        throw new Error('The writing archive contains no readable articles.');
    }

    const seen = new Set();
    return articles.map((article) => {
        const entry = $(article);
        const anchor = entry.find('h2 a').first();
        const title = anchor.text().trim();
        const href = anchor.attr('href');
        const time = entry.find('time').first();
        const date = time.text().trim();
        const publishedAt = Date.parse(time.attr('datetime'));
        if (!title || !href || !date || !Number.isFinite(publishedAt)) {
            throw new Error('An archive article is missing its title, link, or publication date.');
        }

        const url = new URL(href, WRITING_ARCHIVE_URL);
        if (url.origin !== new URL(WRITING_ARCHIVE_URL).origin
            || !/^\/writing\/[^/]+\/$/.test(url.pathname)
            || url.search || url.hash || url.username || url.password) {
            throw new Error('An archive article does not link to a GitHub Pages writing page.');
        }
        if (seen.has(url.href)) {
            throw new Error('The writing archive contains a duplicate article link.');
        }
        seen.add(url.href);
        return { title, link: url.href, date, publishedAt };
    })
        .sort((a, b) => b.publishedAt - a.publishedAt)
        .map(({ publishedAt, ...post }) => post);
}

async function fetchLatestWritingPosts(fetch = fetchText) {
    console.log('Fetching published posts from GitHub Pages...');
    const posts = parseWritingArchive(await fetch(WRITING_ARCHIVE_URL));
    console.log(`Fetched ${posts.length} published posts.`);
    return posts;
}

function selectPinnedWork(payload) {
    if (payload.errors?.length) throw new Error('GitHub pinned repository query failed.');
    const nodes = payload.data?.user?.pinnedItems?.nodes;
    if (!Array.isArray(nodes)) throw new Error('Invalid GitHub pinned repository response.');
    const seen = new Set();
    return nodes.map((repo) => {
        if (!repo || typeof repo.name !== 'string' || !repo.name
            || typeof repo.nameWithOwner !== 'string'
            || !/^[\w.-]+\/[\w.-]+$/.test(repo.nameWithOwner)
            || repo.url !== `https://github.com/${repo.nameWithOwner}`
            || repo.isPrivate !== false || seen.has(repo.url)) {
            throw new Error('Invalid public pinned repository.');
        }
        seen.add(repo.url);
        const curated = PROFILE.selectedWork.find((item) => item.url === repo.url)
            || PROFILE.personalProjects.find((item) => item.url === repo.url);
        const description = typeof repo.description === 'string'
            ? repo.description.replace(/\s+/g, ' ').trim() : '';
        return { label: repo.name, url: repo.url,
            description: curated?.description || { en: description, ko: description } };
    });
}

async function fetchPinnedWork(query = async () => JSON.parse(execFileSync('gh', [
    'api', 'graphql', '-f', `query=query {
        user(login: "${PROFILE.identity.handle}") {
            pinnedItems(first: 6, types: REPOSITORY) {
                nodes { ... on Repository { name nameWithOwner url description isPrivate } }
            }
        }
    }`,
], { encoding: 'utf8', timeout: 30000 }))) {
    const selected = selectPinnedWork(await query());
    console.log(`Fetched ${selected.length} public pinned repositories.`);
    return selected;
}

function isReleasedService(service) {
    return typeof service.status === 'string'
        && (service.status === 'live'
            || /(?:^|_)(?:ios|android|web)_live(?:_|$)/.test(service.status));
}

function selectProfileProducts(services) {
    if (!Array.isArray(services)) {
        throw new TypeError('MOB service data is not an array.');
    }

    return services
        .filter((service) => service
            && Object.hasOwn(PROFILE.productCopy, service.key)
            && isReleasedService(service))
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .map((service) => ({
            key: service.key,
            nameKo: service.name_ko,
            nameEn: service.name_en,
            description: PROFILE.productCopy[service.key].ko,
            homeUrl: new URL(`${service.key}/`, MOB_BASE_URL).toString(),
            techStack: Array.isArray(service.tech_stack)
                ? service.tech_stack.filter((tech) => tech === 'Flutter')
                : [],
            platforms: Array.isArray(service.platforms)
                ? service.platforms.map((platform) => ({
                    label: platform.label,
                    url: platform.url,
                }))
                : [],
        }));
}

async function fetchBrewstarProducts() {
    try {
        console.log('Fetching released products from MOB...');
        const services = parse(await fetchText(LEGACY_SERVICE_REGISTRY_URL));
        const products = selectProfileProducts(services);

        console.log(`Fetched ${products.length} released products.`);
        return products.length > 0 ? products : PROFILE.fallbackProducts;
    } catch (error) {
        console.error(`MOB fetch failed: ${error.message}`);
        return PROFILE.fallbackProducts;
    }
}

function updateReadme(products, writingPosts, selectedWork, outputDirectory = path.join(__dirname, '..')) {
    for (const [locale, filename] of Object.entries(README_FILES)) {
        const readmeContent = buildReadme({ products, writingPosts, selectedWork, locale });
        fs.writeFileSync(path.join(outputDirectory, filename), readmeContent);
        console.log(`${filename} updated.`);
    }
}

async function main() {
    try {
        const [products, writingPosts, selectedWork] = await Promise.all([
            fetchBrewstarProducts(),
            fetchLatestWritingPosts(),
            fetchPinnedWork(),
        ]);

        updateReadme(products, writingPosts, selectedWork);
    } catch (error) {
        console.error(error);
        process.exitCode = 1;
    }
}

if (require.main === module) {
    main();
}

module.exports = {
    buildReadme,
    selectPinnedWork,
    fetchPinnedWork,
    fetchBrewstarProducts,
    fetchLatestWritingPosts,
    parseWritingArchive,
    selectProfileProducts,
    updateReadme,
};
