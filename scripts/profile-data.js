const PROFILE = {
    identity: {
        handle: 'uiwwsw',
        displayName: 'matthew',
        headline: 'Frontend-led product builder, engineering leader, and operator who validates ideas, ships end-to-end products, and turns systems into reusable assets.',
        summaryEn: 'I combine hands-on frontend execution with founder-style product and operating judgment. I validate ideas quickly, connect product, engineering, and operations, and build the repeatable systems that help teams move faster.',
        summaryKo: '프론트엔드 실행력을 기반으로 제품 판단, 출시, 운영까지 연결합니다. 아이디어는 빠르게 검증하고, 제품과 개발과 운영의 흐름을 맞추며, 대표/이사급 역할에 필요한 판단과 실행을 실제 산출물과 재사용 가능한 UI/DX 자산으로 남깁니다.',
        motto: 'Build the interface. Own the outcome.',
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
            focus: 'C-level Product',
            label: 'GitHubPrint',
            url: 'https://githubprint.vercel.app',
            reason: '개발자 브랜딩 문제를 제품으로 정의하고 배포한 대표 서비스입니다.',
        },
        {
            focus: 'Founder Ops',
            label: '머랭트립',
            url: 'https://apps.apple.com/kr/app/%EB%A8%B8%EB%9E%AD%ED%8A%B8%EB%A6%BD/id6751193690',
            reason: '기획, 구현, 스토어 출시까지 닫은 모바일 제품 경험입니다.',
        },
        {
            focus: 'Engineering Leverage',
            label: '@uiwwsw/react-query-helper',
            url: 'https://www.npmjs.com/package/@uiwwsw/react-query-helper',
            reason: '반복되는 개발 흐름을 자동화해 팀 속도로 전환하는 도구입니다.',
        },
        {
            focus: 'Frontend Craft',
            label: '@uiwwsw/virtual-keyboard',
            url: 'https://www.npmjs.com/package/@uiwwsw/virtual-keyboard',
            reason: '한글 IME composition 문제를 제품 입력 품질 관점에서 해결합니다.',
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
            description: '좋은 아이디어가 생기면 오래 설명하지 않고, 작게 만들고 배포해서 실제 반응과 사업성을 먼저 확인합니다.',
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
            title: '2. End-to-End Ownership',
            description: '서비스를 끝까지 닫아야 할 때는 화면 구현에 머물지 않고, 필요한 백엔드, 배포, 스토어 출시, 운영 흐름까지 직접 연결합니다.',
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
            title: '3. Engineering Leverage',
            description: '반복 작업을 줄이고 조직의 개발 속도를 올리기 위한 도구, 라이브러리, 워크플로를 자산으로 남깁니다.',
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
            title: '4. Frontend Systems',
            description: '마크업, 화면 완성도, 접근 가능한 UI 구조, 재사용 가능한 디자인 시스템을 제품 품질의 핵심 운영 자산으로 봅니다.',
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
            title: 'Frontend Execution',
            description: 'React / TypeScript 기반으로 서비스형 웹 제품, 모바일 보조 웹, 오픈소스 패키지를 직접 만들고 개선합니다.',
        },
        {
            title: 'Product / Business Judgment',
            description: '아이디어를 설명에서 멈추지 않고 MVP, 배포, 사용자 반응 확인, 다음 의사결정으로 이어갑니다.',
        },
        {
            title: 'Operations Mindset',
            description: '출시, 문서화, 반복 업무, 운영 비용까지 고려해 개발 결과물이 실제로 굴러가는 구조를 만듭니다.',
        },
        {
            title: 'C-level Operating Range',
            description: '프론트엔드 개발자, 기술 리드, 제품 관리자, 운영자, 대표 역할 사이를 오가며 결과를 끝까지 책임지는 타입입니다.',
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
