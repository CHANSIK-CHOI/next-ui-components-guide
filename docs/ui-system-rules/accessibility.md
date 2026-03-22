# 접근성 규칙

이 문서는 접근성에서 계속 판단이 필요한 핵심 원칙만 정리합니다.

## 1. 라벨과 그룹 이름

규칙:

- label이 하나의 컨트롤에 연결되어야 하면 `Field.Label`을 사용합니다.
- 그룹 라벨이나 시각적 제목처럼 실제 `label` 요소가 아니어야 하면 `Field.Label as="span"`을 사용합니다.
- `RadioGroup`, `CheckboxGroup` 같은 그룹 컨트롤은 보이는 `Field.Label as="span"` 아래에 두거나 명시적인 `aria-label`을 받아야 합니다.
- 텍스트가 없는 버튼이나 아이콘 전용 컨트롤은 접근성 이름을 반드시 가집니다.
- 의미 있는 SVG 아이콘은 이름을 노출하고, 장식용 아이콘은 보조기기에서 숨깁니다.
- 그룹 컨트롤은 역할과 이름이 함께 제공되어야 합니다.

## 2. ID와 설명/메시지 연결

입력 컴포넌트는 id, label, description, message, 에러 상태를 하나의 읽기 흐름으로 연결해야 합니다.

규칙:

- 입력 컴포넌트는 label, description, message, 에러 상태가 하나의 읽기 흐름으로 연결되어야 합니다.
- `aria-describedby`와 `aria-invalid`는 상태에 맞게 일관되게 연결합니다.
- 설명과 메시지 배치는 [components.md](./components.md)의 `Field` 규칙을 따릅니다.

## 3. Overlay 접근성

popup 계열 overlay는 열림/닫힘뿐 아니라 포커스와 배경 접근성까지 함께 제어해야 합니다.

규칙:

- 열릴 때 포커스가 overlay 안으로 이동해야 합니다.
- 닫히면 사용자가 작업하던 흐름으로 포커스가 자연스럽게 복귀해야 합니다.
- overlay가 열려 있는 동안 배경 콘텐츠는 접근할 수 없어야 합니다.
