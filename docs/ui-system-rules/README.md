# UI 시스템 규칙

이 폴더는 이 프로젝트에서 사용하는 UI 시스템 규칙을 카테고리별로 정리한 문서 모음입니다.

## 문서 구성

- [components.md](./components.md)
  - `Field` 조합 규칙
  - controlled / RHF 값 소유권
  - overlay / portal / host 구조
- [styles.md](./styles.md)
  - 타입 스케일
  - 간격과 레이아웃
  - 색상과 상태 토큰
  - 모션
  - 레이어 스케일
- [accessibility.md](./accessibility.md)
  - label 연결 규칙
  - 그룹 컨트롤의 accessible name
  - `id`, `aria-describedby`, `aria-invalid`
  - 아이콘 전용 컨트롤 접근성 이름
  - overlay 포커스와 배경 차단 규칙

## 빠른 체크리스트

새 컴포넌트를 추가하기 전에 아래를 확인합니다.

- 레이아웃은 가능한 경우 `Field`, `Field.Item`, `Field.Grid` 또는 기존 group/layout API를 사용하는가
- controlled prop과 RHF 관리 prop의 소유권이 명확한가
- `id`, `aria-describedby`, `aria-invalid` 연결이 접근성 규칙과 맞는가
- 그룹 컨트롤에는 보이는 라벨 또는 명시적인 접근성 이름이 있는가
- 폰트 크기는 `mix.type-scale(...)`를 사용하는가
- 간격과 패딩은 `func.space(...)` 또는 `func.surface-space(...)`를 사용하는가
- 크기는 `func.size(...)`를 사용하는가
- radius와 shadow는 공통 token을 사용하는가
- 색상은 semantic token을 사용하는가
- CSS transition은 motion helper를 사용하는가
- Framer Motion은 `src/utils/motion.ts`를 사용하는가
- overlay 성격의 컴포넌트라면 기존 host, portal root, z-index 체계를 따르는가
