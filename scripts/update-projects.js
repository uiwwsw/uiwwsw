const https = require('https');
const fs = require('fs');
const path = require('path');
const { PROFILE } = require('./profile-data');

const VELOG_GRAPHQL_URL = 'https://v2cdn.velog.io/graphql';
const NPM_SEARCH_URL = 'https://registry.npmjs.org/-/v1/search';
const DEFAULT_EXCLUDED_VELOG_SERIES = ['essay', 'photo'];
const EXTRA_EXCLUDED_VELOG_SERIES = (process.env.VELOG_EXCLUDED_SERIES || '')
    .split(',')
    .map((series) => series.trim())
    .filter(Boolean);
const EXCLUDED_VELOG_SERIES = [...new Set([
    ...DEFAULT_EXCLUDED_VELOG_SERIES,
    ...EXTRA_EXCLUDED_VELOG_SERIES,
])];

const TECH_BADGES = {
    Flutter: 'https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white',
    Supabase: 'https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white',
    Cloudflare: 'https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white',
    React: 'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black',
    TypeScript: 'https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white',
    'Tailwind CSS': 'https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white',
    Storybook: 'https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white',
    react: 'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black',
    typescript: 'https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white',
    javascript: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black',
    node: 'https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white',
    npm: 'https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white',
};

function fetchText(url) {
    return new Promise((resolve, reject) => {
        const request = https.get(url, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                res.resume();
                resolve(fetchText(res.headers.location));
                return;
            }

            if (res.statusCode !== 200) {
                reject(new Error(`Request failed: ${url} (${res.statusCode})`));
                res.resume();
                return;
            }

            const chunks = [];
            res.on('data', (chunk) => chunks.push(chunk));
            res.on('end', () => resolve(Buffer.concat(chunks).toString()));
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
        }, (res) => {
            const chunks = [];
            res.on('data', (chunk) => chunks.push(chunk));
            res.on('end', () => {
                if (res.statusCode !== 200) {
                    reject(new Error(`Request failed: ${url} (${res.statusCode})`));
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

function cleanDescription(description) {
    return (description || '')
        .replace(/<!--[\s\S]*?-->/g, '')
        .replace(/!\[.*?\]\(.*?\)/g, '')
        .replace(/\[([^\]]*)\]\([^)]+\)/g, '$1')
        .replace(/\[[^\]]*\]\([^\)]*$/g, '')
        .replace(/\*\*/g, '')
        .replace(/`/g, '')
        .replace(/^\(\s*\)$/g, '')
        .trim()
        .replace(/\s+/g, ' ');
}

function formatDate(dateValue) {
    return new Date(dateValue)
        .toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })
        .replace(/(\d{4})\. (\d{2})\. (\d{2})\./, '$1. $2. $3.');
}

function isExcludedVelogSeries(seriesName) {
    if (!seriesName) return false;
    const normalized = seriesName.toLowerCase();
    return EXCLUDED_VELOG_SERIES.some((series) => normalized.includes(series.toLowerCase()));
}

function getTechBadge(tech) {
    const normalized = tech.replace(/\s*\(.*?\)/, '');
    const lower = tech.toLowerCase();

    if (TECH_BADGES[tech]) return `![${tech}](${TECH_BADGES[tech]})`;
    if (TECH_BADGES[normalized]) return `![${tech}](${TECH_BADGES[normalized]})`;

    const matchingKey = Object.keys(TECH_BADGES).find((key) => key.toLowerCase() === lower);
    if (matchingKey) return `![${tech}](${TECH_BADGES[matchingKey]})`;

    return `![${tech}](https://img.shields.io/badge/${encodeURIComponent(tech)}-555555?style=flat-square)`;
}

function renderLinkBadge(link) {
    return `<a href="${link.href}"><img src="${link.src}" alt="${link.alt}" /></a>`;
}

function renderInlineTags(tags) {
    return tags.map((tag) => `\`${tag}\``).join(' ');
}

function renderQuickStartRows(items) {
    return items.map((item) => `| ${item.focus} | [${item.label}](${item.url}) | ${item.reason} |`).join('\n');
}

function renderBucketItem(item) {
    const label = item.url ? `[${item.label}](${item.url})` : `**${item.label}**`;
    return `- ${label} — ${item.note}`;
}

function renderWorkBuckets(buckets) {
    return buckets.map((bucket) => {
        return `### ${bucket.title}\n\n${bucket.description}\n\n${bucket.items.map(renderBucketItem).join('\n')}`;
    }).join('\n\n');
}

function renderSeniorSignals(signals) {
    return signals.map((signal) => `- **${signal.title}**: ${signal.description}`).join('\n');
}

function renderPackageIndex(packages) {
    if (!packages.length) {
        return `<details>
<summary><b>Open-source package index</b> (0)</summary>

Package metadata could not be fetched from npm at this run.
</details>`;
    }

    return `<details>
<summary><b>Open-source package index</b> (${packages.length})</summary>

${packages.map((pkg) => {
        const keywords = pkg.keywords.slice(0, 4).map((keyword) => getTechBadge(keyword)).join(' ');
        const description = pkg.description || 'Description not provided.';
        return `### [${pkg.name}](${pkg.url})
${keywords}

${description}`;
    }).join('\n\n')}
</details>`;
}

function renderVelogPosts(posts) {
    return posts.map((post) => `- [${post.title}](${post.link}) _( ${post.date} )_`).join('\n');
}

function buildReadme({ velogPosts, npmPackages }) {
    const now = formatDate(new Date().toISOString());
    const stats = [
        `${PROFILE.workBuckets.length} ways I work`,
        `${npmPackages.length} npm packages`,
        `${velogPosts.length} latest posts synced from Velog`,
    ];

    return `<p align="center">
  <img src="./assets/profile-constellation.svg" alt="uiwwsw project constellation" width="100%" />
</p>

<p align="center"><strong>${PROFILE.identity.motto}</strong></p>

<p align="center"><strong>${PROFILE.identity.headline}</strong></p>

<p align="center">
  ${PROFILE.identity.summaryEn}<br />
  ${PROFILE.identity.summaryKo}
</p>

<p align="center">
  ${stats.join(' · ')}
</p>

<p align="center">
  ${PROFILE.links.map(renderLinkBadge).join('\n  ')}
</p>

## How I Work

${renderWorkBuckets(PROFILE.workBuckets)}

## Frontend Signals

${renderSeniorSignals(PROFILE.seniorSignals)}

${renderPackageIndex(npmPackages)}

## Writing

> Code is logical, but people are emotional. I write about both.

<!--START_VELOG-->
${renderVelogPosts(velogPosts)}
<!--END_VELOG-->

---

**Last profile refresh:** ${now}  
_Updated automatically via GitHub Actions_
`;
}

async function fetchNpmPackages() {
    try {
        console.log('📦 NPM 패키지 정보 가져오는 중...');
        const url = `${NPM_SEARCH_URL}?text=${encodeURIComponent('@uiwwsw')}&size=100`;
        const data = JSON.parse(await fetchText(url));
        const packages = (data.objects || [])
            .map((object) => {
                const pkg = object.package;
                return {
                    name: pkg.name,
                    url: pkg.links.npm,
                    description: cleanDescription(pkg.description),
                    keywords: pkg.keywords || [],
                    date: pkg.date,
                };
            })
            .sort((a, b) => new Date(b.date) - new Date(a.date));

        console.log(`✅ ${packages.length}개 NPM 패키지 발견`);
        return packages;
    } catch (error) {
        console.error('❌ NPM 패키지 가져오기 실패:', error.message);
        return [];
    }
}

async function fetchLatestVelogPosts() {
    try {
        console.log('📝 Velog 포스트 가져오는 중... (GraphQL)');
        const payload = {
            query: `
                query Posts($username: String, $limit: Int) {
                    posts(username: $username, limit: $limit) {
                        id
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
                username: 'uiwwsw',
                limit: 100,
            },
        };

        const parsed = await postJson(VELOG_GRAPHQL_URL, payload);
        if (parsed.errors) {
            throw new Error(JSON.stringify(parsed.errors));
        }

        const posts = [];
        for (const post of parsed.data.posts) {
            if (posts.length >= 5) break;
            const seriesName = post.series ? post.series.name : null;
            if (isExcludedVelogSeries(seriesName)) continue;

            posts.push({
                title: post.title,
                link: `https://velog.io/@uiwwsw/${post.url_slug}`,
                date: formatDate(post.released_at),
            });
        }

        console.log(`✅ ${posts.length}개 기술글 가져오기 완료`);
        return posts.length > 0 ? posts : PROFILE.fallbackVelogPosts;
    } catch (error) {
        console.error('❌ Velog 포스트 가져오기 실패:', error.message);
        return PROFILE.fallbackVelogPosts;
    }
}

async function updateReadme(velogPosts, npmPackages) {
    const readmeContent = buildReadme({ velogPosts, npmPackages });
    fs.writeFileSync(path.join(__dirname, '../README.md'), readmeContent);
    console.log('✅ README.md 업데이트 완료');
}

async function main() {
    try {
        const [npmPackages, velogPosts] = await Promise.all([
            fetchNpmPackages(),
            fetchLatestVelogPosts(),
        ]);

        await updateReadme(velogPosts, npmPackages);
        console.log('🎉 모든 작업 완료!');
    } catch (error) {
        console.error('❌ 오류 발생:', error);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = {
    buildReadme,
    fetchLatestVelogPosts,
    fetchNpmPackages,
    updateReadme,
};
