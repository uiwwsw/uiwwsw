const PROFILE = {
    identity: {
        handle: 'uiwwsw',
        displayName: 'matthew',
        headline: 'Frontend engineer who validates ideas fast, closes products end-to-end, and turns repeated work into UI/DX assets.',
        summaryEn: 'I start from frontend, but I do not stop at the screen. I test ideas with small products, build some services end-to-end when needed, and package repeated work as reusable UI and developer tooling.',
        summaryKo: '저는 프론트엔드에서 시작하지만 화면 구현에서 멈추지 않습니다. 좋은 아이디어는 빠르게 제품으로 검증하고, 필요하면 백엔드까지 붙여 A to Z로 닫고, 반복되는 문제는 UI나 DX 자산으로 다시 정리합니다.',
        motto: 'Refactoring myself to be a decent human.',
    },
    links: [
        {
            alt: 'Email',
            href: 'mailto:uiwwsw@icloud.com',
            src: 'https://img.shields.io/badge/Email-uiwwsw%40icloud.com-101418?style=flat-square&logo=icloud&logoColor=white',
        },
        {
            alt: 'LinkedIn',
            href: 'https://www.linkedin.com/in/uiwwsw/',
            src: 'https://img.shields.io/badge/LinkedIn-uiwwsw-0A66C2?style=flat-square&logo=linkedin&logoColor=white',
        },
        {
            alt: 'Velog',
            href: 'https://velog.io/@uiwwsw',
            src: 'https://img.shields.io/badge/Velog-uiwwsw-20C997?style=flat-square&logo=velog&logoColor=white',
        },
        {
            alt: 'Portfolio',
            href: 'https://uiwwsw.github.io/',
            src: 'https://img.shields.io/badge/Portfolio-Universe-304A6E?style=flat-square&logo=about-dot-me&logoColor=white',
        },
        {
            alt: 'GitHubPrint',
            href: 'https://githubprint.vercel.app',
            src: 'https://img.shields.io/badge/GitHubPrint-Live-1F2937?style=flat-square&logo=github&logoColor=white',
        },
        {
            alt: 'GitHub',
            href: 'https://github.com/uiwwsw',
            src: 'https://img.shields.io/badge/GitHub-uiwwsw-181717?style=flat-square&logo=github&logoColor=white',
        },
    ],
    workBuckets: [
        {
            title: '1. 아이디어 검증',
            description: '좋은 아이디어가 생기면 오래 설명하지 않고, 먼저 작게 만들어서 실제 반응을 확인합니다.',
            items: [
                {
                    label: 'GitHubPrint',
                    url: 'https://githubprint.vercel.app',
                    note: 'GitHub를 개발자 문서와 이력서형 결과로 바꾸는 서비스.',
                },
                {
                    label: 'BackThen',
                    url: 'https://backthen.vercel.app',
                    note: '그해의 오늘을 바로 보여주는 실험형 서비스.',
                },
                {
                    label: 'virtual-keyboard',
                    url: 'https://www.npmjs.com/package/@uiwwsw/virtual-keyboard',
                    note: '한글 composition 이슈를 해결하기 위해 만든 입력 라이브러리.',
                },
                {
                    label: 'koreanscript',
                    url: 'https://github.com/uiwwsw/koreanscript',
                    note: '한글 키워드로 TypeScript를 쓰는 초간단 트랜스파일러.',
                },
            ],
        },
        {
            title: '2. A to Z 제품 개발',
            description: '서비스를 끝까지 닫아야 할 때는 프론트엔드에 머물지 않고, 필요한 만큼 백엔드와 운영 흐름까지 직접 만듭니다.',
            items: [
                {
                    label: '찐리뷰',
                    note: '디플리케이트된 리뷰 플랫폼 웹서비스. PostgreSQL, Next.js, Prisma 기반.',
                },
                {
                    label: '머랭트립',
                    url: 'https://brewstar-code.github.io/meringuetrip/',
                    note: '출시 후 운영까지 이어진 서비스.',
                },
                {
                    label: '미유미유',
                    url: 'https://brewstar-code.github.io/meyoumeyou/',
                    note: '작업 중인 서비스.',
                },
                {
                    label: 'QR Token',
                    note: '작업 중인 서비스.',
                },
            ],
        },
        {
            title: '3. DX / Tooling',
            description: '반복 작업을 줄이고 개발 속도를 올리기 위한 도구나 라이브러리를 자주 만듭니다.',
            items: [
                {
                    label: '@uiwwsw/react-query-helper',
                    url: 'https://www.npmjs.com/package/@uiwwsw/react-query-helper',
                    note: 'TypeScript API 함수에서 React Query 코드를 자동 생성하는 CLI.',
                },
                {
                    label: '@uiwwsw/infinite-paper',
                    url: 'https://www.npmjs.com/package/@uiwwsw/infinite-paper',
                    note: 'infinite scroll + pagination 데이터 윈도우 관리 라이브러리.',
                },
                {
                    label: '@uiwwsw/easter-egg',
                    url: 'https://www.npmjs.com/package/@uiwwsw/easter-egg',
                    note: '작은 인터랙션을 빠르게 붙일 수 있게 만든 유틸리티.',
                },
                {
                    label: '@uiwwsw/virtual-keyboard',
                    url: 'https://www.npmjs.com/package/@uiwwsw/virtual-keyboard',
                    note: '입력 경험을 통제하기 위한 브라우저 문제 해결형 라이브러리.',
                },
            ],
        },
        {
            title: '4. 마크업 / UI 시스템',
            description: '마크업과 화면 완성도, 그리고 재사용 가능한 UI 구조를 오래 다뤄 왔습니다.',
            items: [
                {
                    label: 'shadcn2',
                    url: 'https://shadcn2.vercel.app',
                    note: 'Tailwind CSS v4 기반 UI 패키지와 Storybook 운영.',
                },
                {
                    label: 'heybit-ui-styled-components',
                    url: 'https://www.npmjs.com/package/heybit-ui-styled-components',
                    note: 'styled-components 기반 디자인 시스템 패키지.',
                },
                {
                    label: '주니어 시절 포트폴리오',
                    url: 'https://uiwwnw.github.io/portfolio',
                    note: '초기 마크업 중심 포트폴리오.',
                },
            ],
        },
    ],
    seniorSignals: [
        {
            title: 'React / TypeScript 중심 서비스 개발',
            description: '서비스형 웹 제품과 라이브러리를 React/TypeScript 중심으로 꾸준히 만들었습니다.',
        },
        {
            title: '브라우저 문제 해결과 UI 품질',
            description: '한글 입력 composition 같은 브라우저 edge case를 직접 푸는 타입입니다.',
        },
        {
            title: '재사용 가능한 UI와 DX 자산화',
            description: '한 번 만든 것을 라이브러리, 패키지, 워크플로로 다시 남기는 편입니다.',
        },
        {
            title: '필요할 때는 A to Z로 닫는 실행력',
            description: '프론트엔드에서 시작하지만, 제품을 완성하려면 백엔드와 배포까지 직접 붙입니다.',
        },
    ],
    fallbackVelogPosts: [
        {
            title: '전달 가능한 개발자 문서(깃허브 프린트)',
            link: 'https://velog.io/@uiwwsw/GitHub를-전달-가능한-개발자-문서로-바꾸는-GitFolio를-만들었습니다',
            date: '2026. 03. 18.',
        },
        {
            title: "[Retrospective] 머랭트립 리팩토링: 기능 추가보다 '완성도'에 집착하기 (Flutter 전환기)",
            link: 'https://velog.io/@uiwwsw/Retrospective-머랭트립-리팩토링-기능-추가보다-완성도에-집착하기-Flutter-전환기',
            date: '2026. 01. 22.',
        },
        {
            title: '다중 장소 검색 서비스 머랭트립 개발기',
            link: 'https://velog.io/@uiwwsw/지도-앱-켰다가-뇌-터질-뻔해서-직접-만들었습니다-feat.-UI만-5번-엎은-썰',
            date: '2025. 12. 09.',
        },
        {
            title: '스토리북에 버전별 컴포넌트 모으기',
            link: 'https://velog.io/@uiwwsw/스토리북에-버전별-컴포넌트-보여주기-낭비-없이-한-곳에-모으는-법',
            date: '2025. 10. 16.',
        },
        {
            title: '재미와 보안, 두 마리 토끼를 잡는 이스터에그 구현법',
            link: 'https://velog.io/@uiwwsw/재미와-보안-두-마리-토끼를-잡는-이스터에그-구현법',
            date: '2025. 07. 21.',
        },
    ],
};

module.exports = { PROFILE };
