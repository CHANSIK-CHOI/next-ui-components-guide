# Next UI Components Guide

Next.js 기반 공통 UI 컴포넌트를 직접 구현하고, 가이드 페이지와 예제 폼으로 사용 흐름까지 정리한 프로젝트입니다.  
기본 인터랙션 컴포넌트부터 폼 입력, 오버레이, 복합 컴포넌트까지 범위를 넓혀가며, `Field` 중심 폼 구조, 접근성, 디자인 토큰, motion 기준까지 함께 다룹니다.

- Demo: [https://next-ui-components-guide.vercel.app/](https://next-ui-components-guide.vercel.app/)
- Docs: [docs/ui-system-rules/README.md](docs/ui-system-rules/README.md)
- Core Stack: `Next.js 14`, `React 18`, `TypeScript 5`, `react-hook-form`, `react-select`, `react-day-picker`, `zustand`, `framer-motion`, `Sass`

## 프로젝트 소개

이 프로젝트는 단순히 컴포넌트를 나열하는 데서 끝나지 않고, 실제로 확장 가능한 UI 시스템을 만드는 과정을 정리하는 데 목적이 있습니다.

- Next 기반 UI 컴포넌트 설계 및 가이드 페이지 구성
- controlled 컴포넌트와 React Hook Form 래퍼 구조 정리
- Field 중심 폼 레이아웃과 접근성 연결 규칙 정립
- popup, toast, datepicker 등 overlay 패턴 정리
- typography, spacing, size, radius / shadow, color / state, motion 디자인 토큰 체계 정리
- 재사용성과 접근성을 고려한 compound component 패턴 정리

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

프로젝트에서 사용하는 핵심 라이브러리는 아래와 같습니다.

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

## 관련 문서

UI 시스템 규칙과 구현 기준은 아래 문서에 정리했습니다.

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
