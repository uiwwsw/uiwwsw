const fs = require('fs');
const https = require('https');
const path = require('path');
const { parse } = require('yaml');
const { PROFILE } = require('./profile-data');

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

function renderNavigation(links) {
    return links
        .map((link) => `<a href="${link.href}">${link.label}</a>`)
        .join(' &nbsp;·&nbsp; ');
}

function renderSelectedWork(items) {
    return items.map((item) => {
        const source = item.sourceUrl
            ? ` · <a href="${item.sourceUrl}">source</a>`
            : '';
        return `### [${item.label}](${item.url})
<sub>${item.kind.toUpperCase()}${source}</sub>

${item.description}`;
    }).join('\n\n');
}

function renderProducts(products) {
    return products.map((product) => {
        const technologies = product.techStack.map((tech) => `\`${tech}\``);
        const platforms = product.platforms.map((platform) => `[${platform.label}](${platform.url})`);
        const details = [...technologies, ...platforms].join(' · ');

        return `- **[${product.nameKo} / ${product.nameEn}](${product.homeUrl})** — ${product.description}<br>
  ${details}`;
    }).join('\n');
}

function renderVelogPosts(posts) {
    return posts
        .map((post) => `- [${escapeMarkdown(post.title)}](${post.link}) <sub>${post.date}</sub>`)
        .join('\n');
}

function buildReadme({ products, velogPosts }) {
    return `<picture>
  <source media="(prefers-color-scheme: dark) and (max-width: 600px)" srcset="./assets/profile-dark-mobile.svg">
  <source media="(prefers-color-scheme: light) and (max-width: 600px)" srcset="./assets/profile-light-mobile.svg">
  <source media="(prefers-color-scheme: dark)" srcset="./assets/profile-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="./assets/profile-light.svg">
  <img src="./assets/profile-light.svg" alt="uiwwsw frontend engineering profile: Ship the product. Make the next change easier." width="100%">
</picture>

<p align="center">
  <strong>${PROFILE.identity.headline}</strong><br>
  <sub>${PROFILE.identity.careerLine}</sub>
</p>

<p align="center">
  <samp>${renderNavigation(PROFILE.links)}</samp>
</p>

## Selected Work

${renderSelectedWork(PROFILE.selectedWork)}

## Independent Products

[Brewstar Code](https://brewstar-code.github.io/)에서 직접 출시하고 운영하는 제품들입니다.

<!--START_PRODUCTS-->
${renderProducts(products)}
<!--END_PRODUCTS-->

## Writing

결과뿐 아니라 선택의 이유와 구현의 맥락을 씁니다.

<!--START_VELOG-->
${renderVelogPosts(velogPosts)}
<!--END_VELOG-->

<sub>[모든 기술 글](https://velog.io/@uiwwsw) · [글의 우주](https://uiwwsw.github.io/)</sub>
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
        && (service.status === 'live' || service.status.includes('_live'));
}

async function fetchBrewstarProducts() {
    try {
        console.log('Fetching released products from Brewstar Code...');
        const services = parse(await fetchText(BREWSTAR_SERVICES_URL));
        if (!Array.isArray(services)) {
            throw new TypeError('Brewstar service data is not an array.');
        }

        const products = services
            .filter((service) => service && isReleasedService(service))
            .sort((a, b) => (a.order || 0) - (b.order || 0))
            .map((service) => ({
                key: service.key,
                nameKo: service.name_ko,
                nameEn: service.name_en,
                description: PROFILE.productCopy[service.key] || service.tagline,
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

        console.log(`Fetched ${products.length} released products.`);
        return products.length > 0 ? products : PROFILE.fallbackProducts;
    } catch (error) {
        console.error(`Brewstar fetch failed: ${error.message}`);
        return PROFILE.fallbackProducts;
    }
}

function updateReadme(products, velogPosts) {
    const readmeContent = buildReadme({ products, velogPosts });
    fs.writeFileSync(path.join(__dirname, '../README.md'), readmeContent);
    console.log('README.md updated.');
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
    updateReadme,
};
