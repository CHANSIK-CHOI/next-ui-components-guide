# 컴포넌트 규칙

이 문서는 컴포넌트 구조와 상태 소유권에 관한 핵심 원칙만 정리합니다.

## 1. Field 조합 규칙

`Field`는 하나의 논리적 폼 블록을 묶는 바깥 스코프입니다.

- `Field`
  - 블록 수준의 description, message, 공통 에러 상태를 다룹니다.
- `Field.Item`
  - 한 줄 또는 내부 범위 단위의 상태와 메시지를 다룹니다.
- `Field.Grid`
  - 레이아웃 전용입니다.

규칙:

- 블록 수준의 `infoMessage`나 `errorMessage`는 `Field`에 둡니다.
- 행 수준의 `infoMessage`나 `errorMessage`는 `Field.Item`에 둡니다.
- 같은 메시지를 `Field`와 자식 input 양쪽에 중복해서 두지 않습니다.
- 입력 컴포넌트는 `Field` 안에서도, 밖에서도 같은 방식으로 사용할 수 있어야 합니다.
- label 연결과 그룹 이름 규칙은 [accessibility.md](./accessibility.md)를 따릅니다.

## 2. 상태 의미와 값 소유권

기본 입력 컴포넌트는 controlled usage를 기준으로 설계하고, RHF 래퍼는 상태 소유권을 RHF로 넘깁니다.

규칙:

- 기본 컴포넌트는 `value`, `checked`, `selected`와 변경 이벤트를 외부에서 제어하는 패턴을 우선합니다.
- RHF 래퍼는 RHF가 관리하는 prop과 UI prop의 경계를 명확히 유지합니다.
- `disabled`는 상호작용 전체를 막는 상태입니다.
- `readOnly`는 현재 값을 유지한 채 값 변경만 막는 상태입니다.
- 에러 상태는 외부 prop, `Field`, 내부 검증 결과를 함께 고려해 일관되게 계산합니다.

## 3. Overlay와 Portal 구조

popup, toast, dropdown 같은 떠 있는 레이어는 공통 host와 portal 구조를 우선합니다.

규칙:

- overlay는 페이지 안에서 임의로 렌더링하지 않고 공통 host 구조를 사용합니다.
- overlay stack이 필요한 컴포넌트는 기존 layer 시스템과 함께 설계합니다.
- 레이어 순서는 [styles.md](./styles.md)의 공통 layer scale을 따릅니다.
