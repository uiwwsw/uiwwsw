const PROFILE = {
    identity: {
        handle: 'uiwwsw',
        name: '윤창원',
        headline: 'React와 TypeScript로 서비스와 업무 도구를 개발합니다.',
        careerLine: '웹뷰, 어드민, 금융 서비스에서 신규 구축과 운영, 레거시 전환을 맡아왔습니다.',
    },
    links: [
        { label: '경력 · 포지션 문의', href: 'mailto:uiwwsw@icloud.com' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/uiwwsw/' },
        { label: 'Velog', href: 'https://velog.io/@uiwwsw' },
        { label: '글의 우주', href: 'https://uiwwsw.github.io/' },
    ],
    productEngineering: [
        '**웹과 앱의 경계**: 하이브리드 앱의 로그인, 위치 권한, 네이티브 브리지 이슈를 다루고 공통 개발 기준과 배포 검증 절차를 정리했습니다.',
        '**여러 사람이 바꾸는 코드**: Next.js 기반 기사 관리 어드민의 UI와 비즈니스 로직을 분리하고, 서버 상태·권한·오류 처리 규약과 코드리뷰 기준을 마련했습니다.',
        '**운영과 마이그레이션**: 운영하던 Nuxt.js 서비스를 SvelteKit으로 전환하고, Shadow DOM 기반 공통 UI 라이브러리를 만들었습니다.',
    ],
    selectedWork: [
        {
            label: 'react-query-helper',
            url: 'https://github.com/uiwwsw/react-query-helper',
            description: 'TypeScript API 함수에서 TanStack Query 옵션을 생성하는 CLI. **생성 도구와 런타임을 분리**하고, 캐시 키와 페이지 파라미터는 호출부에서 조정할 수 있게 했습니다.',
            links: [
                { label: 'npm', href: 'https://www.npmjs.com/package/@uiwwsw/react-query-helper' },
                { label: '설정과 생성 예시', href: 'https://github.com/uiwwsw/react-query-helper#빠른-시작' },
            ],
        },
        {
            label: 'test-mode',
            url: 'https://github.com/uiwwsw/test-mode',
            description: 'API별 mock/patch와 **화면 단위의 story를 분리**한 테스트 도구. 실제 응답의 일부만 바꾸거나 실패 상태를 재현해, 개발·QA·디자인이 같은 화면을 확인할 수 있습니다.',
            links: [
                { label: '설계 문서', href: 'https://github.com/uiwwsw/test-mode/blob/main/docs/story-test-design.md' },
                { label: '동작 영상', href: 'https://raw.githubusercontent.com/uiwwsw/test-mode/main/docs/demo.gif' },
            ],
        },
        {
            label: 'virtual-keyboard',
            url: 'https://github.com/uiwwsw/virtual-keyboard',
            description: '한글 조합과 입력 정책을 직접 제어하는 React 가상 키보드. **네이티브 IME와 분리한 입력 모델**을 만들고, 한글·숫자·전화번호별 입력 모드를 제공합니다.',
            links: [
                { label: '데모', href: 'https://composed-input.vercel.app/' },
                { label: 'npm', href: 'https://www.npmjs.com/package/@uiwwsw/virtual-keyboard' },
            ],
        },
        {
            label: 'GitHubPrint',
            url: 'https://github.com/uiwwsw/githubprint',
            description: 'GitHub 데이터를 공유 가능한 개발자 문서로 만드는 서비스. **AI 응답을 Zod로 검증**하고 실패하면 규칙 기반 분석으로 전환합니다. Fixture 기반 회귀 검사와 PDF·Word 내보내기를 갖췄습니다.',
            links: [
                { label: '서비스', href: 'https://githubprint.vercel.app' },
                { label: '회귀 검사', href: 'https://github.com/uiwwsw/githubprint/blob/main/scripts/run-quality-regressions.cjs' },
            ],
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
