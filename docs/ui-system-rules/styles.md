# 스타일 규칙

이 문서는 스타일 시스템에서 계속 판단이 필요한 공통 기준만 정리합니다.

## 1. 타입 스케일

프로젝트에서 정의한 타입 스케일만 사용합니다. 명확한 예외가 없다면 임의의 폰트 크기를 추가하지 않습니다.

- `label`
  - 작은 라벨, 칩, 메타 텍스트, 그룹 캡션
- `body-sm`
  - 보조 본문, 설명 텍스트, 서브 카피
- `body`
  - 기본 컨트롤 텍스트와 일반 본문
- `title`
  - 카드 제목, 섹션 제목, 다이얼로그 제목
- `display`
  - 히어로 타이틀 전용

SCSS 규칙:

```scss
@include mix.type-scale("body");
@include mix.type-scale("label", "bold", 1, 0.12em);
```

## 2. 간격과 레이아웃

먼저 spacing scale을 사용하고, 요소가 카드나 섹션이면 surface padding token을 사용합니다.

- `func.space("2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl")`
  - 일반 간격, 인라인 패딩, 수직 스택 간격
- `func.surface-space("compact" | "card" | "section")`
  - surface 내부 패딩
- `func.size(...)`
  - 컨트롤 높이, 아이콘 크기, 칩 크기, 셀렉터 크기
- `func.radius(...)`
  - 공통 scale의 border radius만 사용
- `func.shadow(...)`
  - 공통 scale의 shadow만 사용

규칙:

- 형제 요소 사이 여백은 margin보다 `gap`을 우선 사용합니다.
- 커스텀 wrapper `div`를 추가하기 전에 `Field.Grid`, `ButtonGroup`, 컴포넌트 레이아웃 API를 먼저 검토합니다.
- 기존 size/spacing token으로 대체 가능한 경우 `3.6rem`, `4.8rem`, `2.4rem` 같은 하드코딩 값은 쓰지 않습니다.

## 3. 색상과 상태 토큰

컴포넌트 스타일에서는 원시 색상값보다 semantic token을 우선합니다.

- Text
  - `--text-primary`
  - `--text-secondary`
  - `--text-tertiary`
  - `--text-quaternary`
  - `--text-brand`
  - `--text-danger`
  - `--text-info`
- Border
  - `--border-subtle`
  - `--border-default`
  - `--border-strong`
  - `--border-brand*`
- Surface and gradients
  - `--surface-*`
  - `--gradient-*`
- Controls
  - `--control-text`
  - `--control-bg`
  - `--control-border`
  - `--control-accent`
  - `--control-border-error`

규칙:

- 컴포넌트에서는 semantic text token을 사용합니다.
- input 계열 컴포넌트에서는 control token을 사용합니다.
- brand, error, info, disabled, readonly 상태는 semantic token으로 표현합니다.

## 4. 모션

SCSS 모션과 Framer Motion은 같은 토큰 체계를 사용해야 합니다.

SCSS:

- duration token은 `src/styles/abstracts/_variables.scss`에 있습니다.
- `func.transition-token(...)` 또는 `@include mix.motion-transition(...)`를 사용합니다.

JS:

- Framer Motion token은 `src/utils/motion.ts`에 있습니다.
- `motionTransition.overlay`, `motionTransition.panel`, `motionTransition.popover`, `motionTransition.toast`, `motionTransition.collapse`를 사용합니다.
- 문서화된 예외가 없는 한 컴포넌트에 `duration: 0.18`이나 `ease: "easeOut"` 같은 값을 직접 넣지 않습니다.

규칙:

- duration과 easing은 토큰 이름으로 사용하고, 숫자값을 컴포넌트에 직접 적지 않습니다.
- SCSS와 JS가 서로 다른 모션 감각을 갖지 않도록 같은 기준을 유지합니다.

## 5. 레이어 스케일

overlay, tooltip, dropdown, datepicker 같은 떠 있는 레이어는 공통 z-index scale을 기준으로 맞춥니다.

규칙:

- 레이어 우선순위는 공통 scale로 관리합니다.
- 라이브러리 style API를 쓰더라도 같은 레이어 체계를 따릅니다.
- overlay 구조는 [components.md](./components.md)의 overlay 규칙을 함께 따릅니다.
