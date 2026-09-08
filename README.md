<picture>
  <source media="(prefers-color-scheme: dark) and (max-width: 600px)" srcset="./assets/profile-dark-mobile.svg">
  <source media="(prefers-color-scheme: light) and (max-width: 600px)" srcset="./assets/profile-light-mobile.svg">
  <source media="(prefers-color-scheme: dark)" srcset="./assets/profile-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="./assets/profile-light.svg">
  <img src="./assets/profile-light.svg" alt="uiwwsw · Frontend Engineer. Complex products. Clear systems." width="100%">
</picture>

**윤창원** · Frontend Engineer

React와 TypeScript로 서비스와 업무 도구를 개발합니다.<br>
웹뷰, 어드민, 금융 서비스에서 신규 구축과 운영, 레거시 전환을 맡아왔습니다.

<a href="mailto:uiwwsw@icloud.com">경력 · 포지션 문의</a> &nbsp;·&nbsp; <a href="https://www.linkedin.com/in/uiwwsw/">LinkedIn</a> &nbsp;·&nbsp; <a href="https://velog.io/@uiwwsw">Velog</a> &nbsp;·&nbsp; <a href="https://uiwwsw.github.io/">글의 우주</a>

## 설계와 운영

- **웹과 앱의 경계**: 하이브리드 앱의 로그인, 위치 권한, 네이티브 브리지 이슈를 다루고 공통 개발 기준과 배포 검증 절차를 정리했습니다.
- **여러 사람이 바꾸는 코드**: Next.js 기반 기사 관리 어드민의 UI와 비즈니스 로직을 분리하고, 서버 상태·권한·오류 처리 규약과 코드리뷰 기준을 마련했습니다.
- **운영과 마이그레이션**: 운영하던 Nuxt.js 서비스를 SvelteKit으로 전환하고, Shadow DOM 기반 공통 UI 라이브러리를 만들었습니다.

## 직접 만든 도구와 제품

### [react-query-helper](https://github.com/uiwwsw/react-query-helper)

TypeScript API 함수에서 TanStack Query 옵션을 생성하는 CLI. **생성 도구와 런타임을 분리**하고, 캐시 키와 페이지 파라미터는 호출부에서 조정할 수 있게 했습니다.

<sub><a href="https://www.npmjs.com/package/@uiwwsw/react-query-helper">npm</a> &nbsp;·&nbsp; <a href="https://github.com/uiwwsw/react-query-helper#빠른-시작">설정과 생성 예시</a></sub>

### [test-mode](https://github.com/uiwwsw/test-mode)

API별 mock/patch와 **화면 단위의 story를 분리**한 테스트 도구. 실제 응답의 일부만 바꾸거나 실패 상태를 재현해, 개발·QA·디자인이 같은 화면을 확인할 수 있습니다.

<sub><a href="https://github.com/uiwwsw/test-mode/blob/main/docs/story-test-design.md">설계 문서</a> &nbsp;·&nbsp; <a href="https://raw.githubusercontent.com/uiwwsw/test-mode/main/docs/demo.gif">동작 영상</a></sub>

### [virtual-keyboard](https://github.com/uiwwsw/virtual-keyboard)

한글 조합과 입력 정책을 직접 제어하는 React 가상 키보드. **네이티브 IME와 분리한 입력 모델**을 만들고, 한글·숫자·전화번호별 입력 모드를 제공합니다.

<sub><a href="https://composed-input.vercel.app/">데모</a> &nbsp;·&nbsp; <a href="https://www.npmjs.com/package/@uiwwsw/virtual-keyboard">npm</a></sub>

### [GitHubPrint](https://github.com/uiwwsw/githubprint)

GitHub 데이터를 공유 가능한 개발자 문서로 만드는 서비스. **AI 응답을 Zod로 검증**하고 실패하면 규칙 기반 분석으로 전환합니다. Fixture 기반 회귀 검사와 PDF·Word 내보내기를 갖췄습니다.

<sub><a href="https://githubprint.vercel.app">서비스</a> &nbsp;·&nbsp; <a href="https://github.com/uiwwsw/githubprint/blob/main/scripts/run-quality-regressions.cjs">회귀 검사</a></sub>

## 만들면서 쓴 글

구현하다 막힌 지점과, 그때 내린 선택을 기록합니다.

<!--START_VELOG-->
- [실 서비스 코드를 건드리지 않고 테스트하기: API 인터셉터 기반 목 데이터 설계](https://velog.io/@uiwwsw/실-서비스-코드를-건드리지-않고-테스트하기-API-인터셉터-기반-목-데이터-설계) <sub>2026. 05. 22.</sub>
- [바이브코딩의 끝에는 누가 서 있어야 하는가](https://velog.io/@uiwwsw/바이브코딩의-끝에는-누가-서-있어야-하는가) <sub>2026. 05. 13.</sub>
- [전달 가능한 개발자 문서(깃허브 프린트)](https://velog.io/@uiwwsw/GitHub를-전달-가능한-개발자-문서로-바꾸는-GitFolio를-만들었습니다) <sub>2026. 03. 18.</sub>
<!--END_VELOG-->

[글의 우주](https://uiwwsw.github.io/)에는 글을 별자리로 엮었습니다. React와 Three.js로 만든 인터랙티브 아카이브입니다.

## 앱으로도 출시했습니다

[Brewstar Code](https://brewstar-code.github.io/)에서 만든 제품들입니다.

<!--START_PRODUCTS-->
- **[머랭트립](https://brewstar-code.github.io/meringuetrip/)** · 반경 검색 기반 여행 설계<br>
  `Flutter` · [Google Play](https://play.google.com/store/apps/details?id=io.brewstar.meringuetrip) · [App Store](https://apps.apple.com/kr/app/%EB%A8%B8%EB%9E%AD%ED%8A%B8%EB%A6%BD/id6751193690)
- **[미유미유](https://brewstar-code.github.io/meyoumeyou/)** · 커플을 위한 햅틱 연결<br>
  `Flutter` · [App Store](https://apps.apple.com/kr/app/%EB%AF%B8%EC%9C%A0%EB%AF%B8%EC%9C%A0/id6756718662)
<!--END_PRODUCTS-->

---

상세 경력과 함께 일할 이야기는 [uiwwsw@icloud.com](mailto:uiwwsw@icloud.com)으로 연락 주세요.
