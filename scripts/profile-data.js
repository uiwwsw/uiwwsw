const PROFILE = {
    identity: {
        handle: 'uiwwsw',
        displayName: 'matthew',
        headline: 'Frontend engineering for products that must ship, evolve, and stay reliable.',
        summaryEn: 'React and TypeScript across production UI, app releases, design systems, browser edge cases, and developer tooling. AI accelerates exploration and repetitive work; architecture, fallback design, review, and final verification remain engineer-owned.',
        summaryKo: 'React와 TypeScript로 제품을 실제 사용자에게 전달하고, 출시 이후에도 바꾸기 쉬운 UI와 도구를 만듭니다. AI는 탐색과 반복 작업의 속도를 높이는 데 활용하되, 설계 판단과 대체 경로, 코드 검토, 최종 검증은 개발자의 책임으로 남깁니다.',
        motto: 'Faster with AI. Reliable by design.',
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
    quickLinks: [
        {
            focus: 'AI + Reliability',
            label: 'GitHubPrint',
            url: 'https://githubprint.vercel.app',
            reason: 'OpenAI 분석에 스키마 검증과 규칙 기반 대체 경로를 결합해, AI 사용 가능 여부와 관계없이 결과를 제공하는 제품입니다.',
        },
        {
            focus: 'End-to-end Delivery',
            label: '머랭트립',
            url: 'https://apps.apple.com/kr/app/%EB%A8%B8%EB%9E%AD%ED%8A%B8%EB%A6%BD/id6751193690',
            reason: '기획과 구현부터 App Store·Google Play 출시, 이후 리팩터링까지 제품의 전체 흐름을 다뤘습니다.',
        },
        {
            focus: 'Testability',
            label: '@uiwwsw/test-mode',
            url: 'https://github.com/uiwwsw/test-mode',
            reason: 'API mock·patch와 story 기반 테스트 시나리오를 공유 가능한 상태로 만들어 QA와 디버깅의 재현성을 높입니다.',
        },
        {
            focus: 'Developer Productivity',
            label: '@uiwwsw/react-query-helper',
            url: 'https://www.npmjs.com/package/@uiwwsw/react-query-helper',
            reason: 'TypeScript API를 분석해 React Query 코드를 생성하고 팀별 분석기·템플릿 규칙까지 확장하는 CLI입니다.',
        },
        {
            focus: 'Browser Correctness',
            label: '@uiwwsw/virtual-keyboard',
            url: 'https://www.npmjs.com/package/@uiwwsw/virtual-keyboard',
            reason: '한글 IME composition의 중복 입력, 커서 이동, 조합 깨짐을 입력 모델 수준에서 우회합니다.',
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
            title: '1. AI With Guardrails',
            description: 'AI를 결과 그 자체로 두지 않고 탐색과 반복 구현을 가속하는 도구로 사용합니다. 입력 근거, 스키마, 결정론적 대체 경로, 회귀 검사를 함께 설계해 결과를 검증할 수 있는 경로를 남깁니다.',
            items: [
                {
                    label: 'GitHubPrint',
                    url: 'https://githubprint.vercel.app',
                    note: '공개 GitHub 근거를 한·영 개발자 문서로 변환합니다. OpenAI Responses API 분석에 Zod 스키마 검증, 규칙 기반 대체 경로, fixture 기반 품질 회귀 검사를 결합한 실제 배포 제품입니다.',
                },
                {
                    label: '바이브코딩의 끝에는 누가 서 있어야 하는가',
                    url: 'https://velog.io/@uiwwsw/바이브코딩의-끝에는-누가-서-있어야-하는가',
                    note: 'AI가 만든 코드의 최종 판단과 검증 책임은 개발자에게 남는다는 작업 원칙을 정리한 글입니다.',
                },
            ],
        },
        {
            title: '2. From Problem to Release',
            description: '요구사항이 완성되기를 기다리기보다 작은 제품과 프로토타입으로 문제를 구체화하고, 프론트엔드 구현에서 배포와 스토어 출시까지 연결합니다.',
            items: [
                {
                    label: '머랭트립',
                    links: [
                        { label: 'App Store', url: 'https://apps.apple.com/kr/app/%EB%A8%B8%EB%9E%AD%ED%8A%B8%EB%A6%BD/id6751193690' },
                        { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=io.brewstar.meringuetrip' },
                    ],
                    note: '반경 검색 기반 여행 설계 앱. 기획·구현·스토어 출시 후 Flutter 전환 리팩터링까지 이어갔습니다.',
                },
                {
                    label: '미유미유',
                    links: [
                        { label: 'App Store', url: 'https://apps.apple.com/kr/app/%EB%AF%B8%EC%9C%A0%EB%AF%B8%EC%9C%A0/id6756718662' },
                    ],
                    note: '커플 간 햅틱 연결 경험을 제품화해 App Store에 출시했습니다.',
                },
                {
                    label: 'BackThen',
                    url: 'https://backthen.vercel.app',
                    note: '그해의 오늘을 바로 탐색하는 작은 웹 제품. 빠른 제작과 배포로 아이디어를 검증했습니다.',
                },
                {
                    label: 'make-wire',
                    links: [
                        { label: '재현영상', url: 'https://www.youtube.com/watch?v=Wp9AG1U_qmI' },
                    ],
                    note: 'Figma 기획서를 다국어 JSON으로 변환해 기획과 코드 사이의 전달 손실을 줄이는 프로토타입입니다.',
                },
            ],
        },
        {
            title: '3. Reliability in the Details',
            description: '정상 흐름만 구현하는 데서 멈추지 않고 브라우저 입력, 실패 상태, 데이터 계약, 저장 호환성처럼 제품에서 실제로 깨지는 경계를 다룹니다.',
            items: [
                {
                    label: '@uiwwsw/test-mode',
                    url: 'https://github.com/uiwwsw/test-mode',
                    note: 'API mock·patch, story 기반 시나리오, 화면 표시, 브라우저·서버 연동을 프레임워크 독립 TypeScript 런타임으로 분리해 공유 가능한 테스트 상태를 만듭니다.',
                },
                {
                    label: '@uiwwsw/virtual-keyboard',
                    url: 'https://www.npmjs.com/package/@uiwwsw/virtual-keyboard',
                    note: '네이티브 input과 contentEditable에 의존하지 않고 한글 조합을 직접 처리해 중복 입력, 커서 이동, 조합 깨짐을 우회합니다.',
                },
                {
                    label: 'YAVN',
                    url: 'https://github.com/uiwwsw/yavn',
                    note: 'YAML DSL을 Zod 스키마와 참조 검증으로 보호하고 parser·engine·state·history를 분리한 비주얼노벨 엔진입니다. 회귀 테스트와 프로덕션 빌드를 CI에서 검증합니다.',
                },
            ],
        },
        {
            title: '4. Systems That Compound',
            description: '반복되는 구현과 팀의 판단 비용을 코드 생성기, UI 패키지, 데이터 흐름 라이브러리, 문서화된 규칙으로 바꿔 다음 작업의 출발점을 높입니다.',
            items: [
                {
                    label: '@uiwwsw/react-query-helper',
                    url: 'https://www.npmjs.com/package/@uiwwsw/react-query-helper',
                    note: 'TypeScript API에서 query·mutation·infinite option 코드를 생성하고, 팀별 분석기와 템플릿 규칙으로 확장할 수 있는 CLI입니다.',
                },
                {
                    label: 'shadcn2',
                    url: 'https://shadcn2.vercel.app',
                    note: 'Tailwind CSS v4 UI 패키지에 Storybook 버전 스냅샷, 태그 기반 배포, 폐기·마이그레이션 정책을 함께 운영합니다.',
                },
                {
                    label: '@uiwwsw/infinite-paper',
                    url: 'https://www.npmjs.com/package/@uiwwsw/infinite-paper',
                    note: '무한 스크롤과 페이지네이션을 같은 데이터 윈도우 모델로 다루는 재사용 가능한 상태 관리 라이브러리입니다.',
                },
            ],
        },
    ],
    seniorSignals: [
        {
            title: 'AI With Guardrails',
            description: 'AI 분석에 근거 수집, 스키마 검증, 결정론적 대체 경로, fixture와 회귀 검사를 함께 둡니다.',
        },
        {
            title: 'Outcome Over Output',
            description: '화면 구현량보다 실제 배포, 스토어 출시, 실패 상태와 사용자 맥락까지 이어지는 결과를 우선합니다.',
        },
        {
            title: 'Quality as a System',
            description: '테스트 시나리오, CI, Storybook, 대체 경로, 배포 워크플로를 통해 품질을 반복 가능한 과정으로 만듭니다.',
        },
        {
            title: 'Build for Change',
            description: 'API·상태·컴포넌트·생성 규칙을 교체 가능한 경계로 나누고 반복 문제를 재사용 자산으로 남깁니다.',
        },
        {
            title: 'Write for Handoff',
            description: '한·영 제품 경로와 README, 아키텍처 표, 기여 규칙, 마이그레이션 가이드로 구현의 맥락을 전달합니다.',
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
