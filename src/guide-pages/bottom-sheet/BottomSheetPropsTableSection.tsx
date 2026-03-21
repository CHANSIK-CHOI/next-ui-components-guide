import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  BOTTOM_SHEET_PROPS_CODE,
  POPUP_BASE_PROPS_CODE,
  POPUP_RUNTIME_PROPS_CODE,
} from "@/components/Guide/popupTypeReferences";

const bottomSheetPropsRows: GuidePropsTableRow[] = [
  {
    name: "title | description | children | footer",
    typeLabel: "React.ReactNode",
    defaultValue: "undefined",
    description:
      "하단 시트 흐름에서 필요한 헤더, 본문, 하단 액션 영역을 조합합니다.",
  },
  {
    name: "icon",
    typeLabel: "React.ReactNode | null",
    defaultValue: "undefined",
    description:
      "description 위에 아이콘 영역을 추가합니다. null이면 아이콘 슬롯을 비웁니다.",
  },
  {
    name: "contentAlign",
    typeLabel: '"left" | "center"',
    defaultValue: '"left"',
    description: "본문 텍스트와 footer 정렬 기준을 제어합니다.",
  },
  {
    name: "hasCloseButton | closeButtonLabel",
    typeLabel: "boolean | string",
    defaultValue: 'true | "팝업 닫기"',
    description:
      "상단 닫기 버튼 노출 여부와 접근성 라벨을 제어합니다.",
  },
  {
    name: "shouldCloseOnBackdrop | shouldCloseOnEscape",
    typeLabel: "boolean",
    defaultValue: "true | true",
    description:
      "backdrop 클릭과 Escape 키로 닫힐지 제어합니다. topmost popup에만 Escape가 반응합니다.",
  },
  {
    name: "dialogLabel",
    typeLabel: "string",
    defaultValue: '"바텀시트 팝업"',
    description:
      "title이 없을 때 dialog aria-label fallback으로 사용합니다.",
  },
  {
    name: "className | panelClassName | bodyClassName | footerClassName",
    typeLabel: "string",
    defaultValue: "undefined",
    description:
      "루트, 패널, body, footer wrapper 각각에 커스텀 클래스를 추가합니다.",
  },
  {
    name: "onClickClose",
    typeLabel: "() => void",
    defaultValue: "undefined",
    description:
      "닫기 버튼 클릭 시 onRequestClose 직전에 부가 동작을 실행합니다.",
  },
  {
    name: "id | open | onRequestClose | onExited | isTopmost",
    typeLabel: "runtime props from PopupHost",
    defaultValue: "injected",
    description:
      "커스텀 bottom sheet 컴포넌트에서는 보통 `...runtimeProps`로 받고, PopupHost가 lifecycle을 주입합니다.",
  },
];

export default function BottomSheetPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="BottomSheet props 한눈에 보기"
      description="BottomSheet shell에서 직접 제어하는 디자인 props와 PopupHost가 주입하는 runtime props를 함께 정리했습니다."
    >
      <GuidePropsTable
        rows={bottomSheetPropsRows}
        note={
          <>
            <span>
              <code>BottomSheet</code>은 <code>PopupBase</code>의 bottomSheet
              variant wrapper입니다. 모바일/빠른 선택 흐름을 전제로 하므로{" "}
              <code>size</code>는 외부에서 받지 않습니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="PopupBaseProps 보기"
                title="PopupBaseProps"
                description="popup 계열이 공통으로 공유하는 shell 및 runtime props입니다."
                code={POPUP_BASE_PROPS_CODE}
              />
              <GuideTypeTooltip
                label="BottomSheetProps 보기"
                title="BottomSheetProps"
                description="BottomSheet wrapper가 실제로 노출하는 shell props 타입입니다."
                code={BOTTOM_SHEET_PROPS_CODE}
              />
              <GuideTypeTooltip
                label="PopupRuntimeProps 보기"
                title="PopupRuntimeProps"
                description="PopupHost가 custom popup component에 주입하는 runtime props입니다."
                code={POPUP_RUNTIME_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
