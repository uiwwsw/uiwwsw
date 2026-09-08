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
    return items.map((item) => `**[${item.label}](${item.url})**

${item.description}

<sub>${renderNavigation(item.links)}</sub>`).join('\n\n');
}

function renderProductEngineering(items) {
    return items.map((item) => `- ${item}`).join('\n');
}

function renderInProgress(items) {
    return items.map((item) => {
        const title = item.url ? `[${item.label}](${item.url})` : item.label;
        return `- **${title}** · <sub>${item.stage}</sub><br>\n  ${item.description}`;
    }).join('\n');
}

function renderProducts(products) {
    return products.map((product) => {
        const technologies = product.techStack.map((tech) => `\`${tech}\``);
        const platforms = product.platforms.map((platform) => `[${platform.label}](${platform.url})`);
        const details = [...technologies, ...platforms].join(' · ');

        return `- **[${product.nameKo}](${product.homeUrl})** · ${product.description}<br>
  ${details}`;
    }).join('\n');
}

function renderVelogPosts(posts) {
    return posts
        .map((post) => `- [${escapeMarkdown(post.title)}](${post.link}) <sub>${post.date}</sub>`)
        .join('\n');
}

function buildReadme({ products, velogPosts }) {
    const writing = PROFILE.featuredWriting;
    const recentPosts = velogPosts
        .filter((post) => post.link !== writing.link)
        .slice(0, 2);
    return `# ${PROFILE.identity.name}

**${PROFILE.identity.role}** · ${PROFILE.identity.handle}

${PROFILE.identity.headline}

${PROFILE.identity.careerLine}

${renderNavigation(PROFILE.links)}

## 해온 일

2015년 UI 개발로 시작해, 서비스의 초기 구축과 운영, 프론트엔드 팀 리딩으로 일을 넓혀왔습니다.

${renderProductEngineering(PROFILE.productEngineering)}

주로 React, TypeScript, Next.js를 씁니다. 공통 UI와 API 규약, 자동화 도구로 반복되는 판단을 코드에 남깁니다.

## 지금 만드는 제품

아직 정식 출시 전입니다. 아래 웹 링크는 개발 중인 화면을 미리 볼 수 있는 프리뷰입니다.

${renderInProgress(PROFILE.inProgress)}

## 반복되는 문제는 도구로

${renderSelectedWork(PROFILE.selectedWork)}

## 글로 남긴 생각

> ${writing.quote}

[${writing.title}](${writing.link})<br>
${writing.context}

<!--START_VELOG-->
${renderVelogPosts(recentPosts)}
<!--END_VELOG-->

기술 밖에서는 사람과 일상에 관한 에세이를 씁니다. [10년의 회고](https://velog.io/@uiwwsw/10년의-회고)에는 함께 일해온 동료들에 대한 생각을 담았습니다.

<details>
<summary><strong>다른 작업과 출시한 앱</strong></summary>

건축을 전공했고, 글과 이야기를 좋아합니다. 관심이 오래 머무는 것들은 직접 만들어 봅니다.

${PROFILE.personalProjects.map((project) => `- **[${project.label}](${project.url})** · ${project.description}`).join('\n')}

[Brewstar Code](https://brewstar-code.github.io/)에서는 앱을 출시하고 있습니다.

<!--START_PRODUCTS-->
${renderProducts(products)}
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
    renderInProgress,
    renderProductEngineering,
    updateReadme,
};
