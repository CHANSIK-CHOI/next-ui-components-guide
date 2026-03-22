# Next UI Components Guide

Next.js 환경에서 사용할 수 있는 공용 UI 컴포넌트를 가이드 형태로 정리한 프로젝트입니다.  
기본 인터랙션 컴포넌트부터 폼 입력, 오버레이, 복합 컴포넌트까지 범위를 넓혀가며, controlled 패턴과 React Hook Form 연동 방식까지 함께 다룹니다.

## 프로젝트 소개

이 프로젝트는 단순히 컴포넌트를 나열하는 데서 끝나지 않고, 실제로 확장 가능한 UI 시스템을 만드는 과정을 정리하는 데 목적이 있습니다.

- Next 기반 UI 컴포넌트 설계 및 가이드 페이지 구성
- controlled 입력 컴포넌트와 RHF 래퍼 연결 규칙 정리
- React Hook Form 연동 예제 제공
- Field 중심 폼 레이아웃 규칙 정립
- 공통 디자인 토큰 정리
  - typography
  - spacing
  - size
  - radius / shadow
  - color / state
  - motion
- 접근성과 재사용성을 고려한 compound component 패턴 정리

## 컴포넌트 리스트

현재 가이드에 포함된 주요 컴포넌트는 아래와 같습니다.

### Input / Form / Form Layout

- `Textfield`
- `Textarea`
- `Search`
- `Password`
- `Select`
- `MultiSelect`
- `Checkbox`
- `CheckboxGroup`
- `Radio`
- `RadioGroup`
- `Switch`
- `Datepicker`
- `DateRangePicker`
- `DateMultiplePicker`
- `Field`
- `Field.Item`
- `Field.Grid`
- `Field.Label`
- `Field.Description`

### Button / Link / Button Layout

- `Button`
- `ButtonLink`
- `IconButton`
- `ButtonGroup`

### Popup / Feedback

- `Alert`
- `Confirm`
- `LayerPopup`
- `BottomSheet`
- `FullPopup`
- `Toast`
- `Tooltip`

### ETC.

- `Accordion`

### React Hook Form Wrappers

- `RHFTextfield`
- `RHFTextarea`
- `RHFSearch`
- `RHFPassword`
- `RHFSelect`
- `RHFMultiSelect`
- `RHFCheckbox`
- `RHFRadio`
- `RHFSwitch`
- `RHFDatepicker`
- `RHFDateRangePicker`
- `RHFDateMultiplePicker`

## 사용 라이브러리

홈 페이지 기준으로 프로젝트에서 사용하는 핵심 라이브러리는 아래와 같습니다.

### Core Stack

- `Next.js 14`
- `React 18`
- `TypeScript 5`
- `Sass (SCSS)`

### UI / Form / State

- `react-hook-form`
- `react-select`
- `react-day-picker`
- `date-fns`
- `classnames`
- `zustand`

### Motion / Assets

- `framer-motion`
- `simple-icons`

## 폴더 구조

컴포넌트 구현에 관련된 파일의 폴더 구조입니다.

```text
src
├─ components     # 실제 UI 컴포넌트 구현
│  ├─ Accordion
│  ├─ Button
│  ├─ Checkbox
│  ├─ Datepicker
│  ├─ Field
│  ├─ Guide
│  ├─ Icon
│  ├─ Popup
│  ├─ Radio
│  ├─ Select
│  ├─ Switch
│  ├─ Textarea
│  ├─ Textfield
│  ├─ Toast
│  └─ Tooltip
│
├─ styles           # 디자인 시스템 토큰과 컴포넌트 스타일
│  ├─ abstracts
│  ├─ base
│  ├─ components
│  └─ ...
├─ types
└─ utils            # 공통 유틸리티와 JS 모션 토큰
```

## 네이밍 규칙

홈 페이지에 정리된 네이밍 규칙은 아래 기준을 따릅니다.

- 동작 함수는 동사형
  - `get`, `set`, `open`, `close`, `create`, `remove`
- 이벤트 prop은 `on...`
- 내부 구현용 핸들러는 `handle...`
- boolean은 의미에 따라 접두어 구분
  - 상태: `is...`
  - 보유 여부: `has...`
  - 가능 여부: `can...`
  - 정책/의도: `should...`
- 값 prop은 명사형 유지
- 외부 라이브러리 pass-through prop은 원래 이름 유지

## 디자인 시스템 규칙

프로젝트 UI 규칙은 아래 문서 폴더를 기준으로 관리합니다.

- [docs/ui-system-rules/README.md](docs/ui-system-rules/README.md)
- [docs/ui-system-rules/components.md](docs/ui-system-rules/components.md)
- [docs/ui-system-rules/styles.md](docs/ui-system-rules/styles.md)
- [docs/ui-system-rules/accessibility.md](docs/ui-system-rules/accessibility.md)

각 문서에는 아래 기준이 나뉘어 정리되어 있습니다.

- 컴포넌트 구조, `Field / Field.Item / Field.Grid` 사용 규칙
- controlled 컴포넌트와 RHF 래퍼의 값 소유권 규칙
- popup / toast host와 portal 구조
- typography scale
- spacing / size / radius / shadow 규칙
- color / state token 규칙
- SCSS motion / Framer Motion 사용 규칙
- `id / aria-describedby / aria-invalid` 접근성 연결 규칙
- 그룹 컨트롤과 아이콘 전용 UI의 accessible name 규칙

## 실행 방법

### 개발 서버

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하면 가이드 홈을 확인할 수 있습니다.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm run start
```

### 린트

```bash
npm run lint
```

## 이 프로젝트에서 중점적으로 본 부분

- 공용 UI 컴포넌트의 일관성
- 가이드 페이지를 통한 사용 예시 제공
- 실제 폼 흐름에서의 조합 가능성
- controlled 컴포넌트와 RHF 래퍼의 역할 분리
- compound component와 접근성 연결 구조
- popup / toast host와 portal 레이어 구조
- 토큰 기반 디자인 시스템 정리

## 참고

- 홈 페이지: `src/pages/index.tsx`
- 가이드 네비게이션 정의: `src/components/Guide/guideNavigation.ts`
- 디자인 시스템 규칙: `docs/ui-system-rules/README.md`
