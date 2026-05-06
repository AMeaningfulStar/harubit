# AGENTS.md

## Operational Commands (실행 명령어)

- Install: `bun install`
- Dev: `bun run dev`
- Build: `bun run build`
- Start: `bun run start`
- Lint: `bun run lint`

Constraints (제약 조건):
- Package manager is fixed to `bun` (bun만 사용)
- Do not use npm, yarn, or pnpm (다른 패키지 매니저 금지)
- Do not modify scripts in package.json without explicit reason (scripts 수정 금지)


---

## Golden Rules (핵심 규칙)

### Immutable Rules (절대 규칙)

- Never hardcode secrets (API keys, Firebase config)
  (비밀 값 하드코딩 금지)

- Always use environment variables (`.env.local`)
  (환경 변수 사용 필수)

- Do not break existing routing structure (Next.js App Router)
  (라우팅 구조 변경 금지)

- Do not introduce new state management libraries
  (상태관리 라이브러리 추가 금지)

- Do not replace Firebase with another backend
  (Firebase 교체 금지)

- Do not install unnecessary dependencies
  (불필요한 의존성 설치 금지)


---

### Do's (해야 할 것)

- Use TypeScript strictly (no `any`)
  (`any` 사용 금지)

- Use functional components only
  (함수형 컴포넌트만 사용)

- Use server/client separation correctly (Next.js App Router)
  (Server / Client 분리 엄격히)

- Use `fetch` instead of axios
  (axios 대신 fetch 사용)

- Use Zustand only for global client state
  (전역 상태는 Zustand만 사용)

- Use SWR for client-side data fetching
  (클라이언트 데이터 패칭은 SWR 사용)

- Keep components small and reusable
  (컴포넌트는 작고 재사용 가능하게)

- Follow existing UI patterns (shadcn/ui + Tailwind)
  (기존 UI 패턴 유지)


---

### Don'ts (하지 말 것)

- Do not mix server and client logic in one file
  (Server/Client 로직 혼합 금지)

- Do not create deeply nested component structures
  (깊은 컴포넌트 구조 금지)

- Do not duplicate logic across components
  (중복 로직 금지)

- Do not modify unrelated files
  (관련 없는 파일 수정 금지)

- Do not refactor large areas without explicit instruction
  (대규모 리팩토링 금지)


---

## Firebase Rules (Firebase 전역 규칙)

- Firebase is the required backend for this project. Do not replace it with another backend.
  (Firebase는 이 프로젝트의 필수 백엔드이며, 다른 백엔드로 교체하지 않는다)

- Never hardcode Firebase config, API keys, project IDs, bucket names, or service credentials.
  (Firebase 설정값, API 키, 프로젝트 ID, 버킷명, 서비스 계정 정보 하드코딩 금지)

- Use `NEXT_PUBLIC_FIREBASE_*` environment variables only for browser-safe Firebase client config.
  (브라우저에 노출 가능한 Firebase 클라이언트 설정에만 `NEXT_PUBLIC_FIREBASE_*` 환경 변수를 사용한다)

- Keep Firebase client SDK setup inside `src/lib/firebase/`.
  (Firebase 클라이언트 SDK 설정은 `src/lib/firebase/` 내부에서만 관리한다)

- Do not initialize Firebase apps directly inside pages, layouts, hooks, or components.
  (페이지, 레이아웃, 훅, 컴포넌트 내부에서 Firebase 앱을 직접 초기화하지 않는다)

- Do not use Firebase Admin SDK in Client Components.
  (Client Component에서 Firebase Admin SDK를 사용하지 않는다)

- Do not introduce Firebase Cloud Functions unless explicitly requested.
  (명시적인 요청 없이 Firebase Cloud Functions를 추가하지 않는다)

- Firestore collection names must follow the MVP data model.
  (Firestore 컬렉션 이름은 MVP 데이터 모델을 따라야 한다)

  - `users`
  - `groups`
  - `groupMembers`
  - `courses`
  - `biblePlans`
  - `readingProgress`
  - `reflections`
  - `keywords`

- Do not rename, singularize, pluralize, or alias collection names inconsistently.
  (컬렉션 이름을 임의로 변경하거나 단수/복수 형태를 섞어 사용하지 않는다)

- Reflect the MVP role model consistently.
  (MVP 권한 모델을 일관되게 반영한다)

  - `USER`
  - `LEADER`
  - `ADMIN`

- Role checks must be consistent across UI, API routes, server logic, and Firestore Security Rules.
  (권한 검사는 UI, API Route, 서버 로직, Firestore Security Rules 전반에서 일관되게 적용한다)

- Optimize Firestore reads for MVP flows. Prefer direct document reads and indexed queries over broad collection scans.
  (MVP 흐름에서는 전체 컬렉션 스캔보다 직접 문서 조회와 인덱스 기반 쿼리를 우선한다)

- Minimize unnecessary Firestore reads to reduce cost and improve performance.
  (비용 절감과 성능 개선을 위해 불필요한 Firestore read를 최소화한다)

- Any Firebase feature work must consider client-side validation and Firebase Security Rules together.
  (Firebase 기능 구현 시 클라이언트 검증과 Security Rules를 함께 고려한다)

- Never trust client-side validation alone.
  (클라이언트 검증만 신뢰하지 않는다)

- Firestore writes must be scoped to the minimum required fields.
  (Firestore 쓰기 작업은 필요한 최소 필드만 대상으로 한다)

- Avoid deeply nested Firestore document structures unless explicitly required.
  (명시적 요구가 없다면 깊은 중첩 문서 구조를 피한다)

- Prefer predictable and scalable Firestore document structures.
  (예측 가능하고 확장 가능한 Firestore 구조를 우선한다)

- Any schema change must preserve MVP compatibility.
  (스키마 변경 시 MVP 호환성을 유지한다)

Reference:
- Product requirements: `docs/harubit-mvp-prd.md`

---

## Project Context (프로젝트 설명)

Harubit is a faith routine platform where individuals and communities read scripture, write reflections, share keywords, and track Bible reading progress.
(하루빛은 말씀 읽기, 묵상 작성, 키워드 나눔, 성경 읽기 진행률을 관리하는 신앙 루틴 플랫폼이다)

The platform focuses on lightweight daily faith participation and community engagement.
(가볍고 지속 가능한 신앙 루틴과 공동체 참여를 목표로 한다)

Tech Stack:
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Firebase Auth
- Firestore
- Firebase Storage
- Zustand
- SWR
- Vercel


---

## Primary MVP Goal (MVP 핵심 목표)

A user joins a group, reads today’s Bible passage, marks it as read, writes a one-line reflection and keyword, and the leader checks participation progress.
(사용자는 그룹에 참여하여 오늘의 말씀을 읽고, 읽음 처리 후 한 줄 묵상과 키워드를 작성하며, 리더는 참여 현황을 확인한다)

Core MVP Flow:
1. User joins a group
   (그룹 참여)

2. User reads today's Bible passage
   (오늘의 말씀 읽기)

3. User marks reading progress
   (읽음 처리)

4. User writes reflection and keyword
   (묵상 및 키워드 작성)

5. Leader checks participation status
   (리더가 참여 현황 확인)


---

## MVP Design Principles (MVP 설계 원칙)

- Keep the MVP simple and maintainable
  (단순하고 유지보수 가능한 구조 유지)

- Prioritize fast iteration over over-engineering
  (과도한 설계보다 빠른 개선 우선)

- Optimize for mobile-first experience
  (모바일 퍼스트 경험 최적화)

- Reduce user interaction friction wherever possible
  (사용자 입력 피로 최소화)

- Prefer reusable UI and predictable data flow
  (재사용 가능한 UI와 예측 가능한 데이터 흐름 선호)

- Avoid unnecessary abstraction in the MVP stage
  (MVP 단계에서 불필요한 추상화 금지)


---

## Product Reference (참고 문서)

- Product requirements: `docs/harubit-mvp-prd.md`
  (서비스 요구사항 문서)


---

## Standards & References (개발 기준)

### Code Style (코드 스타일)

- Follow existing ESLint + Prettier configuration
  (기존 린트 규칙 준수)

- Use absolute imports if configured (`@/`)
  (절대경로 사용)

- File naming:
  - components: PascalCase
  - hooks: camelCase (`useSomething`)
  - utils: camelCase


---

### Git Rules (깃 규칙)

- Commit message format:
  - feat: new feature
  - fix: bug fix
  - refactor: code structure change
  - chore: setup/config

- Keep commits small and focused
  (작고 명확한 커밋 유지)

- Always follow issue and PR templates in `.github/`
  (`.github` 템플릿 반드시 사용)

- Do not create custom formats for issues or PRs
  (임의 형식 생성 금지)


---

## Maintenance Policy (유지보수 정책)

- If code and rules conflict, propose update to AGENTS.md
  (코드와 규칙 충돌 시 AGENTS.md 수정 제안)

- Remove outdated rules instead of layering new ones
  (구 규칙 제거 우선)

- Keep this file under 500 lines
  (500줄 이하 유지)


---

## Execution Protocol (작업 프로토콜)

Before making any changes:

1. Analyze current code structure
   (현재 구조 분석)

2. Explain the plan before editing
   (수정 전 계획 설명)

3. Limit changes to the smallest possible scope
   (최소 범위 수정)


After making changes:

1. List modified files
2. Explain why each change was made
3. Provide verification steps
4. Ensure `bun run lint` passes


---

## Work Strategy (작업 전략)

Always follow this order:

1. Analyze
2. Plan
3. Implement (small scope only)
4. Verify

Never skip steps.
(절대 단계 생략 금지)


---

## Scope Control (범위 통제)

- Define clear boundaries
  (명확한 범위 정의)

- Do not expand scope implicitly
  (암묵적 확장 금지)

- If scope is unclear, mark assumptions explicitly
  (불명확 시 가정 명시)

- Avoid large, multi-feature implementations in one step
  (대규모 작업 금지)


---

## Output Format (응답 형식)

Every response must include:

- Analysis
- Plan
- Implementation
- Verification

Keep responses concise and structured.
(간결하고 구조적으로 작성)


---

## Codex Behavior Rules (Codex 행동 규칙)

- Always read relevant files before making changes
  (수정 전 관련 파일 반드시 확인)

- Do not hallucinate missing files or APIs
  (존재하지 않는 코드 생성 금지)

- Prefer modifying existing code over creating new files
  (기존 코드 우선 수정)

- Do not over-engineer solutions
  (과도한 설계 금지)

- If uncertain, make reasonable assumptions and state them clearly
  (불확실 시 가정 명시)


---

## GitHub Workflow Rules (GitHub 작업 규칙)

- Always read `.github/ISSUE_TEMPLATE/` before creating issues
  (이슈 템플릿 반드시 확인)

- Always use `.github/pull_request_template.md` for PRs
  (PR 템플릿 반드시 사용)

- Do not change template structure
  (템플릿 구조 변경 금지)

- Include `Closes #issue_number` in PR description
  (이슈 연결 필수)

- Do not push directly to main branch
  (main 직접 push 금지)