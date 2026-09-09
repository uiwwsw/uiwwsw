const PROFILE = {
    identity: {
        handle: 'uiwwsw',
        name: { en: 'Changwon Yoon', ko: '윤창원' },
        role: 'Senior Frontend Engineer',
        headline: {
            en: 'I turn messy requirements into clear next steps.',
            ko: '복잡한 요구사항을 정리하고, 다음에 할 일을 분명하게 만듭니다.',
        },
        introduction: {
            en: 'I build tools for the repetitive parts, and write about the decisions behind the code.',
            ko: '반복되는 일은 도구로 만들고, 코드에 담긴 판단은 글로 남깁니다.',
        },
    },
    copy: {
        en: {
            languageLink: '[한국어](./README.ko.md)',
            workHeading: 'Selected work',
            personalHeading: 'Away from the backlog',
            personal: 'I studied architecture and write essays. Some of those essays became [a constellation you can explore](https://uiwwsw.github.io/).',
            articleLanguage: 'Written in Korean',
            recentSummary: 'Recent writing (Korean)',
            projectsSummary: 'More projects & released apps',
            appsIntro: 'Apps released through [Brewstar Code](https://brewstar-code.github.io/):',
        },
        ko: {
            languageLink: '[English](./README.md)',
            workHeading: '직접 만든 도구',
            personalHeading: '코드 밖에서는',
            personal: '건축을 전공했고, 에세이를 씁니다. 직접 쓴 글을 모아 [별자리 사이를 여행하는 공간](https://uiwwsw.github.io/)도 만들었습니다.',
            articleLanguage: '한국어 원문',
            recentSummary: '최근에 쓴 글',
            projectsSummary: '다른 작업과 출시한 앱',
            appsIntro: '[Brewstar Code](https://brewstar-code.github.io/)에서 출시한 앱입니다.',
        },
    },
    links: [
        { label: { en: 'Writing (Korean)', ko: '글' }, href: 'https://velog.io/@uiwwsw' },
        { label: { en: 'Resume (Korean)', ko: '이력서' }, href: 'https://githubprint.vercel.app/showcase' },
        { label: { en: 'LinkedIn', ko: 'LinkedIn' }, href: 'https://www.linkedin.com/in/uiwwsw/' },
        { label: { en: 'Email', ko: '메일' }, href: 'mailto:uiwwsw@icloud.com' },
    ],
    selectedWork: [
        {
            label: 'react-query-helper',
            url: 'https://github.com/uiwwsw/react-query-helper',
            description: {
                en: 'Generate TanStack Query options from TypeScript APIs.',
                ko: 'TypeScript API 함수에서 TanStack Query 옵션을 생성합니다.',
            },
        },
        {
            label: 'test-mode',
            url: 'https://github.com/uiwwsw/test-mode',
            description: {
                en: 'Reproduce API failures and delays without changing production code.',
                ko: '서비스 코드를 수정하지 않고 API 실패와 지연 상태를 재현합니다.',
            },
        },
        {
            label: 'virtual-keyboard',
            url: 'https://github.com/uiwwsw/virtual-keyboard',
            description: {
                en: 'A React input component with direct control over Korean text composition.',
                ko: '브라우저 IME와 분리해 한글 조합을 직접 제어하는 React 입력 컴포넌트.',
            },
        },
    ],
    personalProjects: [
        {
            label: 'YAVN',
            url: 'https://github.com/uiwwsw/yavn',
            description: {
                en: 'A YAML-driven visual novel engine with branching stories and save recovery.',
                ko: '분기와 연출, 저장·복구를 YAML로 정의하는 비주얼노벨 엔진.',
            },
        },
        {
            label: 'GitHubPrint',
            url: 'https://githubprint.vercel.app',
            description: {
                en: 'Turn GitHub history into developer documents, with validated AI output and PDF/Word export.',
                ko: 'GitHub 기록을 개발자 문서로. AI 응답 검증과 PDF·Word 내보내기를 제공합니다.',
            },
        },
    ],
    featuredWriting: {
        title: {
            en: 'Who is responsible for AI-generated code?',
            ko: '바이브코딩의 끝에는 누가 서 있어야 하는가',
        },
        link: 'https://velog.io/@uiwwsw/바이브코딩의-끝에는-누가-서-있어야-하는가',
        context: {
            en: 'How I think about design, code review, and responsibility when working with AI.',
            ko: '팀에서 AI를 쓰며 정리한 설계와 코드리뷰, 책임에 관한 생각.',
        },
    },
    // Explicit publication allowlist: feed updates must not introduce new products.
    productCopy: {
        meringuetrip: { en: 'Plan trips with radius-based search.', ko: '반경 검색 기반 여행 설계' },
        meyoumeyou: { en: 'Stay connected through haptics, made for couples.', ko: '커플을 위한 햅틱 연결' },
    },
    fallbackProducts: [
        {
            key: 'meringuetrip',
            nameKo: '머랭트립',
            nameEn: 'MeringTrip',
            description: '반경 검색 기반 여행 설계',
            homeUrl: 'https://brewstar-code.github.io/meringuetrip/',
            techStack: ['Flutter'],
            platforms: [
                {
                    label: 'Google Play',
                    url: 'https://play.google.com/store/apps/details?id=io.brewstar.meringuetrip',
                },
                {
                    label: 'App Store',
                    url: 'https://apps.apple.com/kr/app/%EB%A8%B8%EB%9E%AD%ED%8A%B8%EB%A6%BD/id6751193690',
                },
            ],
        },
        {
            key: 'meyoumeyou',
            nameKo: '미유미유',
            nameEn: 'MeyouMeyou',
            description: '커플을 위한 햅틱 연결',
            homeUrl: 'https://brewstar-code.github.io/meyoumeyou/',
            techStack: ['Flutter'],
            platforms: [
                {
                    label: 'App Store',
                    url: 'https://apps.apple.com/kr/app/%EB%AF%B8%EC%9C%A0%EB%AF%B8%EC%9C%A0/id6756718662',
                },
            ],
        },
    ],
    fallbackVelogPosts: [
        {
            title: '실 서비스 코드를 건드리지 않고 테스트하기: API 인터셉터 기반 목 데이터 설계',
            titleEn: 'Testing without changing production code: API interception and mock data',
            link: 'https://velog.io/@uiwwsw/실-서비스-코드를-건드리지-않고-테스트하기-API-인터셉터-기반-목-데이터-설계',
            date: '2026. 05. 22.',
        },
        {
            title: '바이브코딩의 끝에는 누가 서 있어야 하는가',
            titleEn: 'Who is responsible for AI-generated code?',
            link: 'https://velog.io/@uiwwsw/바이브코딩의-끝에는-누가-서-있어야-하는가',
            date: '2026. 05. 13.',
        },
        {
            title: '전달 가능한 개발자 문서(깃허브 프린트)',
            titleEn: 'Turning GitHub history into shareable developer documents',
            link: 'https://velog.io/@uiwwsw/GitHub를-전달-가능한-개발자-문서로-바꾸는-GitFolio를-만들었습니다',
            date: '2026. 03. 18.',
        },
    ],
};

module.exports = { PROFILE };
