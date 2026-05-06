# AGENTS.md

## Module Context (모듈 설명)

This directory contains Firebase initialization, Auth, Firestore, and Storage utilities for Harubit.
(이 디렉터리는 하루빛의 Firebase 초기화, Auth, Firestore, Storage 유틸리티를 관리한다)

This module is the only place where Firebase client SDK initialization should happen.
(Firebase 클라이언트 SDK 초기화는 이 모듈 내부에서만 수행한다)


---

## Tech Stack & Constraints (기술 스택 및 제약)

- Use Firebase official SDK only.
  (Firebase 공식 SDK만 사용한다)

- Use environment variables for Firebase configuration.
  (Firebase 설정은 환경 변수를 사용한다)

- Do not hardcode Firebase project values.
  (Firebase 프로젝트 관련 값을 하드코딩하지 않는다)

- Do not expose admin-level operations in client utilities.
  (클라이언트 유틸에서 관리자 수준 작업을 노출하지 않는다)

- Do not run destructive writes without explicit instruction.
  (명시적 지시 없이 삭제/초기화 등 파괴적 쓰기 작업을 실행하지 않는다)

- Do not import Firebase utilities directly into unrelated UI components when a feature-level abstraction exists.
  (기능 단위 추상화가 있다면 UI 컴포넌트에서 Firebase 유틸을 직접 호출하지 않는다)


---

## Implementation Patterns (구현 패턴)

- Keep Firebase app initialization centralized.
  (Firebase 앱 초기화는 중앙화한다)

- Separate Auth, Firestore, and Storage helpers by concern.
  (Auth, Firestore, Storage helper를 관심사별로 분리한다)

- Return typed data from Firestore helpers.
  (Firestore helper는 타입이 지정된 데이터를 반환한다)

- Use explicit mapping functions for Firestore documents.
  (Firestore 문서는 명시적인 mapping 함수로 변환한다)

- Keep collection paths consistent with the root `AGENTS.md` MVP data model.
  (컬렉션 경로는 루트 `AGENTS.md`의 MVP 데이터 모델과 일치시킨다)

- Convert Firestore timestamps at the module boundary.
  (Firestore Timestamp 변환은 모듈 경계에서 처리한다)

- Prefer small, composable Firebase helper functions.
  (작고 조합 가능한 Firebase helper 함수를 우선한다)

- Keep Firebase access logic separate from UI rendering logic.
  (Firebase 접근 로직과 UI 렌더링 로직을 분리한다)


---

## Firestore Rules (Firestore 구현 규칙)

### Do (해야 할 것)

- Query with filters whenever possible.
  (가능하면 필터가 있는 쿼리를 사용한다)

- Reuse existing query utilities.
  (기존 쿼리 유틸을 재사용한다)

- Handle missing documents safely.
  (존재하지 않는 문서를 안전하게 처리한다)

- Convert Firestore timestamps at the boundary.
  (Firestore Timestamp는 경계에서 변환한다)

- Use batch writes when multiple related writes must succeed together.
  (여러 관련 쓰기가 함께 성공해야 할 때 batch write를 사용한다)

- Keep read/write helpers predictable and side-effect limited.
  (읽기/쓰기 helper는 예측 가능하고 부수효과를 제한한다)


### Don't (하지 말 것)

- Do not fetch entire collections without filters.
  (필터 없이 전체 컬렉션을 조회하지 않는다)

- Do not duplicate query logic across features.
  (기능별로 쿼리 로직을 중복 작성하지 않는다)

- Do not perform bulk writes without batching.
  (batch 없이 대량 쓰기를 수행하지 않는다)

- Do not mix UI logic with Firebase access logic.
  (UI 로직과 Firebase 접근 로직을 섞지 않는다)

- Do not silently ignore Firebase errors.
  (Firebase 에러를 조용히 무시하지 않는다)

- Do not create new collection paths without checking the MVP data model.
  (MVP 데이터 모델 확인 없이 새 컬렉션 경로를 만들지 않는다)


---

## Verification (검증)

- Run `bun run lint`.
  (`bun run lint` 실행)

- Run `bun run build` when Firebase-related types or imports change.
  (Firebase 관련 타입이나 import가 변경되면 `bun run build` 실행)

- Avoid production write operations during local verification.
  (로컬 검증 중 production 쓰기 작업을 피한다)

- Verify that Firebase config values come from environment variables.
  (Firebase 설정값이 환경 변수에서 오는지 확인한다)

- Verify that no Client Component imports server-only Firebase/Admin logic.
  (Client Component가 server-only Firebase/Admin 로직을 import하지 않는지 확인한다)