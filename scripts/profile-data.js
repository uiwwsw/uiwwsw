const PROFILE = {
    identity: {
        handle: 'uiwwsw',
        headline: '제품을 출시하고, 다음 변경이 쉬워지는 구조를 남깁니다.',
        careerLine: 'UI에서 시작해 제품 구축, 운영, 마이그레이션, 아키텍처와 팀 표준까지 이어 왔습니다.',
    },
    links: [
        { label: 'EMAIL', href: 'mailto:uiwwsw@icloud.com' },
        { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/uiwwsw/' },
        { label: 'TECH LOG', href: 'https://velog.io/@uiwwsw' },
        { label: 'WRITING UNIVERSE', href: 'https://uiwwsw.github.io/' },
        { label: 'PRODUCTS', href: 'https://brewstar-code.github.io/' },
        { label: 'RESUME', href: 'https://githubprint.vercel.app/showcase' },
    ],
    selectedWork: [
        {
            label: 'GitHubPrint',
            url: 'https://githubprint.vercel.app',
            sourceUrl: 'https://github.com/uiwwsw/githubprint',
            kind: 'Live product',
            description: 'Public GitHub evidence into a shareable developer document, with validated AI output, deterministic fallback, and PDF/Word export.',
        },
        {
            label: 'test-mode',
            url: 'https://github.com/uiwwsw/test-mode',
            kind: 'Open-source tool',
            description: 'Named API scenarios make loading, failure, and edge states reproducible across browser and server boundaries.',
        },
        {
            label: 'virtual-keyboard',
            url: 'https://www.npmjs.com/package/@uiwwsw/virtual-keyboard',
            sourceUrl: 'https://github.com/uiwwsw/virtual-keyboard',
            kind: 'npm package',
            description: 'A controlled React keyboard that owns Hangul composition instead of patching native IME symptoms.',
        },
        {
            label: 'react-query-helper',
            url: 'https://www.npmjs.com/package/@uiwwsw/react-query-helper',
            sourceUrl: 'https://github.com/uiwwsw/react-query-helper',
            kind: 'npm package',
            description: 'A TypeScript CLI that turns API functions into consistent query, mutation, and infinite-query options.',
        },
    ],
    productCopy: {
        meringuetrip: '반경 검색 기반 여행 설계',
        meyoumeyou: '커플을 위한 햅틱 연결',
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
            link: 'https://velog.io/@uiwwsw/실-서비스-코드를-건드리지-않고-테스트하기-API-인터셉터-기반-목-데이터-설계',
            date: '2026. 05. 22.',
        },
        {
            title: '바이브코딩의 끝에는 누가 서 있어야 하는가',
            link: 'https://velog.io/@uiwwsw/바이브코딩의-끝에는-누가-서-있어야-하는가',
            date: '2026. 05. 13.',
        },
        {
            title: '전달 가능한 개발자 문서(깃허브 프린트)',
            link: 'https://velog.io/@uiwwsw/GitHub를-전달-가능한-개발자-문서로-바꾸는-GitFolio를-만들었습니다',
            date: '2026. 03. 18.',
        },
    ],
};

module.exports = { PROFILE };
