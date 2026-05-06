# AGENTS.md

This file defines project-wide rules for Codex and other AI coding agents working in this repository.
(이 문서는 이 저장소에서 작업하는 Codex 및 AI 코딩 에이전트의 전역 규칙을 정의한다)

For Firebase implementation details inside `src/lib/firebase/`, also follow `src/lib/firebase/AGENTS.md`.
(`src/lib/firebase/` 내부 Firebase 구현 세부 규칙은 `src/lib/firebase/AGENTS.md`도 함께 따른다)

---

## Operational Commands (실행 명령어)

- Install dependencies with `bun install`.
  (의존성 설치는 `bun install`을 사용한다)

- Run the dev server with `bun run dev`.
  (개발 서버는 `bun run dev`로 실행한다)

- Build with `bun run build`.
  (빌드는 `bun run build`로 실행한다)

- Start production mode with `bun run start`.
  (프로덕션 실행은 `bun run start`를 사용한다)

- Lint with `bun run lint`.
  (린트는 `bun run lint`로 실행한다)

Constraints:
(제약 조건)

- Use `bun` only. Do not use `npm`, `yarn`, or `pnpm`.
  (`bun`만 사용하고 `npm`, `yarn`, `pnpm`은 사용하지 않는다)

- Do not modify `package.json` scripts unless the task explicitly requires it.
  (명시적 필요가 없으면 `package.json` scripts를 수정하지 않는다)

- Do not install dependencies unless the task explicitly requires them.
  (명시적 필요가 없으면 의존성을 설치하지 않는다)

---

## Project Context (프로젝트 설명)

Harubit is a faith routine platform where individuals and communities read scripture, write reflections, share keywords, and track Bible reading progress.
(하루빛은 말씀 읽기, 묵상 작성, 키워드 나눔, 성경 읽기 진행률을 관리하는 신앙 루틴 플랫폼이다)

The MVP focuses on lightweight daily participation and community engagement.
(MVP는 가볍고 지속 가능한 일일 참여와 공동체 참여에 집중한다)

Tech stack:
(기술 스택)

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Firebase Auth
- Firestore
- Firebase Storage
- Zustand
- SWR
- Vercel

Product reference:
(제품 참고 문서)

- `docs/harubit-mvp-prd.md`

---

## Primary MVP Flow (MVP 핵심 흐름)

The core MVP flow must remain simple and maintainable.
(핵심 MVP 흐름은 단순하고 유지보수 가능해야 한다)

1. A user joins a group.
   (사용자가 그룹에 참여한다)

2. A user reads today's Bible passage.
   (사용자가 오늘의 말씀을 읽는다)

3. A user marks reading progress.
   (사용자가 읽음 처리한다)

4. A user writes a one-line reflection and keyword.
   (사용자가 한 줄 묵상과 키워드를 작성한다)

5. A leader checks participation status.
   (리더가 참여 현황을 확인한다)

---

## Immutable Rules (절대 규칙)

- Never hardcode secrets, API keys, Firebase config, project IDs, bucket names, or service credentials.
  (비밀 값, API 키, Firebase 설정, 프로젝트 ID, 버킷명, 서비스 계정 정보를 하드코딩하지 않는다)

- Use environment variables for configuration. Use `.env.local` for local development values.
  (설정값은 환경 변수를 사용하고, 로컬 개발 값은 `.env.local`을 사용한다)

- Do not replace Firebase with another backend.
  (Firebase를 다른 백엔드로 교체하지 않는다)

- Do not break the existing Next.js App Router structure.
  (기존 Next.js App Router 구조를 깨지 않는다)

- Do not introduce new state management libraries.
  (새 상태관리 라이브러리를 추가하지 않는다)

- Do not modify unrelated files.
  (관련 없는 파일을 수정하지 않는다)

- Do not perform large refactors unless explicitly requested.
  (명시적 요청 없이 대규모 리팩토링을 하지 않는다)

---

## Development Standards (개발 기준)

### TypeScript & React (TypeScript 및 React)

- Use strict TypeScript. Do not use `any`.
  (엄격한 TypeScript를 사용하고 `any`를 사용하지 않는다)

- Use functional components only.
  (함수형 컴포넌트만 사용한다)

- Keep Server Components and Client Components clearly separated.
  (Server Component와 Client Component를 명확히 분리한다)

- Do not mix server-only logic and client UI logic in one file.
  (server-only 로직과 client UI 로직을 한 파일에 섞지 않는다)

- Keep components small, focused, and reusable.
  (컴포넌트는 작고 명확하며 재사용 가능하게 유지한다)

### Data Fetching & State (데이터 패칭 및 상태)

- Use `fetch` instead of `axios`.
  (`axios` 대신 `fetch`를 사용한다)

- Use SWR for client-side data fetching.
  (클라이언트 데이터 패칭에는 SWR을 사용한다)

- Use Zustand only for global client state.
  (전역 클라이언트 상태에는 Zustand만 사용한다)

- Avoid duplicating data access logic across components.
  (컴포넌트 간 데이터 접근 로직 중복을 피한다)

### UI (UI)

- Follow existing shadcn/ui and Tailwind patterns.
  (기존 shadcn/ui 및 Tailwind 패턴을 따른다)

- Optimize for mobile-first MVP usage.
  (모바일 퍼스트 MVP 사용성을 우선한다)

- Reduce interaction friction for daily reading, reflection, and progress flows.
  (말씀 읽기, 묵상, 진행률 흐름의 입력 피로를 줄인다)

- Do not create deeply nested component structures.
  (깊게 중첩된 컴포넌트 구조를 만들지 않는다)

### Code Style (코드 스타일)

- Follow the existing ESLint and Prettier configuration.
  (기존 ESLint 및 Prettier 설정을 따른다)

- Use absolute imports with `@/` when already configured.
  (설정된 경우 `@/` 절대 경로를 사용한다)

- Use PascalCase for components.
  (컴포넌트 파일명과 컴포넌트명은 PascalCase를 사용한다)

- Use camelCase for hooks and utilities.
  (훅과 유틸은 camelCase를 사용한다)

---

## Firebase Boundary Rules (Firebase 경계 규칙)

Root-level Firebase rules define architecture and safety boundaries only.
(루트 Firebase 규칙은 아키텍처와 안전 경계만 정의한다)

Detailed Firebase SDK initialization, helper, mapping, and query rules belong in `src/lib/firebase/AGENTS.md`.
(Firebase SDK 초기화, helper, mapping, query 세부 규칙은 `src/lib/firebase/AGENTS.md`에 둔다)

- Keep Firebase as the required backend.
  (Firebase를 필수 백엔드로 유지한다)

- Keep Firebase client SDK setup inside `src/lib/firebase/`.
  (Firebase 클라이언트 SDK 설정은 `src/lib/firebase/` 내부에 둔다)

- Do not initialize Firebase apps inside pages, layouts, hooks, or components.
  (페이지, 레이아웃, 훅, 컴포넌트 내부에서 Firebase 앱을 초기화하지 않는다)

- Do not use Firebase Admin SDK in Client Components.
  (Client Component에서 Firebase Admin SDK를 사용하지 않는다)

- Do not introduce Firebase Cloud Functions unless explicitly requested.
  (명시적 요청 없이 Firebase Cloud Functions를 추가하지 않는다)

- Use `NEXT_PUBLIC_FIREBASE_*` only for browser-safe Firebase client config.
  (브라우저에 노출 가능한 Firebase 클라이언트 설정에만 `NEXT_PUBLIC_FIREBASE_*`를 사용한다)

- Treat client-side validation as UX only. Security must also be enforced with Firebase Security Rules or trusted server logic.
  (클라이언트 검증은 UX로만 취급하고, 보안은 Firebase Security Rules 또는 신뢰 가능한 서버 로직으로도 강제한다)

### MVP Firestore Collections (MVP Firestore 컬렉션)

Use these collection names consistently:
(아래 컬렉션 이름을 일관되게 사용한다)

- `users`
- `groups`
- `groupMembers`
- `courses`
- `biblePlans`
- `readingProgress`
- `reflections`
- `keywords`

Do not rename, singularize, pluralize, or alias collection names inconsistently.
(컬렉션 이름을 임의로 변경하거나 단수/복수 형태 또는 별칭을 섞어 사용하지 않는다)

### MVP Roles (MVP 권한)

Use these role values consistently across UI, API routes, server logic, Firestore helpers, and Firebase Security Rules:
(UI, API Route, 서버 로직, Firestore helper, Firebase Security Rules 전반에서 아래 권한 값을 일관되게 사용한다)

- `USER`
- `LEADER`
- `ADMIN`

---

## Firestore Data Principles (Firestore 데이터 원칙)

- Prefer direct document reads and indexed queries over broad collection scans.
  (전체 컬렉션 스캔보다 직접 문서 조회와 인덱스 기반 쿼리를 우선한다)

- Minimize unnecessary Firestore reads to reduce cost and improve performance.
  (비용 절감과 성능 개선을 위해 불필요한 Firestore read를 최소화한다)

- Scope Firestore writes to the minimum required fields.
  (Firestore 쓰기는 필요한 최소 필드로 제한한다)

- Avoid deeply nested Firestore document structures unless explicitly required.
  (명시적 요구가 없다면 깊은 중첩 문서 구조를 피한다)

- Any schema change must preserve MVP compatibility.
  (스키마 변경은 MVP 호환성을 유지해야 한다)

---

## Git Rules (깃 규칙)

- Keep commits small and focused.
  (커밋은 작고 명확하게 유지한다)

- Use conventional commit prefixes.
  (관례적 커밋 prefix를 사용한다)

  - `feat`: new feature
  - `fix`: bug fix
  - `refactor`: code structure change without behavior change
  - `chore`: setup, config, or maintenance
  - `docs`: documentation-only change
  - `test`: test-only change

- Do not push directly to `main`.
  (`main` 브랜치에 직접 push하지 않는다)

- Use the `codex/` branch prefix for Codex-created branches unless the user requests another branch name.
  (사용자가 다른 이름을 요청하지 않으면 Codex 생성 브랜치는 `codex/` prefix를 사용한다)

---

## GitHub Workflow Rules (GitHub 작업 규칙)

- Read `.github/ISSUE_TEMPLATE/` before creating or editing issues.
  (이슈 생성 또는 수정 전 `.github/ISSUE_TEMPLATE/`를 확인한다)

- Choose the existing issue template that matches the work type.
  (작업 유형에 맞는 기존 이슈 템플릿을 선택한다)

- Use `.github/pull_request_template.md` for PR descriptions.
  (PR 설명은 `.github/pull_request_template.md`를 사용한다)

- Do not change issue or PR template structure unless explicitly requested.
  (명시적 요청 없이 이슈 또는 PR 템플릿 구조를 바꾸지 않는다)

- Link related issues in PR descriptions with `Close #issue_number` or `Closes #issue_number`.
  (PR 설명에는 `Close #issue_number` 또는 `Closes #issue_number`로 관련 이슈를 연결한다)

- Fill the PR checklist honestly based on actual verification.
  (실제 검증 결과를 기준으로 PR 체크리스트를 정직하게 작성한다)

---

## Codex Work Protocol (Codex 작업 프로토콜)

Always follow this order:
(항상 아래 순서를 따른다)

1. Analyze the current structure and relevant files.
   (현재 구조와 관련 파일을 분석한다)

2. State assumptions and define the scope.
   (가정을 명시하고 범위를 정의한다)

3. Explain the plan before editing.
   (수정 전에 계획을 설명한다)

4. Implement the smallest focused change.
   (가장 작은 범위의 집중된 변경을 구현한다)

5. Verify with the appropriate command or explain why verification was not run.
   (적절한 명령으로 검증하거나 검증하지 못한 이유를 설명한다)

6. Summarize modified files and reasons.
   (수정 파일과 이유를 요약한다)

Never skip analysis, planning, implementation, or verification.
(분석, 계획, 구현, 검증 단계를 생략하지 않는다)

---

## Codex Behavior Rules (Codex 행동 규칙)

- Read relevant files before making changes.
  (수정 전 관련 파일을 읽는다)

- Prefer modifying existing code over creating new files.
  (새 파일 생성보다 기존 코드 수정을 우선한다)

- Do not hallucinate missing files, APIs, routes, schemas, or templates.
  (존재하지 않는 파일, API, 라우트, 스키마, 템플릿을 만들었다고 가정하지 않는다)

- If scope is unclear, make a reasonable assumption and state it explicitly.
  (범위가 불명확하면 합리적으로 가정하고 명시한다)

- Do not expand scope implicitly.
  (범위를 암묵적으로 확장하지 않는다)

- If project rules and code conflict, propose an `AGENTS.md` update instead of layering inconsistent exceptions.
  (프로젝트 규칙과 코드가 충돌하면 예외를 덧붙이기보다 `AGENTS.md` 수정을 제안한다)

---

## Response Format (응답 형식)

Every substantial response should include:
(실질적인 작업 응답에는 아래 항목을 포함한다)

- Analysis
- Plan
- Implementation
- Verification

Keep responses concise and structured.
(응답은 간결하고 구조적으로 작성한다)

---

## Maintenance Policy (유지보수 정책)

- Keep this file maintainable and under 500 lines.
  (이 파일은 유지보수 가능하게 유지하고 500줄 이하로 관리한다)

- Remove outdated rules instead of adding overlapping rules.
  (겹치는 규칙을 추가하기보다 오래된 규칙을 제거한다)

- Keep root rules focused on project-wide behavior.
  (루트 규칙은 프로젝트 전역 행동에 집중한다)

- Keep module-specific rules in nested `AGENTS.md` files.
  (모듈별 규칙은 하위 `AGENTS.md` 파일에 둔다)
