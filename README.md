<p align="center">
  <img src="./assets/profile-constellation.svg" alt="uiwwsw project constellation" width="100%" />
</p>

<p align="center"><strong>Faster with AI. Reliable by design.</strong></p>

<p align="center"><strong>Frontend engineering for products that must ship, evolve, and stay reliable.</strong></p>

<p align="center">
  React and TypeScript across production UI, app releases, design systems, browser edge cases, and developer tooling. AI accelerates exploration and repetitive work; architecture, fallback design, review, and final verification remain engineer-owned.<br />
  React와 TypeScript로 제품을 실제 사용자에게 전달하고, 출시 이후에도 바꾸기 쉬운 UI와 도구를 만듭니다. AI는 탐색과 반복 작업의 속도를 높이는 데 활용하되, 설계 판단과 대체 경로, 코드 검토, 최종 검증은 개발자의 책임으로 남깁니다.
</p>

<p align="center">
  2 shipped apps · 1 live AI-assisted product · 4 public npm packages
</p>

<p align="center">
  <a href="mailto:uiwwsw@icloud.com"><img src="https://img.shields.io/badge/Email-uiwwsw%40icloud.com-101418?style=flat-square&logo=icloud&logoColor=white" alt="Email" /></a>
  <a href="https://www.linkedin.com/in/uiwwsw/"><img src="https://img.shields.io/badge/LinkedIn-uiwwsw-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://velog.io/@uiwwsw"><img src="https://img.shields.io/badge/Velog-uiwwsw-20C997?style=flat-square&logo=velog&logoColor=white" alt="Velog" /></a>
  <a href="https://uiwwsw.github.io/"><img src="https://img.shields.io/badge/Portfolio-Universe-304A6E?style=flat-square&logo=about-dot-me&logoColor=white" alt="Portfolio" /></a>
  <a href="https://githubprint.vercel.app"><img src="https://img.shields.io/badge/GitHubPrint-Live-1F2937?style=flat-square&logo=github&logoColor=white" alt="GitHubPrint" /></a>
  <a href="https://github.com/uiwwsw"><img src="https://img.shields.io/badge/GitHub-uiwwsw-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
</p>

## Selected Evidence

| Signal | Evidence | What it demonstrates |
| --- | --- | --- |
| AI + Reliability | [GitHubPrint](https://githubprint.vercel.app) | OpenAI 분석에 스키마 검증과 규칙 기반 대체 경로를 결합해, AI 사용 가능 여부와 관계없이 결과를 제공하는 제품입니다. |
| End-to-end Delivery | [머랭트립](https://apps.apple.com/kr/app/%EB%A8%B8%EB%9E%AD%ED%8A%B8%EB%A6%BD/id6751193690) | 기획과 구현부터 App Store·Google Play 출시, 이후 리팩터링까지 제품의 전체 흐름을 다뤘습니다. |
| Testability | [@uiwwsw/test-mode](https://github.com/uiwwsw/test-mode) | API mock·patch와 story 기반 테스트 시나리오를 공유 가능한 상태로 만들어 QA와 디버깅의 재현성을 높입니다. |
| Developer Productivity | [@uiwwsw/react-query-helper](https://www.npmjs.com/package/@uiwwsw/react-query-helper) | TypeScript API를 분석해 React Query 코드를 생성하고 팀별 분석기·템플릿 규칙까지 확장하는 CLI입니다. |
| Browser Correctness | [@uiwwsw/virtual-keyboard](https://www.npmjs.com/package/@uiwwsw/virtual-keyboard) | 한글 IME composition의 중복 입력, 커서 이동, 조합 깨짐을 입력 모델 수준에서 우회합니다. |

## How I Build

### 1. AI With Guardrails

AI를 결과 그 자체로 두지 않고 탐색과 반복 구현을 가속하는 도구로 사용합니다. 입력 근거, 스키마, 결정론적 대체 경로, 회귀 검사를 함께 설계해 결과를 검증할 수 있는 경로를 남깁니다.

- [GitHubPrint](https://githubprint.vercel.app) — 공개 GitHub 근거를 한·영 개발자 문서로 변환합니다. OpenAI Responses API 분석에 Zod 스키마 검증, 규칙 기반 대체 경로, fixture 기반 품질 회귀 검사를 결합한 실제 배포 제품입니다.
- [바이브코딩의 끝에는 누가 서 있어야 하는가](https://velog.io/@uiwwsw/바이브코딩의-끝에는-누가-서-있어야-하는가) — AI가 만든 코드의 최종 판단과 검증 책임은 개발자에게 남는다는 작업 원칙을 정리한 글입니다.

### 2. From Problem to Release

요구사항이 완성되기를 기다리기보다 작은 제품과 프로토타입으로 문제를 구체화하고, 프론트엔드 구현에서 배포와 스토어 출시까지 연결합니다.

- **머랭트립** ([App Store](https://apps.apple.com/kr/app/%EB%A8%B8%EB%9E%AD%ED%8A%B8%EB%A6%BD/id6751193690) · [Google Play](https://play.google.com/store/apps/details?id=io.brewstar.meringuetrip)) — 반경 검색 기반 여행 설계 앱. 기획·구현·스토어 출시 후 Flutter 전환 리팩터링까지 이어갔습니다.
- **미유미유** ([App Store](https://apps.apple.com/kr/app/%EB%AF%B8%EC%9C%A0%EB%AF%B8%EC%9C%A0/id6756718662)) — 커플 간 햅틱 연결 경험을 제품화해 App Store에 출시했습니다.
- [BackThen](https://backthen.vercel.app) — 그해의 오늘을 바로 탐색하는 작은 웹 제품. 빠른 제작과 배포로 아이디어를 검증했습니다.
- **make-wire** ([재현영상](https://www.youtube.com/watch?v=Wp9AG1U_qmI)) — Figma 기획서를 다국어 JSON으로 변환해 기획과 코드 사이의 전달 손실을 줄이는 프로토타입입니다.

### 3. Reliability in the Details

정상 흐름만 구현하는 데서 멈추지 않고 브라우저 입력, 실패 상태, 데이터 계약, 저장 호환성처럼 제품에서 실제로 깨지는 경계를 다룹니다.

- [@uiwwsw/test-mode](https://github.com/uiwwsw/test-mode) — API mock·patch, story 기반 시나리오, 화면 표시, 브라우저·서버 연동을 프레임워크 독립 TypeScript 런타임으로 분리해 공유 가능한 테스트 상태를 만듭니다.
- [@uiwwsw/virtual-keyboard](https://www.npmjs.com/package/@uiwwsw/virtual-keyboard) — 네이티브 input과 contentEditable에 의존하지 않고 한글 조합을 직접 처리해 중복 입력, 커서 이동, 조합 깨짐을 우회합니다.
- [YAVN](https://github.com/uiwwsw/yavn) — YAML DSL을 Zod 스키마와 참조 검증으로 보호하고 parser·engine·state·history를 분리한 비주얼노벨 엔진입니다. 회귀 테스트와 프로덕션 빌드를 CI에서 검증합니다.

### 4. Systems That Compound

반복되는 구현과 팀의 판단 비용을 코드 생성기, UI 패키지, 데이터 흐름 라이브러리, 문서화된 규칙으로 바꿔 다음 작업의 출발점을 높입니다.

- [@uiwwsw/react-query-helper](https://www.npmjs.com/package/@uiwwsw/react-query-helper) — TypeScript API에서 query·mutation·infinite option 코드를 생성하고, 팀별 분석기와 템플릿 규칙으로 확장할 수 있는 CLI입니다.
- [shadcn2](https://shadcn2.vercel.app) — Tailwind CSS v4 UI 패키지에 Storybook 버전 스냅샷, 태그 기반 배포, 폐기·마이그레이션 정책을 함께 운영합니다.
- [@uiwwsw/infinite-paper](https://www.npmjs.com/package/@uiwwsw/infinite-paper) — 무한 스크롤과 페이지네이션을 같은 데이터 윈도우 모델로 다루는 재사용 가능한 상태 관리 라이브러리입니다.

## Engineering Approach

- **AI With Guardrails**: AI 분석에 근거 수집, 스키마 검증, 결정론적 대체 경로, fixture와 회귀 검사를 함께 둡니다.
- **Outcome Over Output**: 화면 구현량보다 실제 배포, 스토어 출시, 실패 상태와 사용자 맥락까지 이어지는 결과를 우선합니다.
- **Quality as a System**: 테스트 시나리오, CI, Storybook, 대체 경로, 배포 워크플로를 통해 품질을 반복 가능한 과정으로 만듭니다.
- **Build for Change**: API·상태·컴포넌트·생성 규칙을 교체 가능한 경계로 나누고 반복 문제를 재사용 자산으로 남깁니다.
- **Write for Handoff**: 한·영 제품 경로와 README, 아키텍처 표, 기여 규칙, 마이그레이션 가이드로 구현의 맥락을 전달합니다.

<details>
<summary><b>Open-source package index</b> (4)</summary>

### [@uiwwsw/react-query-helper](https://www.npmjs.com/package/@uiwwsw/react-query-helper)
![react](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![react-query](https://img.shields.io/badge/react-query-555555?style=flat-square) ![tanstack-query](https://img.shields.io/badge/tanstack-query-555555?style=flat-square) ![codegen](https://img.shields.io/badge/codegen-555555?style=flat-square)

React Query Helper is a CLI tool that automatically generates React Query hooks and option objects from TypeScript API functions.

### [@uiwwsw/virtual-keyboard](https://www.npmjs.com/package/@uiwwsw/virtual-keyboard)
![한글](https://img.shields.io/badge/%ED%95%9C%EA%B8%80-555555?style=flat-square) ![키보드](https://img.shields.io/badge/%ED%82%A4%EB%B3%B4%EB%93%9C-555555?style=flat-square) ![가상](https://img.shields.io/badge/%EA%B0%80%EC%83%81-555555?style=flat-square) ![input](https://img.shields.io/badge/input-555555?style=flat-square)

A React virtual keyboard package for controlled Korean input without IME composition edge cases.

### [@uiwwsw/infinite-paper](https://www.npmjs.com/package/@uiwwsw/infinite-paper)
![infinite-scroll](https://img.shields.io/badge/infinite-scroll-555555?style=flat-square) ![pagination](https://img.shields.io/badge/pagination-555555?style=flat-square) ![virtualized-list](https://img.shields.io/badge/virtualized-list-555555?style=flat-square) ![react](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)

Composable infinite scroll + pagination data window manager with virtualized lists.

### [@uiwwsw/easter-egg](https://www.npmjs.com/package/@uiwwsw/easter-egg)
![easter-egg](https://img.shields.io/badge/easter-egg-555555?style=flat-square) ![hidden](https://img.shields.io/badge/hidden-555555?style=flat-square) ![surprise](https://img.shields.io/badge/surprise-555555?style=flat-square) ![fun](https://img.shields.io/badge/fun-555555?style=flat-square)

Add playful hidden interactions to React apps with small, reusable trigger utilities.
</details>

## Writing

> AI can accelerate code. Engineering judgment makes it dependable.

<!--START_VELOG-->
- [실 서비스 코드를 건드리지 않고 테스트하기: API 인터셉터 기반 목 데이터 설계](https://velog.io/@uiwwsw/실-서비스-코드를-건드리지-않고-테스트하기-API-인터셉터-기반-목-데이터-설계) _( 2026. 05. 22. )_
- [바이브코딩의 끝에는 누가 서 있어야 하는가](https://velog.io/@uiwwsw/바이브코딩의-끝에는-누가-서-있어야-하는가) _( 2026. 05. 13. )_
- [LinkedIn 실험 일지 1 — 시작](https://velog.io/@uiwwsw/LinkedIn-실험-일지-1-시작) _( 2026. 04. 04. )_
- [전달 가능한 개발자 문서(깃허브 프린트)](https://velog.io/@uiwwsw/GitHub를-전달-가능한-개발자-문서로-바꾸는-GitFolio를-만들었습니다) _( 2026. 03. 18. )_
- [[Retrospective] 머랭트립 리팩토링: 기능 추가보다 '완성도'에 집착하기 (Flutter 전환기)](https://velog.io/@uiwwsw/Retrospective-머랭트립-리팩토링-기능-추가보다-완성도에-집착하기-Flutter-전환기) _( 2026. 01. 23. )_
<!--END_VELOG-->

---

**Last profile refresh:** 2026. 07. 31.<br />
_Updated automatically via GitHub Actions_
