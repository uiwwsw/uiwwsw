const PROFILE = {
    identity: {
        handle: 'uiwwsw',
        name: '윤창원',
        role: 'Senior Frontend Engineer',
        headline: '복잡한 요구사항을 정리하고, 팀이 움직일 순서를 잡습니다.',
        careerLine: '반복되는 일은 도구로, 판단의 근거는 글로 남깁니다.',
    },
    links: [
        { label: '이력서', href: 'https://githubprint.vercel.app/showcase' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/uiwwsw/' },
        { label: '글', href: 'https://velog.io/@uiwwsw' },
        { label: '메일', href: 'mailto:uiwwsw@icloud.com' },
    ],
    productEngineering: [
        '**모바일 커머스** · 4인 프론트엔드 팀을 리드하며 기술 방향과 코드리뷰 기준을 세우고, 일정과 위험도에 따라 업무 우선순위를 조율했습니다.',
        '**한국일보 · 코리아타임스** · 프리랜서 PL로 기사 관리 어드민 2종의 요구사항 분석부터 설계·개발·배포까지 이끌었습니다.',
        '**업라이즈** · 초기 웹서비스와 AWS 환경 구축, 헤이비트 2년 이상 운영, Nuxt.js에서 SvelteKit으로의 점진적 전환을 맡았습니다.',
    ],
    selectedWork: [
        {
            label: 'react-query-helper',
            url: 'https://github.com/uiwwsw/react-query-helper',
            description: '반복되는 API 연결을 자동화하는 CLI. TypeScript 함수에서 TanStack Query 옵션을 생성합니다.',
            links: [
                { label: 'npm', href: 'https://www.npmjs.com/package/@uiwwsw/react-query-helper' },
                { label: '사용 예시', href: 'https://github.com/uiwwsw/react-query-helper#빠른-시작' },
            ],
        },
        {
            label: 'test-mode',
            url: 'https://github.com/uiwwsw/test-mode',
            description: '실패·지연 상태를 재현하는 API mock/patch 도구. 개발·QA·디자인이 같은 화면에서 문제를 확인합니다.',
            links: [
                { label: '설계 문서', href: 'https://github.com/uiwwsw/test-mode/blob/main/docs/story-test-design.md' },
                { label: '동작 영상', href: 'https://raw.githubusercontent.com/uiwwsw/test-mode/main/docs/demo.gif' },
            ],
        },
        {
            label: 'virtual-keyboard',
            url: 'https://github.com/uiwwsw/virtual-keyboard',
            description: '브라우저 IME와 분리된 입력 모델로 한글 조합을 직접 제어하는 React 컴포넌트.',
            links: [
                { label: '데모', href: 'https://composed-input.vercel.app/' },
                { label: 'npm', href: 'https://www.npmjs.com/package/@uiwwsw/virtual-keyboard' },
            ],
        },
    ],
    personalProjects: [
        { label: '글의 우주', url: 'https://uiwwsw.github.io/', description: '직접 쓴 글을 별자리에 놓았습니다. React와 Three.js로 만든, 글 사이를 여행하는 읽기 경험.' },
        { label: 'YAVN', url: 'https://github.com/uiwwsw/yavn', description: '이야기를 플레이할 수 있게. 분기와 연출, 저장·복구를 YAML로 정의하는 비주얼노벨 엔진.' },
        { label: 'GitHubPrint', url: 'https://githubprint.vercel.app', description: 'GitHub의 기록을 전달 가능한 개발자 문서로. AI 응답 검증부터 PDF·Word 내보내기까지 만든 제품.' },
    ],
    featuredWriting: {
        title: '바이브코딩의 끝에는 누가 서 있어야 하는가',
        link: 'https://velog.io/@uiwwsw/바이브코딩의-끝에는-누가-서-있어야-하는가',
        quote: 'AI가 만든 코드라도, 프로젝트에 넣는 순간 그 코드는 개발자의 코드다.',
        context: '팀에서 AI를 쓰며 정리한 설계와 코드리뷰, 책임의 기준.',
    },
    // Explicit publication allowlist: feed updates must not introduce new products.
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
