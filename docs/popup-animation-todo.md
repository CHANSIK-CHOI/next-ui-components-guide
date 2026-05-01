# Popup 애니메이션 개선 TODO

> 모두 완료됨 (2026-05-01)

---

## 완료된 작업 목록

| 항목 | 파일 | 완료 여부 |
|------|------|-----------|
| Critical Issue 1: AnimatePresence 직계 자식 motion.div 교체 | `PopupBase.tsx` | 완료 |
| Critical Issue 2: will-change GPU 레이어 승격 | `_popup.scss` | 완료 |
| Warning 3: PopupHost portalRoot 1-tick 지연 제거 | `PopupHost.tsx` | 완료 |
| Warning 4: Exit easing 분리 (panelExit / overlayExit 추가) | `motion.ts`, `PopupBase.tsx` | 완료 |
| Warning 5: transform-origin 명시 | `_popup.scss` | 완료 |

---

## Warning 3: PopupHost portalRoot 1-tick 지연 — 완료

`useState` initializer 함수로 첫 렌더 시 동기적으로 portalRoot 탐색.
`useEffect` + `setPortalRoot` 완전 제거. SSR guard (`typeof document === 'undefined'`) 추가.

수정 파일: `src/components/Popup/PopupHost.tsx`

---

## Warning 4: Exit easing 분리 — 완료

`motionTransition`에 `overlayExit`, `panelExit` 추가.
`PopupBase.tsx`의 `exit` prop에 각각의 exit transition 인라인 적용.

수정 파일:
- `src/utils/motion.ts`
- `src/components/Popup/PopupBase.tsx`

---

## Warning 5: transform-origin 명시 — 완료

`&__panel` 블록에 `transform-origin: center` 추가.

수정 파일: `src/styles/components/_popup.scss`

---

## Playwright 검증 결과 (2026-05-01)

- `/layer-popup`: 팝업 열기/닫기 정상 동작, 콘솔 에러 0건
- `/layer-popup` (페이지 새로고침 후 즉시 열기): 1-tick 지연 없이 즉시 정상 렌더 (Warning 3 검증 완료)
- `/bottom-sheet`: 팝업 열기/닫기 정상 동작, 콘솔 에러 0건
