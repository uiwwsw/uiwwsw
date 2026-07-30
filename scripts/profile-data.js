const PROFILE = {
    identity: {
        handle: 'uiwwsw',
        displayName: 'matthew',
        headline: 'I engineer what happens next.',
        summaryEn: 'The edge cases, fallbacks, test states, release paths, and reusable systems that turn AI-assisted drafts into dependable products. React and TypeScript, from browser behavior to shipped apps.',
        summaryKo: 'AI가 빠르게 만든 정상 흐름 이후의 문제를 다룹니다. 브라우저 edge case, 실패 상태, 검증 가능한 대체 경로, 출시 과정, 다시 쓰이는 도구까지 연결해 코드가 실제 제품 환경에서 버티게 만듭니다.',
        motto: 'AI can write the happy path.',
        appReleaseCount: 2,
        aiProductCount: 1,
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
    failureModes: [
        {
            failure: 'AI returns something plausible',
            decision: 'Ground the output, validate its shape, and keep a deterministic fallback.',
            label: 'GitHubPrint',
            url: 'https://githubprint.vercel.app',
        },
        {
            failure: 'The bug only happens in Korean input',
            decision: 'Own the input model instead of patching composition symptoms.',
            label: 'virtual-keyboard',
            url: 'https://www.npmjs.com/package/@uiwwsw/virtual-keyboard',
        },
        {
            failure: 'QA cannot reproduce the state',
            decision: 'Turn API failures into shareable, story-based test states.',
            label: 'test-mode',
            url: 'https://github.com/uiwwsw/test-mode',
        },
        {
            failure: 'The same glue code appears again',
            decision: 'Treat repetition as a code-generation and convention problem.',
            label: 'react-query-helper',
            url: 'https://www.npmjs.com/package/@uiwwsw/react-query-helper',
        },
        {
            failure: 'The prototype has to survive release',
            decision: 'Follow the product through both app stores and the refactor after launch.',
            label: '머랭트립',
            url: 'https://apps.apple.com/kr/app/%EB%A8%B8%EB%9E%AD%ED%8A%B8%EB%A6%BD/id6751193690',
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
    caseFiles: [
        {
            number: '01',
            title: 'AI is probabilistic. The product cannot be.',
            label: 'GitHubPrint',
            url: 'https://githubprint.vercel.app',
            problem: 'AI analysis can fail, drift, or infer beyond the public evidence it received.',
            decision: 'Collect the source first, validate OpenAI output with Zod, and preserve a deterministic analysis path when AI is unavailable.',
            proof: 'Live Korean and English routes · PDF and Word export · fixture-based quality regressions',
        },
        {
            number: '02',
            title: 'A state you cannot reproduce is a state you cannot fix.',
            label: 'test-mode',
            url: 'https://github.com/uiwwsw/test-mode',
            problem: 'Rare API failures are hard to discuss when every developer, QA, and designer has to recreate them by hand.',
            decision: 'Model product states as named stories that mock or patch requests across browser and server boundaries.',
            proof: 'Framework-neutral TypeScript runtime · console control · visible TEST MODE overlay',
        },
        {
            number: '03',
            title: 'A browser edge case is still product behavior.',
            label: 'virtual-keyboard',
            url: 'https://www.npmjs.com/package/@uiwwsw/virtual-keyboard',
            problem: 'Korean IME composition can duplicate characters, move the cursor, or break controlled input.',
            decision: 'Own Hangul composition in the input model instead of stacking fixes on native composition events.',
            proof: 'React package · Hangul, number, and telephone policies · mobile-first demo',
        },
        {
            number: '04',
            title: 'Repetition is an architecture signal.',
            label: 'react-query-helper',
            url: 'https://www.npmjs.com/package/@uiwwsw/react-query-helper',
            problem: 'Repeated query glue code spreads inconsistent cache keys, options, and conventions.',
            decision: 'Analyze TypeScript API functions and generate query, mutation, and infinite options through replaceable analyzers and templates.',
            proof: 'Published npm CLI · configurable generation rules · extensible analyzer and template modules',
        },
    ],
    shippedProducts: [
        {
            label: 'GitHubPrint',
            url: 'https://githubprint.vercel.app',
            surface: 'Web · KO/EN · PDF/Word',
            outcome: '공개 GitHub 근거를 공유 가능한 개발자 문서로 변환해 실제 서비스로 배포했습니다.',
        },
        {
            label: '머랭트립',
            links: [
                { label: 'App Store', url: 'https://apps.apple.com/kr/app/%EB%A8%B8%EB%9E%AD%ED%8A%B8%EB%A6%BD/id6751193690' },
                { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=io.brewstar.meringuetrip' },
            ],
            surface: 'iOS · Android',
            outcome: '반경 검색 기반 여행 설계 앱을 기획·구현·출시하고 Flutter 전환 리팩터링까지 이어갔습니다.',
        },
        {
            label: '미유미유',
            links: [
                { label: 'App Store', url: 'https://apps.apple.com/kr/app/%EB%AF%B8%EC%9C%A0%EB%AF%B8%EC%9C%A0/id6756718662' },
            ],
            surface: 'iOS',
            outcome: '커플 간 햅틱 연결 경험을 제품화해 App Store에 출시했습니다.',
        },
        {
            label: 'BackThen',
            url: 'https://backthen.vercel.app',
            surface: 'Web',
            outcome: '그해의 오늘을 탐색하는 아이디어를 작은 제품으로 만들고 배포해 사용 맥락을 확인했습니다.',
        },
    ],
    systemAssets: [
        {
            boundary: 'Validated content DSL',
            label: 'YAVN',
            url: 'https://github.com/uiwwsw/yavn',
            proof: 'Zod and reference validation · parser/engine/history boundaries · CI tests and build',
        },
        {
            boundary: 'UI component lifecycle',
            label: 'shadcn2',
            url: 'https://shadcn2.vercel.app',
            proof: 'Tailwind CSS v4 · Storybook version snapshots · release and migration policy',
        },
        {
            boundary: 'Paginated data window',
            label: 'infinite-paper',
            url: 'https://www.npmjs.com/package/@uiwwsw/infinite-paper',
            proof: 'Infinite scroll and pagination through one reusable state model',
        },
        {
            boundary: 'Design-to-code handoff',
            label: 'make-wire',
            url: 'https://www.youtube.com/watch?v=Wp9AG1U_qmI',
            proof: 'Figma planning documents exported as multilingual JSON',
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
