<p align="center">
  <img src="./assets/profile-constellation.svg" alt="uiwwsw project constellation" width="100%" />
</p>

<p align="center"><strong>AI can write the happy path. I engineer what happens next.</strong></p>

<p align="center">
  The edge cases, fallbacks, test states, release paths, and reusable systems that turn AI-assisted drafts into dependable products. React and TypeScript, from browser behavior to shipped apps.<br />
  AI가 빠르게 만든 정상 흐름 이후의 문제를 다룹니다. 브라우저 edge case, 실패 상태, 검증 가능한 대체 경로, 출시 과정, 다시 쓰이는 도구까지 연결해 코드가 실제 제품 환경에서 버티게 만듭니다.
</p>

<p align="center">
  2 shipped apps · 1 AI product with fallback · 4 public npm packages
</p>

<p align="center">
  <a href="mailto:uiwwsw@icloud.com"><img src="https://img.shields.io/badge/Email-uiwwsw%40icloud.com-101418?style=flat-square&logo=icloud&logoColor=white" alt="Email" /></a>
  <a href="https://www.linkedin.com/in/uiwwsw/"><img src="https://img.shields.io/badge/LinkedIn-uiwwsw-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://velog.io/@uiwwsw"><img src="https://img.shields.io/badge/Velog-uiwwsw-20C997?style=flat-square&logo=velog&logoColor=white" alt="Velog" /></a>
  <a href="https://uiwwsw.github.io/"><img src="https://img.shields.io/badge/Portfolio-Universe-304A6E?style=flat-square&logo=about-dot-me&logoColor=white" alt="Portfolio" /></a>
  <a href="https://githubprint.vercel.app"><img src="https://img.shields.io/badge/GitHubPrint-Live-1F2937?style=flat-square&logo=github&logoColor=white" alt="GitHubPrint" /></a>
  <a href="https://github.com/uiwwsw"><img src="https://img.shields.io/badge/GitHub-uiwwsw-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
</p>

## The Work Starts Where "It Works" Ends

> Most demos stop at the happy path. Production starts with everything that can drift, fail, repeat, or change.

| When this happens | Engineering decision | Proof |
| --- | --- | --- |
| AI returns something plausible | Ground the output, validate its shape, and keep a deterministic fallback. | [GitHubPrint](https://githubprint.vercel.app) |
| The bug only happens in Korean input | Own the input model instead of patching composition symptoms. | [virtual-keyboard](https://www.npmjs.com/package/@uiwwsw/virtual-keyboard) |
| QA cannot reproduce the state | Turn API failures into shareable, story-based test states. | [test-mode](https://github.com/uiwwsw/test-mode) |
| The same glue code appears again | Treat repetition as a code-generation and convention problem. | [react-query-helper](https://www.npmjs.com/package/@uiwwsw/react-query-helper) |
| The prototype has to survive release | Follow the product through both app stores and the refactor after launch. | [머랭트립](https://apps.apple.com/kr/app/%EB%A8%B8%EB%9E%AD%ED%8A%B8%EB%A6%BD/id6751193690) |

## Engineering Case Files

### 01. AI is probabilistic. The product cannot be.

**[GitHubPrint](https://githubprint.vercel.app)**

- **Problem:** AI analysis can fail, drift, or infer beyond the public evidence it received.
- **Decision:** Collect the source first, validate OpenAI output with Zod, and preserve a deterministic analysis path when AI is unavailable.
- **Proof:** Live Korean and English routes · PDF and Word export · fixture-based quality regressions

### 02. A state you cannot reproduce is a state you cannot fix.

**[test-mode](https://github.com/uiwwsw/test-mode)**

- **Problem:** Rare API failures are hard to discuss when every developer, QA, and designer has to recreate them by hand.
- **Decision:** Model product states as named stories that mock or patch requests across browser and server boundaries.
- **Proof:** Framework-neutral TypeScript runtime · console control · visible TEST MODE overlay

### 03. A browser edge case is still product behavior.

**[virtual-keyboard](https://www.npmjs.com/package/@uiwwsw/virtual-keyboard)**

- **Problem:** Korean IME composition can duplicate characters, move the cursor, or break controlled input.
- **Decision:** Own Hangul composition in the input model instead of stacking fixes on native composition events.
- **Proof:** React package · Hangul, number, and telephone policies · mobile-first demo

### 04. Repetition is an architecture signal.

**[react-query-helper](https://www.npmjs.com/package/@uiwwsw/react-query-helper)**

- **Problem:** Repeated query glue code spreads inconsistent cache keys, options, and conventions.
- **Decision:** Analyze TypeScript API functions and generate query, mutation, and infinite options through replaceable analyzers and templates.
- **Proof:** Published npm CLI · configurable generation rules · extensible analyzer and template modules

## Shipped, Not Mocked

| Product | Surface | What shipped |
| --- | --- | --- |
| [GitHubPrint](https://githubprint.vercel.app) | Web · KO/EN · PDF/Word | 공개 GitHub 근거를 공유 가능한 개발자 문서로 변환해 실제 서비스로 배포했습니다. |
| **머랭트립** ([App Store](https://apps.apple.com/kr/app/%EB%A8%B8%EB%9E%AD%ED%8A%B8%EB%A6%BD/id6751193690) · [Google Play](https://play.google.com/store/apps/details?id=io.brewstar.meringuetrip)) | iOS · Android | 반경 검색 기반 여행 설계 앱을 기획·구현·출시하고 Flutter 전환 리팩터링까지 이어갔습니다. |
| **미유미유** ([App Store](https://apps.apple.com/kr/app/%EB%AF%B8%EC%9C%A0%EB%AF%B8%EC%9C%A0/id6756718662)) | iOS | 커플 간 햅틱 연결 경험을 제품화해 App Store에 출시했습니다. |
| [BackThen](https://backthen.vercel.app) | Web | 그해의 오늘을 탐색하는 아이디어를 작은 제품으로 만들고 배포해 사용 맥락을 확인했습니다. |

## Systems, Not One-Offs

| Boundary made explicit | System | Evidence |
| --- | --- | --- |
| Validated content DSL | [YAVN](https://github.com/uiwwsw/yavn) | Zod and reference validation · parser/engine/history boundaries · CI tests and build |
| UI component lifecycle | [shadcn2](https://shadcn2.vercel.app) | Tailwind CSS v4 · Storybook version snapshots · release and migration policy |
| Paginated data window | [infinite-paper](https://www.npmjs.com/package/@uiwwsw/infinite-paper) | Infinite scroll and pagination through one reusable state model |
| Design-to-code handoff | [make-wire](https://www.youtube.com/watch?v=Wp9AG1U_qmI) | Figma planning documents exported as multilingual JSON |

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

> I write down the decision, not just the result.

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
