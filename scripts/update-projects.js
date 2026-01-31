const https = require('https');
const fs = require('fs');
const path = require('path');

// 기본 URL
const BASE_URL = 'https://brewstar-code.github.io';
const SERVICES_URL = `${BASE_URL}/services/`;
const VELOG_GRAPHQL_URL = 'https://v2cdn.velog.io/graphql';
const GITHUB_PROFILE_URL = 'https://github.com/uiwwsw';

/**
 * 기술 스택 뱃지 매핑
 */
const NPM_SEARCH_URL = 'https://registry.npmjs.org/-/v1/search';

/**
 * NPM에서 패키지 정보 가져오기
 */
async function fetchNpmPackages() {
    try {
        console.log('📦 NPM 패키지 정보 가져오는 중...');
        const query = encodeURIComponent('@uiwwsw');
        const url = `${NPM_SEARCH_URL}?text=${query}&size=100`;

        const response = await new Promise((resolve, reject) => {
            https.get(url, (res) => {
                const chunks = [];
                res.on('data', (chunk) => chunks.push(chunk));
                res.on('end', () => resolve(Buffer.concat(chunks).toString()));
            }).on('error', reject);
        });

        const data = JSON.parse(response);
        if (!data.objects) return [];

        const packages = data.objects.map(obj => {
            const pkg = obj.package;
            let description = pkg.description || '';

            // HTML 주석 제거
            description = description.replace(/<!--[\s\S]*?-->/g, '');
            // 마크다운 이미지/뱃지 제거 (예: ![alt](url))
            description = description.replace(/!\[.*?\]\(.*?\)/g, '');
            // 마크다운 링크에서 텍스트만 추출 (예: [text](url) -> text, [](url) -> empty)
            description = description.replace(/\[([^\]]*)\]\([^\)]+\)/g, '$1');
            // 끝에 남은 불완전한 링크 제거 (예: [](url...)
            description = description.replace(/\[[^\]]*\]\([^\)]*$/g, '');
            // 괄호만 남은 경우 제거 (예: ())
            description = description.replace(/^\(\s*\)$/g, '');
            // 앞뒤 공백 제거 및 연속된 공백 정리
            description = description.trim().replace(/\s+/g, ' ');

            return {
                name: pkg.name,
                url: pkg.links.npm,
                description: description,
                keywords: pkg.keywords || [],
                date: pkg.date
            };
        });

        console.log(`✅ ${packages.length}개 NPM 패키지 발견`);
        return packages;

    } catch (error) {
        console.error('❌ NPM 패키지 가져오기 실패:', error.message);
        return [];
    }
}

/**
 * 기술 스택 뱃지 매핑
 */
const TECH_BADGES = {
    'Flutter': 'https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white',
    'Supabase': 'https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white',
    'Firebase': 'https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black',
    'React': 'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black',
    'Ionic (React)': 'https://img.shields.io/badge/Ionic-3880FF?style=flat-square&logo=ionic&logoColor=white',
    'TypeScript': 'https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white',
    'Tailwind CSS': 'https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white',
    'Styled Components': 'https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white',
    'C++': 'https://img.shields.io/badge/C++-00599C?style=flat-square&logo=c%2B%2B&logoColor=white',
    'Python': 'https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white',
    // NPM 키워드용 매핑 추가
    'react': 'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black',
    'typescript': 'https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white',
    'javascript': 'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black',
    'node': 'https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white',
    'npm': 'https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white',
};

function getTechBadge(tech) {
    // 괄호 제거 및 정규화
    const normalizedTech = tech.replace(/\s*\(.*?\)/, '');
    const lowerTech = tech.toLowerCase(); // 소문자 비교

    // 매핑된 뱃지가 있으면 반환
    if (TECH_BADGES[tech]) return `![${tech}](${TECH_BADGES[tech]})`;
    if (TECH_BADGES[normalizedTech]) return `![${tech}](${TECH_BADGES[normalizedTech]})`;

    // 소문자 키 매칭 시도
    const matchingKey = Object.keys(TECH_BADGES).find(key => key.toLowerCase() === lowerTech);
    if (matchingKey) return `![${tech}](${TECH_BADGES[matchingKey]})`;

    // 없으면 기본 뱃지 생성
    return `![${tech}](https://img.shields.io/badge/${encodeURIComponent(tech)}-555555?style=flat-square)`;
}

/**
 * HTTP 요청으로 페이지 내용 가져오기
 */
function fetchPage(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            const chunks = [];
            res.on('data', (chunk) => chunks.push(chunk));
            res.on('end', () => resolve(Buffer.concat(chunks).toString()));
        }).on('error', reject);
    });
}

/**
 * Velog RSS 피드에서 최신 글 가져오기 (에세이 제외) - GraphQL 사용
 */
async function fetchLatestVelogPosts() {
    try {
        console.log('📝 Velog 포스트 가져오는 중... (GraphQL)');

        const query = `
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
        `;

        const variables = {
            username: 'uiwwsw',
            limit: 100 // 전체 글을 가져오기 위해 충분히 큰 수
        };

        const postData = JSON.stringify({ query, variables });

        const response = await new Promise((resolve, reject) => {
            const req = https.request(VELOG_GRAPHQL_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(postData)
                }
            }, (res) => {
                const chunks = [];
                res.on('data', chunk => chunks.push(chunk));
                res.on('end', () => resolve(Buffer.concat(chunks).toString()));
            });

            req.on('error', reject);
            req.write(postData);
            req.end();
        });

        const parsed = JSON.parse(response);
        if (parsed.errors) {
            throw new Error(JSON.stringify(parsed.errors));
        }

        const posts = parsed.data.posts;
        console.log(`🔍 총 ${posts.length}개의 글 발견.`);

        const validPosts = [];

        for (const post of posts) {
            if (validPosts.length >= 5) break;

            // 시리즈 확인
            const seriesName = post.series ? post.series.name : null;

            // "essay" 시리즈 제외 (대소문자 구분 없이 포함 여부 확인 혹은 정확한 매칭)
            // 사용자 요구: "essay시리즈면 패스하기"
            if (seriesName && /essay/i.test(seriesName)) {
                console.log(`    ⏭️ [SKIP] 에세이 시리즈입니다: ${post.title}`);
                continue;
            }

            // 날짜 포맷 변환
            const pubDate = new Date(post.released_at);
            const formattedDate = pubDate.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }).replace(/(\d{4})\. (\d{2})\. (\d{2})\./, '$1. $2. $3.');

            validPosts.push({
                title: post.title,
                link: `https://velog.io/@uiwwsw/${post.url_slug}`,
                date: formattedDate
            });
            console.log(`    ✅ [ADD] 기술글 포함: ${post.title}`);
        }

        console.log(`✅ 최종 ${validPosts.length}개 기술글 가져오기 완료`);
        return validPosts;

    } catch (error) {
        console.error('❌ Velog 포스트 가져오기 실패:', error.message);
        return [];
    }
}

/**
 * HTML에서 서비스 정보 추출
 */
function extractServices(html) {
    const services = [];

    // 서비스 카드 패턴 찾기
    const serviceCardPattern = /<article class="bs-card bs-service"[^>]*data-status="([^"]*)"[\s\S]*?<div class="bs-service__names">\s*<div class="bs-service__ko">([^<]*)<\/div>\s*<div class="bs-service__en">([^<]*)<\/div>\s*<\/div>[\s\S]*?<p class="bs-service__tagline">([^<]*)<\/p>([\s\S]*?)<\/article>/g;

    let match;
    while ((match = serviceCardPattern.exec(html)) !== null) {
        const status = match[1];
        const koreanName = match[2].trim();
        const englishName = match[3].trim();
        const tagline = match[4].trim();
        const content = match[5];

        // 운영중/작업중 판단 (live가 아니면 작업중)
        const isRunning = status === 'live';
        const category = isRunning ? '운영중' : '작업중';

        // 기술 스택 추출 (bs-service__stack 내부의 bs-tech span들)
        const techStack = [];
        const techStackMatch = content.match(/<div class="bs-service__stack">([\s\S]*?)<\/div>/);
        if (techStackMatch) {
            const techHtml = techStackMatch[1];
            const techPattern = /<span class="bs-tech">([^<]*)<\/span>/g;
            let techMatch;
            while ((techMatch = techPattern.exec(techHtml)) !== null) {
                techStack.push(techMatch[1].trim());
            }
        }

        // 플랫폼 링크 추출
        const platforms = [];
        const appStoreMatch = content.match(/href="(https:\/\/apps\.apple\.com[^"]+)"/);
        const googlePlayMatch = content.match(/href="(https:\/\/play\.google\.com[^"]+)"/);

        if (appStoreMatch) platforms.push({ type: 'ios', url: appStoreMatch[1] });
        if (googlePlayMatch) platforms.push({ type: 'android', url: googlePlayMatch[1] });

        // 서비스 페이지 링크 생성 (HTML에서 실제 링크 추출)
        const serviceLinkMatch = content.match(/href="\/([^\/]+)\/"/);
        const servicePath = serviceLinkMatch ? serviceLinkMatch[1] : englishName.toLowerCase();
        const serviceUrl = `${BASE_URL}/${servicePath}/`;

        services.push({
            koreanName,
            englishName,
            tagline,
            status,
            category,
            serviceUrl,
            platforms,
            isRunning,
            techStack // 추가된 기술 스택
        });
    }

    return services;
}

/**
 * Velog 글 목록 포맷팅
 */
function formatVelogPosts(posts) {
    if (!posts || posts.length === 0) {
        // 오류 시 기존 글 목록 유지
        return `- [왜 기품 있는 어른은 회사에 남지 않는가](https://velog.io/@uiwwsw/%EC%99%9C-%EA%B8%B0%ED%92%88-%EC%9E%88%EB%8A%94-%EC%96%B4%EB%A5%B8%EC%9D%80-%ED%9A%8C%EC%82%AC%EC%97%90-%EB%82%A8%EC%A7%80-%EC%95%8A%EB%8A%94%EA%B0%80) _( 2026. 01. 06. )_
- [우아함의 물리학: 지능과 체력에 관하여](https://velog.io/@uiwwsw/%EC%9A%B0%EC%95%84%ED%95%A8%EC%9D%98-%EB%AC%BC%EB%A6%AC%ED%95%99-%EC%A7%80%EB%8A%A5%EA%B3%BC-%EC%B2%B4%EB%A0%A5%EC%97%90-%EA%B4%80%ED%95%98%EC%97%AC) _( 2026. 01. 06. )_
- [똑똑한 개발자란 무엇인가 (feat. AI 시대의 생존법)](https://velog.io/@uiwwsw/%EB%98%91%EB%98%91%ED%95%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-feat.-AI-%EC%8B%9C%EB%8C%80%EC%9D%98-%EC%83%9D%EC%A1%B4%EB%B2%95) _( 2026. 01. 04. )_
- [코난과 숏박스](https://velog.io/@uiwwsw/%EC%BD%94%EB%82%9C%EA%B3%BC-%EC%88%8F%EB%B0%95%EC%8A%A4) _( 2026. 01. 03. )_
- [10년의 회고](https://velog.io/@uiwwsw/10%EB%85%84%EC%9D%98-%ED%9A%8C%EA%B3%A0) _( 2025. 12. 31. )_`;
    }

    return posts.map(post => `- [${post.title}](${post.link}) _( ${post.date} )_`).join('\n');
}

/**
 * README.md 업데이트
 */
async function updateReadme(services, velogPosts, npmPackages) {
    const runningServices = services.filter(s => s.isRunning);
    const developingServices = services.filter(s => !s.isRunning);

    // 날짜 포맷
    const now = new Date();
    const dateString = now.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    // 플랫폼 아이콘
    const getPlatformIcons = (platforms) => {
        const icons = [];
        const iosPlatform = platforms.find(p => p.type === 'ios');
        const androidPlatform = platforms.find(p => p.type === 'android');

        if (iosPlatform) {
            icons.push(`[<img src="https://img.shields.io/badge/App_Store-0D96F6?style=flat-square&logo=apple&logoColor=white" alt="App Store" />](${iosPlatform.url})`);
        }
        if (androidPlatform) {
            icons.push(`[<img src="https://img.shields.io/badge/Google_Play-3DDC84?style=flat-square&logo=google-play&logoColor=white" alt="Google Play" />](${androidPlatform.url})`);
        }
        return icons.join(' ');
    };

    // 기술 스택 뱃지 생성
    const getTechStackBadges = (techStack) => {
        if (!techStack || techStack.length === 0) return '';
        return techStack.map(tech => getTechBadge(tech)).join(' ');
    };

    // Velog 글 목록 생성
    const velogSection = formatVelogPosts(velogPosts);

    // Open Source 섹션 생성
    let openSourceSection = '';
    if (npmPackages && npmPackages.length > 0) {
        openSourceSection = `## 📦 Open Source / Libraries\n\n${npmPackages.map(pkg =>
            `### [${pkg.name}](${pkg.url})
${getTechStackBadges(pkg.keywords)}

${pkg.description}`).join('\n\n')}\n\n---\n\n`;
    }

    const readmeContent = `<div align="center">

# Refactoring myself to be a decent human.
### 웬만하면 괜찮은 사람 쪽으로 가려 합니다.

<br>

<a href="mailto:uiwwsw@icloud.com"><img src="https://img.shields.io/badge/Email-uiwwsw%40icloud.com-black?style=flat-square&logo=icloud&logoColor=white" alt="Email" /></a>
<a href="https://www.linkedin.com/in/uiwwsw/"><img src="https://img.shields.io/badge/LinkedIn-uiwwsw-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
<a href="https://github.com/uiwwnw"><img src="https://img.shields.io/badge/GitHub-uiwwnw-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
<a href="https://uiwwsw.github.io/"><img src="https://img.shields.io/badge/Portfolio-Archive-555555?style=flat-square&logo=About.me&logoColor=white" alt="Portfolio" /></a>

</div>

<br>
<br>

## 🚀 운영중인 프로젝트 (${runningServices.length})

${runningServices.map(service => `### [${service.koreanName} (${service.englishName})](${service.serviceUrl})
${getTechStackBadges(service.techStack)}
${service.techStack && service.techStack.length > 0 ? '<br>' : ''}
${getPlatformIcons(service.platforms)}

${service.tagline}`).join('\n\n')}

## 🚧 작업중인 프로젝트 (${developingServices.length})

${developingServices.map(service => `### [${service.koreanName} (${service.englishName})](${service.serviceUrl})
${getTechStackBadges(service.techStack)}
${service.techStack && service.techStack.length > 0 ? (service.platforms.length > 0 ? '<br>' : '') : ''}
${getPlatformIcons(service.platforms)}

${service.tagline}`).join('\n\n')}

---

${openSourceSection}## 💻 Technical Posts
> *Code is logical, but people are emotional. I write about both.*

<!--START_VELOG-->
${velogSection}
<!--END_VELOG-->
<br>

---

📊 **총 ${services.length}개 프로젝트** (운영중 ${runningServices.length}개, 작업중 ${developingServices.length}개)  
🔄 **마지막 업데이트**: ${dateString}

<br>
<div align="right">
  
_Updated automatically via GitHub Actions_
</div>
`;

    fs.writeFileSync(path.join(__dirname, '../README.md'), readmeContent);
    console.log('✅ README.md 업데이트 완료');
}

/**
 * 메인 실행 함수
 */
async function main() {
    try {
        console.log('🔄 서비스 페이지 크롤링 시작...');
        const html = await fetchPage(SERVICES_URL);

        console.log('📊 서비스 정보 추출 중...');
        const services = extractServices(html);

        console.log(`✅ ${services.length}개 서비스 발견:`);
        services.forEach(service => {
            console.log(`  - ${service.koreanName} (${service.category})`);
        });

        console.log('📌 NPM 패키지 크롤링 시작...');
        const npmPackages = await fetchNpmPackages();

        console.log('📝 README.md 업데이트 중...');
        const velogPosts = await fetchLatestVelogPosts();
        await updateReadme(services, velogPosts, npmPackages);

        console.log('🎉 모든 작업 완료!');

    } catch (error) {
        console.error('❌ 오류 발생:', error);
        process.exit(1);
    }
}

// 스크립트가 직접 실행될 때만 실행
if (require.main === module) {
    main();
}

module.exports = { extractServices, updateReadme };