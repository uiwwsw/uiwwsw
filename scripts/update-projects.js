const https = require('https');
const fs = require('fs');
const path = require('path');

// 기본 URL
const BASE_URL = 'https://brewstar-code.github.io';
const SERVICES_URL = `${BASE_URL}/services/`;
const VELOG_RSS_URL = 'https://v2.velog.io/rss/@uiwwsw';
const GITHUB_PROFILE_URL = 'https://github.com/uiwwsw';

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
    // 필요한 경우 추가
};

function getTechBadge(tech) {
    // 괄호 제거 및 정규화
    const normalizedTech = tech.replace(/\s*\(.*?\)/, '');

    // 매핑된 뱃지가 있으면 반환
    if (TECH_BADGES[tech]) return `![${tech}](${TECH_BADGES[tech]})`;
    if (TECH_BADGES[normalizedTech]) return `![${tech}](${TECH_BADGES[normalizedTech]})`;

    // 없으면 기본 뱃지 생성
    return `![${tech}](https://img.shields.io/badge/${encodeURIComponent(tech)}-555555?style=flat-square)`;
}

/**
 * HTTP 요청으로 페이지 내용 가져오기
 */
function fetchPage(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

/**
 * Velog RSS 피드에서 최신 글 가져오기
 */
async function fetchLatestVelogPosts() {
    try {
        console.log('📝 Velog RSS 피드 가져오는 중...');
        const rssXML = await fetchPage(VELOG_RSS_URL);

        // XML 파싱 - <item> 태그 추출
        const itemPattern = /<item>[\s\S]*?<\/item>/g;
        const items = [];
        let match;

        while ((match = itemPattern.exec(rssXML)) !== null) {
            const itemContent = match[0];

            // 제목 추출
            const titleMatch = itemContent.match(/<title><!\[CDATA\[([^\]]*)\]\]><\/title>/);
            const title = titleMatch ? titleMatch[1] : '';

            // 링크 추출
            const linkMatch = itemContent.match(/<link>([^<]*)<\/link>/);
            const link = linkMatch ? linkMatch[1] : '';

            // 날짜 추출 및 포맷 변환
            const pubDateMatch = itemContent.match(/<pubDate>([^<]*)<\/pubDate>/);
            if (pubDateMatch) {
                const pubDate = new Date(pubDateMatch[1]);
                const formattedDate = pubDate.toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                }).replace(/(\d{4})\. (\d{2})\. (\d{2})\./, '$1. $2. $3.');

                items.push({
                    title,
                    link,
                    date: formattedDate
                });
            }
        }

        // 최신 5개만 반환
        const latestPosts = items.slice(0, 5);
        console.log(`✅ 최신 ${latestPosts.length}개 글 가져오기 완료`);

        return latestPosts;

    } catch (error) {
        console.error('❌ Velog RSS 피드 가져오기 실패:', error.message);
        // 오류 시 빈 배열 반환 (기존 글 유지)
        return [];
    }
}
/**
 * GitHub 프로필에서 Pinned Repos 가져오기
 */
async function fetchPinnedRepos() {
    try {
        console.log('📌 GitHub Pinned Repos 가져오는 중...');
        const html = await fetchPage(GITHUB_PROFILE_URL);

        const pinnedRepos = [];
        // Pinned item 패턴 (HTML 구조에 의존적이므로 주의 필요)
        const pinnedItemPattern = /<div class="pinned-item-list-item-content">([\s\S]*?)<\/div>/g;

        let match;
        while ((match = pinnedItemPattern.exec(html)) !== null) {
            const content = match[1];

            // Repo 링크 및 이름 추출
            const linkMatch = content.match(/href="(\/[^"]+)"/);
            const repoPath = linkMatch ? linkMatch[1] : '';
            const repoName = repoPath.split('/').pop();
            const repoUrl = `https://github.com${repoPath}`;

            // 설명 추출
            const descMatch = content.match(/<p class="pinned-item-desc[^"]*">([\s\S]*?)<\/p>/);
            const description = descMatch ? descMatch[1].trim() : '';

            if (repoUrl) {
                pinnedRepos.push({
                    name: repoName,
                    url: repoUrl,
                    description,
                    techStack: [] // 나중에 채움
                });
            }
        }

        console.log(`✅ ${pinnedRepos.length}개 Pinned Repo 발견`);

        // 각 Repo의 상세 정보(기술 스택) 가져오기
        for (const repo of pinnedRepos) {
            console.log(`  🔍 ${repo.name} 기술 스택 분석 중...`);
            try {
                const repoHtml = await fetchPage(repo.url);

                // Languages 섹션 찾기
                // GitHub Repo 페이지의 Languages는 보통 Layout-sidebar 내의 "Languages" 헤더 다음에 나옴
                // 또는 aria-label="Page content" 내에서 찾을 수도 있음.
                // 여기서는 간단히 "Languages" 텍스트 주변이나, 언어 통계 bar의 aria-label 등을 찾음

                // 방법 1: url이 /languages 인 API 요청은 불가능(인증 필요 없는 페이지 크롤링이므로)
                // 방법 2: HTML에서 .LanguageList 클래스 찾기 (가장 정확)
                const languagePattern = /<span class="color-fg-default text-bold mr-1">([^<]*)<\/span>/g;
                let langMatch;
                const languages = [];
                // Layout-sidebar 안쪽을 보는게 안전하지만, 전체 HTML에서 위 패턴은 언어 목록에만 주로 쓰임
                while ((langMatch = languagePattern.exec(repoHtml)) !== null) {
                    languages.push(langMatch[1].trim());
                }

                // 중복 제거 및 상위 3개만 사용
                repo.techStack = [...new Set(languages)].slice(0, 3);

            } catch (err) {
                console.error(`  ⚠️ ${repo.name} 기술 스택 가져오기 실패:`, err.message);
            }
        }

        return pinnedRepos;

    } catch (error) {
        console.error('❌ GitHub Pinned Repos 가져오기 실패:', error.message);
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
async function updateReadme(services, velogPosts, pinnedRepos) {
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
    if (pinnedRepos && pinnedRepos.length > 0) {
        openSourceSection = `## 📦 Open Source / Libraries\n\n${pinnedRepos.map(repo =>
            `### [${repo.name}](${repo.url})
${getTechStackBadges(repo.techStack)}

${repo.description}`).join('\n\n')}\n\n---\n\n`;
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

${openSourceSection}## ✒️ Essays & Thoughts
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

        console.log('📌 Pinned Repos 크롤링 시작...');
        const pinnedRepos = await fetchPinnedRepos();

        console.log('📝 README.md 업데이트 중...');
        const velogPosts = await fetchLatestVelogPosts();
        await updateReadme(services, velogPosts, pinnedRepos);

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