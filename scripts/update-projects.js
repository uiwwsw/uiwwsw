const fs = require('fs');
const https = require('https');
const path = require('path');
const { parse } = require('yaml');
const { PROFILE } = require('./profile-data');
const README_FILES = { en: 'README.md', ko: 'README.ko.md' };

const VELOG_GRAPHQL_URL = 'https://v2cdn.velog.io/graphql';
const BREWSTAR_SERVICES_URL = 'https://raw.githubusercontent.com/brewstar-code/brewstar-code.github.io/main/_data/services.yml';
const BREWSTAR_BASE_URL = 'https://brewstar-code.github.io';
const DEFAULT_EXCLUDED_VELOG_SERIES = ['essay', 'photo', '링크드인'];
const EXTRA_EXCLUDED_VELOG_SERIES = (process.env.VELOG_EXCLUDED_SERIES || '')
    .split(',')
    .map((series) => series.trim())
    .filter(Boolean);
const EXCLUDED_VELOG_SERIES = [...new Set([
    ...DEFAULT_EXCLUDED_VELOG_SERIES,
    ...EXTRA_EXCLUDED_VELOG_SERIES,
])];

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

        request.on('error', reject);
    });
}

function postJson(url, payload) {
    return new Promise((resolve, reject) => {
        const body = JSON.stringify(payload);
        const request = https.request(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(body),
            },
        }, (response) => {
            const chunks = [];
            response.on('data', (chunk) => chunks.push(chunk));
            response.on('end', () => {
                if (response.statusCode !== 200) {
                    reject(new Error(`Request failed: ${url} (${response.statusCode})`));
                    return;
                }

                try {
                    resolve(JSON.parse(Buffer.concat(chunks).toString()));
                } catch (error) {
                    reject(error);
                }
            });
        });

        request.on('error', reject);
        request.write(body);
        request.end();
    });
}

function formatDate(dateValue) {
    return new Date(dateValue)
        .toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            timeZone: 'Asia/Seoul',
        })
        .replace(/(\d{4})\. (\d{2})\. (\d{2})\./, '$1. $2. $3.');
}

function isExcludedVelogSeries(seriesName) {
    if (!seriesName) return false;
    const normalized = seriesName.toLowerCase();
    return EXCLUDED_VELOG_SERIES.some((series) => normalized.includes(series.toLowerCase()));
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
    return items.map((item) => `- **[${item.label}](${item.url})** · ${item.description[locale]}`).join('\n');
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

function renderVelogPosts(posts, locale) {
    return posts
        .map((post) => {
            const translation = PROFILE.fallbackVelogPosts.find((known) => known.link === post.link);
            const title = locale === 'en' ? translation?.titleEn || post.title : post.title;
            return `- [${escapeMarkdown(title)}](${post.link}) <sub>${post.date}</sub>`;
        })
        .join('\n');
}

function buildReadme({ products, velogPosts, locale = 'en' }) {
    if (!Object.hasOwn(README_FILES, locale)) {
        throw new RangeError(`Unsupported README locale: ${locale}`);
    }
    const copy = PROFILE.copy[locale];
    const writing = PROFILE.featuredWriting;
    const recentPosts = velogPosts
        .filter((post) => post.link !== writing.link)
        .slice(0, 2);
    return `# ${PROFILE.identity.name[locale]}

**${PROFILE.identity.role}** · ${copy.languageLink}

${PROFILE.identity.headline[locale]}<br>
${PROFILE.identity.introduction[locale]}

## ${copy.workHeading}

${renderSelectedWork(PROFILE.selectedWork, locale)}

## ${copy.personalHeading}

${copy.personal}

[${writing.title[locale]}](${writing.link})<br>
${writing.context[locale]} <sub>${copy.articleLanguage}</sub>

${renderNavigation(PROFILE.links, locale)}

<details>
<summary><strong>${copy.recentSummary}</strong></summary>

<!--START_VELOG-->
${renderVelogPosts(recentPosts, locale)}
<!--END_VELOG-->

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

async function fetchLatestVelogPosts() {
    try {
        console.log('Fetching technical posts from Velog...');
        const payload = {
            query: `
                query Posts($username: String, $limit: Int) {
                    posts(username: $username, limit: $limit) {
                        title
                        url_slug
                        released_at
                        series {
                            name
                        }
                    }
                }
            `,
            variables: {
                username: PROFILE.identity.handle,
                limit: 100,
            },
        };

        const parsed = await postJson(VELOG_GRAPHQL_URL, payload);
        if (parsed.errors) {
            throw new Error(JSON.stringify(parsed.errors));
        }

        const fetchedPosts = parsed.data && Array.isArray(parsed.data.posts)
            ? parsed.data.posts
            : [];
        const posts = fetchedPosts
            .filter((post) => !isExcludedVelogSeries(post.series ? post.series.name : null))
            .slice(0, 3)
            .map((post) => ({
                title: post.title,
                link: `https://velog.io/@${PROFILE.identity.handle}/${post.url_slug}`,
                date: formatDate(post.released_at),
            }));

        console.log(`Fetched ${posts.length} technical posts.`);
        return posts.length > 0 ? posts : PROFILE.fallbackVelogPosts;
    } catch (error) {
        console.error(`Velog fetch failed: ${error.message}`);
        return PROFILE.fallbackVelogPosts;
    }
}

function isReleasedService(service) {
    return typeof service.status === 'string'
        && (service.status === 'live'
            || /(?:^|_)(?:ios|android|web)_live(?:_|$)/.test(service.status));
}

function selectProfileProducts(services) {
    if (!Array.isArray(services)) {
        throw new TypeError('Brewstar service data is not an array.');
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
            homeUrl: new URL(service.links.home, BREWSTAR_BASE_URL).toString(),
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
        console.log('Fetching released products from Brewstar Code...');
        const services = parse(await fetchText(BREWSTAR_SERVICES_URL));
        const products = selectProfileProducts(services);

        console.log(`Fetched ${products.length} released products.`);
        return products.length > 0 ? products : PROFILE.fallbackProducts;
    } catch (error) {
        console.error(`Brewstar fetch failed: ${error.message}`);
        return PROFILE.fallbackProducts;
    }
}

function updateReadme(products, velogPosts, outputDirectory = path.join(__dirname, '..')) {
    for (const [locale, filename] of Object.entries(README_FILES)) {
        const readmeContent = buildReadme({ products, velogPosts, locale });
        fs.writeFileSync(path.join(outputDirectory, filename), readmeContent);
        console.log(`${filename} updated.`);
    }
}

async function main() {
    try {
        const [products, velogPosts] = await Promise.all([
            fetchBrewstarProducts(),
            fetchLatestVelogPosts(),
        ]);

        updateReadme(products, velogPosts);
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
    fetchBrewstarProducts,
    fetchLatestVelogPosts,
    selectProfileProducts,
    updateReadme,
};
