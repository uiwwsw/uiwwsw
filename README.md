# 윤창원

**Senior Frontend Engineer** · uiwwsw

일이 막혔을 때, 풀어야 할 문제부터 다시 정리합니다.

복잡한 요구사항에서 우선순위를 잡고, 설계와 구현을 거쳐 출시 이후의 운영까지 맡아왔습니다.

<a href="https://githubprint.vercel.app/showcase">이력서</a> &nbsp;·&nbsp; <a href="https://www.linkedin.com/in/uiwwsw/">LinkedIn</a> &nbsp;·&nbsp; <a href="https://velog.io/@uiwwsw">글</a> &nbsp;·&nbsp; <a href="mailto:uiwwsw@icloud.com">메일</a>

## 해온 일

2015년 UI 개발로 시작해, 서비스의 초기 구축과 운영, 프론트엔드 팀 리딩으로 일을 넓혀왔습니다.

- **모바일 커머스** · 시니어 3명을 포함한 4인 프론트엔드 팀을 리드했습니다. 기술 방향과 개발 기준을 정하고, 서비스 리스크와 의존성을 기준으로 우선순위를 조율했습니다.
- **한국일보 · 코리아타임스** · 프리랜서 PL로 기사 관리 어드민 2종의 분석·설계·구현·배포를 리드했습니다. 권한과 API 패턴, 코드리뷰 기준을 공통화했습니다.
- **업라이즈** · 초기 웹서비스와 AWS 운영 환경을 구축하고, 헤이비트를 2년 이상 운영했습니다. 운영 중인 Nuxt.js 코드를 SvelteKit으로 점진적으로 전환했습니다.

주로 React, TypeScript, Next.js를 씁니다. 공통 UI와 API 규약, 자동화 도구로 반복되는 판단을 코드에 남깁니다.

## 지금 만드는 제품

아직 정식 출시 전입니다. 아래 웹 링크는 개발 중인 화면을 미리 볼 수 있는 프리뷰입니다.

- **[9BOX](https://9box.duckdns.org/)** · <sub>프로토타입 · 예시 데이터</sub><br>
  공고의 키워드보다 경력의 맥락으로 사람과 팀을 연결하는 인재 탐색 서비스.
- **[롱폼리뷰](https://longform-review.duckdns.org/)** · <sub>개발 중</sub><br>
  별점보다 구체적인 이용 경험이 먼저 읽히는 리뷰 플랫폼. 검색, 리뷰 검토, 운영 정책을 함께 설계합니다.
- **[JSONSURVEY](https://jsonsurvey.duckdns.org/)** · <sub>개발 중</sub><br>
  질문·분기·점수·결과를 JSON으로 정의하는 설문 플랫폼. 답변 직후의 반응부터 게시와 공유까지 연결합니다.
- **베디(Be:D)** · <sub>앱 출시 준비</sub><br>
  좋은 운전을 칭찬으로 연결하는 모바일 앱. 주행 중 조작을 제한하고, 안전하게 정차한 뒤 참여하는 흐름을 만듭니다.

## 반복되는 문제는 도구로

**[react-query-helper](https://github.com/uiwwsw/react-query-helper)**

API마다 반복하던 연결 코드를 생성기로 옮겼습니다. TypeScript 함수를 읽어 TanStack Query 옵션을 만들고, 팀이 같은 규약으로 사용하게 합니다.

<sub><a href="https://www.npmjs.com/package/@uiwwsw/react-query-helper">npm</a> &nbsp;·&nbsp; <a href="https://github.com/uiwwsw/react-query-helper#빠른-시작">사용 예시</a></sub>

**[test-mode](https://github.com/uiwwsw/test-mode)**

실제 응답을 일부 바꾸거나 mock으로 대체해 실패·지연 상태를 재현합니다. 개발·QA·디자인이 같은 화면을 보며 문제를 확인할 수 있게 만들었습니다.

<sub><a href="https://github.com/uiwwsw/test-mode/blob/main/docs/story-test-design.md">설계 문서</a> &nbsp;·&nbsp; <a href="https://raw.githubusercontent.com/uiwwsw/test-mode/main/docs/demo.gif">동작 영상</a></sub>

**[virtual-keyboard](https://github.com/uiwwsw/virtual-keyboard)**

한글 조합 문제를 다루다 입력 모델부터 만들었습니다. 네이티브 IME와 분리해 한글 조합과 입력 정책을 직접 제어하는 React 컴포넌트입니다.

<sub><a href="https://composed-input.vercel.app/">데모</a> &nbsp;·&nbsp; <a href="https://www.npmjs.com/package/@uiwwsw/virtual-keyboard">npm</a></sub>

## 글로 남긴 생각

> AI가 만든 코드라도, 프로젝트에 넣는 순간 그 코드는 개발자의 코드다.

[바이브코딩의 끝에는 누가 서 있어야 하는가](https://velog.io/@uiwwsw/바이브코딩의-끝에는-누가-서-있어야-하는가)<br>
팀에서 AI를 쓰며 정리한 설계와 코드리뷰, 책임의 기준.

<!--START_VELOG-->
- [실 서비스 코드를 건드리지 않고 테스트하기: API 인터셉터 기반 목 데이터 설계](https://velog.io/@uiwwsw/실-서비스-코드를-건드리지-않고-테스트하기-API-인터셉터-기반-목-데이터-설계) <sub>2026. 05. 22.</sub>
- [전달 가능한 개발자 문서(깃허브 프린트)](https://velog.io/@uiwwsw/GitHub를-전달-가능한-개발자-문서로-바꾸는-GitFolio를-만들었습니다) <sub>2026. 03. 18.</sub>
<!--END_VELOG-->

기술 밖에서는 사람과 일상에 관한 에세이를 씁니다. [10년의 회고](https://velog.io/@uiwwsw/10년의-회고)에는 함께 일해온 동료들에 대한 생각을 담았습니다.

<details>
<summary><strong>다른 작업과 출시한 앱</strong></summary>

건축을 전공했고, 글과 이야기를 좋아합니다. 관심이 오래 머무는 것들은 직접 만들어 봅니다.

- **[글의 우주](https://uiwwsw.github.io/)** · 직접 쓴 글을 별자리에 놓았습니다. React와 Three.js로 만든, 글 사이를 여행하는 읽기 경험.
- **[YAVN](https://github.com/uiwwsw/yavn)** · 이야기를 플레이할 수 있게. 분기와 연출, 저장·복구를 YAML로 정의하는 비주얼노벨 엔진.
- **[GitHubPrint](https://githubprint.vercel.app)** · GitHub의 기록을 전달 가능한 개발자 문서로. AI 응답 검증부터 PDF·Word 내보내기까지 만든 제품.

[Brewstar Code](https://brewstar-code.github.io/)에서는 앱을 출시하고 있습니다.

<!--START_PRODUCTS-->
- **[머랭트립](https://brewstar-code.github.io/meringuetrip/)** · 반경 검색 기반 여행 설계<br>
  `Flutter` · [Google Play](https://play.google.com/store/apps/details?id=io.brewstar.meringuetrip) · [App Store](https://apps.apple.com/kr/app/%EB%A8%B8%EB%9E%AD%ED%8A%B8%EB%A6%BD/id6751193690)
- **[미유미유](https://brewstar-code.github.io/meyoumeyou/)** · 커플을 위한 햅틱 연결<br>
  `Flutter` · [App Store](https://apps.apple.com/kr/app/%EB%AF%B8%EC%9C%A0%EB%AF%B8%EC%9C%A0/id6756718662)
<!--END_PRODUCTS-->

</details>
