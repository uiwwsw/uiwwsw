const PROFILE = {
    identity: {
        handle: 'uiwwsw',
        displayName: 'matthew',
        headline: 'React / TypeScript frontend work focused on product delivery, UI quality, and reusable engineering systems.',
        summaryEn: 'Work spans idea validation, production UI, release support, browser edge cases, and DX automation that reduces repeated effort. The focus is maintainable implementation that stays close to product context.',
        summaryKo: 'React와 TypeScript를 중심으로 제품 UI를 구현합니다. 아이디어 검증, 실제 서비스 UI, 출시 지원, 브라우저 edge case, 반복 작업을 줄이는 DX 자동화까지 연결해 유지보수 가능한 결과물의 완성도를 높입니다.',
        motto: 'Useful interfaces. Reliable delivery.',
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
    quickLinks: [
        {
            focus: 'Product Delivery',
            label: 'GitHubPrint',
            url: 'https://githubprint.vercel.app',
            reason: 'GitHub 활동을 전달 가능한 개발자 문서로 바꾸는 서비스를 직접 만들고 배포했습니다.',
        },
        {
            focus: 'App Launch',
            label: '머랭트립',
            url: 'https://apps.apple.com/kr/app/%EB%A8%B8%EB%9E%AD%ED%8A%B8%EB%A6%BD/id6751193690',
            reason: '기획, 구현, 스토어 출시 흐름까지 경험한 여행 설계 앱입니다.',
        },
        {
            focus: 'DX Automation',
            label: '@uiwwsw/react-query-helper',
            url: 'https://www.npmjs.com/package/@uiwwsw/react-query-helper',
            reason: '반복되는 React Query 훅 작성을 자동화하는 CLI 패키지입니다.',
        },
        {
            focus: 'Input Quality',
            label: '@uiwwsw/virtual-keyboard',
            url: 'https://www.npmjs.com/package/@uiwwsw/virtual-keyboard',
            reason: '한글 IME composition 문제를 입력 UX 품질 관점에서 해결합니다.',
        },
    ],
    npmPackageOverrides: {
        '@uiwwsw/easter-egg': {
            description: 'Add playful hidden interactions to React apps with small, reusable trigger utilities.',
        },
        '@uiwwsw/virtual-keyboard': {
            description: 'A React virtual keyboard package for controlled Korean input without IME composition edge cases.',
        },
    },
    npmPackageOrder: [
        '@uiwwsw/react-query-helper',
        '@uiwwsw/virtual-keyboard',
        '@uiwwsw/infinite-paper',
        '@uiwwsw/easter-egg',
    ],
    workBuckets: [
        {
            title: '1. Product Validation',
            description: '아이디어를 문서에만 두지 않고, 작게 만들고 배포해 실제 사용 맥락에서 빠르게 확인합니다.',
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
                    label: 'make-wire',
                    links: [
                        { label: '재현영상', url: 'https://www.youtube.com/watch?v=Wp9AG1U_qmI' },
                    ],
                    note: '피그마 기획서를 다국어 JSON으로 출력해, 휘발되던 기획 문서를 개발 코드와 연결하고 다국어 운영 비용을 줄일 수 있는지 빠르게 검증한 프로토타입.',
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
            title: '2. Product Delivery',
            description: '프론트엔드 구현을 중심으로 필요한 백엔드 연동, 배포, 스토어 출시, 운영 흐름까지 제품 완성에 필요한 범위를 챙깁니다.',
            items: [
                {
                    label: '찐리뷰',
                    note: '디플리케이트된 리뷰 플랫폼 웹서비스. PostgreSQL, Next.js, Prisma 기반.',
                },
                {
                    label: '머랭트립',
                    links: [
                        { label: 'App Store', url: 'https://apps.apple.com/kr/app/%EB%A8%B8%EB%9E%AD%ED%8A%B8%EB%A6%BD/id6751193690' },
                        { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=io.brewstar.meringuetrip' },
                    ],
                    note: '반경 검색으로 완성하는 똑똑한 여행 설계.',
                },
                {
                    label: '미유미유',
                    links: [
                        { label: 'App Store', url: 'https://apps.apple.com/kr/app/%EB%AF%B8%EC%9C%A0%EB%AF%B8%EC%9C%A0/id6756718662' },
                    ],
                    note: '커플을 위한 햅틱 연결 앱.',
                },
                {
                    label: '큐알토큰',
                    note: '수기 선불권을 가장 똑똑하게. 작업 중인 서비스.',
                },
            ],
        },
        {
            title: '3. DX Automation',
            description: '반복 작업을 줄이고 개발 속도를 높이기 위한 도구, 라이브러리, 워크플로를 자산으로 남깁니다.',
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
            title: '4. UI Engineering',
            description: '마크업, 화면 완성도, 접근 가능한 UI 구조, 재사용 가능한 디자인 시스템을 제품 품질의 기반으로 다룹니다.',
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
                    label: '초기 마크업 포트폴리오',
                    url: 'https://uiwwnw.github.io/portfolio',
                    note: '마크업 중심 작업의 출발점을 담은 초기 포트폴리오.',
                },
            ],
        },
    ],
    seniorSignals: [
        {
            title: 'React / TypeScript Execution',
            description: '서비스형 웹 제품과 오픈소스 패키지를 React / TypeScript 중심으로 만들고 개선합니다.',
        },
        {
            title: 'Product Delivery Range',
            description: '화면 구현을 넘어 API 연동, 배포, 출시 지원, 사용자 반응 확인까지 제품 전달 과정에 참여합니다.',
        },
        {
            title: 'Maintainable UI Quality',
            description: '마크업 구조, 상태 흐름, 브라우저 edge case, 입력 UX까지 유지보수 가능한 화면 품질로 연결합니다.',
        },
        {
            title: 'Reusable Engineering Assets',
            description: '반복되는 문제를 라이브러리, 자동화 CLI, UI 시스템, 문서화된 워크플로로 정리합니다.',
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
