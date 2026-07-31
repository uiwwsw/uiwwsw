const PROFILE = {
    identity: {
        handle: 'uiwwsw',
        headline: '복잡한 제품을 사용자에게는 단순하게, 팀에게는 계속 바꿀 수 있게 만듭니다.',
        careerLine: '신규 구축과 운영, 점진적 마이그레이션, 공통 규약과 코드리뷰 기준까지 제품의 전 수명주기를 다뤄왔습니다.',
    },
    links: [
        { label: 'EMAIL', href: 'mailto:uiwwsw@icloud.com' },
        { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/uiwwsw/' },
        { label: 'TECH LOG', href: 'https://velog.io/@uiwwsw' },
        { label: 'WRITING UNIVERSE', href: 'https://uiwwsw.github.io/' },
        { label: 'PRODUCTS', href: 'https://brewstar-code.github.io/' },
        { label: 'RESUME', href: 'https://githubprint.vercel.app/showcase' },
    ],
    productEngineering: [
        '신규 구축부터 출시, 운영, 리뉴얼까지 제품의 전체 수명주기를 다뤄왔습니다.',
        '레거시를 멈춰 세우지 않고 점진적으로 옮기며, 복잡한 도메인은 경계와 규약으로 단순화합니다.',
        '공통 타입, API 규약, UI 자산, 모노레포와 코드리뷰 기준을 남겨 팀의 변경 비용을 낮춥니다.',
        'AI가 만든 초안, 브라우저 예외, 실패 상태를 스키마·테스트·재현 가능한 시나리오로 검증합니다.',
    ],
    workingSet: [
        'React',
        'TypeScript',
        'Next.js',
        'SvelteKit',
        'TanStack Query',
        'Node.js',
        'Monorepo',
        'GitHub Actions',
    ],
    selectedWork: [
        {
            label: 'GitHubPrint',
            url: 'https://githubprint.vercel.app',
            sourceUrl: 'https://github.com/uiwwsw/githubprint',
            signals: 'PRODUCT / AI RELIABILITY / DOCUMENT EXPORT',
            description: '공개 GitHub 데이터를 근거로 개발자 문서를 생성합니다. AI 출력은 스키마로 검증하고, 실패 시 결정론적 분석으로 전환하며, PDF·Word 내보내기까지 제공합니다.',
        },
        {
            label: 'test-mode',
            url: 'https://github.com/uiwwsw/test-mode',
            signals: 'TESTABILITY / API SCENARIOS / COLLABORATION',
            description: 'API 성공·지연·실패 상태를 이름 있는 시나리오로 만들어 브라우저와 서버 경계에서 재현합니다. 개발·QA·디자인이 같은 상태를 공유하게 합니다.',
        },
        {
            label: 'virtual-keyboard',
            url: 'https://www.npmjs.com/package/@uiwwsw/virtual-keyboard',
            sourceUrl: 'https://github.com/uiwwsw/virtual-keyboard',
            signals: 'BROWSER INTERNALS / HANGUL INPUT / REACT',
            description: '네이티브 IME 이벤트를 덧대는 대신 한글 조합 상태를 입력 모델이 직접 소유하도록 설계한 React 패키지입니다.',
        },
        {
            label: 'react-query-helper',
            url: 'https://www.npmjs.com/package/@uiwwsw/react-query-helper',
            sourceUrl: 'https://github.com/uiwwsw/react-query-helper',
            signals: 'ABSTRACTION / CODE GENERATION / DX',
            description: 'TypeScript API 함수를 분석해 query·mutation·infinite query 옵션을 생성하고, 반복되는 규약을 코드로 고정합니다.',
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
