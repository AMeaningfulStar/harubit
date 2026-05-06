# AGENTS.md

This file defines Firebase-specific implementation rules for `src/lib/firebase/`.
(이 문서는 `src/lib/firebase/` 내부 Firebase 전용 구현 규칙을 정의한다)

Also follow the root `AGENTS.md` for project-wide rules, MVP collections, MVP roles, GitHub workflow, and Codex protocol.
(프로젝트 전역 규칙, MVP 컬렉션, MVP 권한, GitHub workflow, Codex 프로토콜은 루트 `AGENTS.md`도 함께 따른다)

---

## Module Responsibility (모듈 책임)

This directory is the Firebase client boundary for Harubit.
(이 디렉터리는 하루빛의 Firebase 클라이언트 경계이다)

It owns Firebase client SDK initialization and reusable Auth, Firestore, and Storage access helpers.
(Firebase 클라이언트 SDK 초기화와 재사용 가능한 Auth, Firestore, Storage 접근 helper를 담당한다)

Do not move feature UI, route handlers, or page logic into this directory.
(기능 UI, route handler, page 로직을 이 디렉터리로 옮기지 않는다)

---

## Initialization Rules (초기화 규칙)

- Initialize Firebase client apps only in this module.
  (Firebase 클라이언트 앱 초기화는 이 모듈에서만 수행한다)

- Reuse the existing Firebase app instance instead of creating duplicate app instances.
  (중복 앱 인스턴스를 만들지 말고 기존 Firebase 앱 인스턴스를 재사용한다)

- Read browser-safe config only from `NEXT_PUBLIC_FIREBASE_*` environment variables.
  (브라우저에 노출 가능한 설정은 `NEXT_PUBLIC_FIREBASE_*` 환경 변수에서만 읽는다)

- Do not hardcode Firebase API keys, project IDs, auth domains, bucket names, sender IDs, app IDs, or measurement IDs.
  (Firebase API 키, 프로젝트 ID, auth domain, 버킷명, sender ID, app ID, measurement ID를 하드코딩하지 않는다)

- Do not initialize Firebase inside pages, layouts, hooks, components, or feature modules.
  (페이지, 레이아웃, 훅, 컴포넌트, 기능 모듈 내부에서 Firebase를 초기화하지 않는다)

---

## SDK Boundary Rules (SDK 경계 규칙)

- Use Firebase official SDK APIs only.
  (Firebase 공식 SDK API만 사용한다)

- Keep Auth, Firestore, and Storage helpers separated by concern.
  (Auth, Firestore, Storage helper를 관심사별로 분리한다)

- Export stable, typed helpers rather than raw feature-specific query fragments.
  (기능별 query fragment보다 안정적이고 타입이 지정된 helper를 export한다)

- Do not expose admin-level operations from client utilities.
  (클라이언트 유틸에서 관리자 수준 작업을 노출하지 않는다)

- Do not import Firebase Admin SDK into this client module.
  (이 클라이언트 모듈에 Firebase Admin SDK를 import하지 않는다)

- Keep Firebase access logic separate from UI rendering logic.
  (Firebase 접근 로직과 UI 렌더링 로직을 분리한다)

---

## Firestore Helper Rules (Firestore helper 규칙)

### Do (해야 할 것)

- Use the root `AGENTS.md` MVP collection names exactly.
  (루트 `AGENTS.md`의 MVP 컬렉션 이름을 정확히 사용한다)

- Return typed data from Firestore helpers.
  (Firestore helper는 타입이 지정된 데이터를 반환한다)

- Use explicit mapping functions for Firestore documents.
  (Firestore 문서는 명시적인 mapping 함수로 변환한다)

- Convert Firestore `Timestamp` values at the module boundary.
  (Firestore `Timestamp` 값은 모듈 경계에서 변환한다)

- Handle missing documents explicitly.
  (존재하지 않는 문서를 명시적으로 처리한다)

- Query with filters, document IDs, or indexed fields whenever possible.
  (가능하면 필터, 문서 ID, 인덱스 필드를 사용해 조회한다)

- Use batch writes or transactions when multiple related writes must succeed together.
  (여러 관련 쓰기가 함께 성공해야 하면 batch write 또는 transaction을 사용한다)

- Keep write payloads limited to the fields required by the operation.
  (쓰기 payload는 작업에 필요한 필드로 제한한다)

### Don't (하지 말 것)

- Do not fetch entire collections without a clear MVP reason.
  (명확한 MVP 이유 없이 전체 컬렉션을 조회하지 않는다)

- Do not create new collection paths without checking the root MVP data model.
  (루트 MVP 데이터 모델 확인 없이 새 컬렉션 경로를 만들지 않는다)

- Do not duplicate query logic across helpers.
  (helper 간 query 로직을 중복하지 않는다)

- Do not silently ignore Firebase errors.
  (Firebase 에러를 조용히 무시하지 않는다)

- Do not perform destructive writes unless explicitly requested.
  (명시적 요청 없이 삭제/초기화 같은 파괴적 쓰기를 수행하지 않는다)

- Do not trust client-side validation as a security boundary.
  (클라이언트 검증을 보안 경계로 신뢰하지 않는다)

---

## Auth Rules (Auth 규칙)

- Keep Auth helpers focused on Firebase Auth state and user identity.
  (Auth helper는 Firebase Auth 상태와 사용자 식별에 집중한다)

- Do not encode broad authorization policy only in client helpers.
  (광범위한 권한 정책을 클라이언트 helper에만 두지 않는다)

- Keep role values aligned with the root MVP role model: `USER`, `LEADER`, `ADMIN`.
  (권한 값은 루트 MVP 권한 모델인 `USER`, `LEADER`, `ADMIN`과 일치시킨다)

- Treat role checks in UI as visibility controls, not final security enforcement.
  (UI 권한 검사는 표시 제어로 취급하고 최종 보안 강제로 보지 않는다)

---

## Storage Rules (Storage 규칙)

- Keep Storage paths predictable and scoped to the feature that owns the file.
  (Storage 경로는 예측 가능하게 유지하고 파일을 소유한 기능 범위로 제한한다)

- Do not store secrets, service credentials, or private config in Firebase Storage.
  (비밀 값, 서비스 계정, private config를 Firebase Storage에 저장하지 않는다)

- Validate file type, size, and ownership in both client flow and security rules when file uploads are added.
  (파일 업로드를 추가할 때 파일 타입, 크기, 소유권을 클라이언트 흐름과 보안 규칙에서 함께 검증한다)

---

## Error Handling (에러 처리)

- Surface actionable errors to callers without leaking secrets.
  (비밀 값을 노출하지 않으면서 호출자에게 처리 가능한 에러를 전달한다)

- Preserve enough context for debugging Firebase operation failures.
  (Firebase 작업 실패를 디버깅할 수 있도록 충분한 맥락을 유지한다)

- Do not swallow permission, missing document, or validation errors.
  (권한, 문서 없음, 검증 에러를 무시하지 않는다)

---

## Verification (검증)

- Run `bun run lint` after Firebase helper changes.
  (Firebase helper 변경 후 `bun run lint`를 실행한다)

- Run `bun run build` when Firebase types, exports, imports, or environment variable usage changes.
  (Firebase 타입, export, import, 환경 변수 사용이 변경되면 `bun run build`를 실행한다)

- Verify Firebase config values come from environment variables.
  (Firebase 설정값이 환경 변수에서 오는지 확인한다)

- Verify Client Components do not import server-only Firebase or Admin logic.
  (Client Component가 server-only Firebase 또는 Admin 로직을 import하지 않는지 확인한다)

- Avoid production write operations during local verification.
  (로컬 검증 중 production 쓰기 작업을 피한다)
