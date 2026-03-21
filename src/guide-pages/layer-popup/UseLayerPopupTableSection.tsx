import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  LAYER_POPUP_OPTIONS_CODE,
  POPUP_RUNTIME_PROPS_CODE,
  POPUP_SNAPSHOT_CODE,
} from "@/components/Guide/popupTypeReferences";

const useLayerPopupRows: GuidePropsTableRow[] = [
  {
    name: "open",
    typeLabel: "(options: LayerPopupOptions) => string",
    required: true,
    description:
      "새 LayerPopup 인스턴스를 stack에 추가하고 생성된 id를 반환합니다.",
  },
  {
    name: "open.options.component",
    typeLabel: "React.ComponentType<LayerPopupComponentProps>",
    required: true,
    description:
      "PopupHost가 렌더링할 custom LayerPopup 컴포넌트입니다. runtime props를 받아야 합니다.",
  },
  {
    name: "open.options.id",
    typeLabel: "string",
    defaultValue: "auto generated id",
    description:
      "특정 인스턴스를 직접 추적하거나 close(id) 대상으로 삼고 싶을 때 사용합니다.",
  },
  {
    name: "close",
    typeLabel: "(id?: string) => void",
    required: true,
    description:
      "id를 주면 해당 LayerPopup을 닫고, 생략하면 현재 타입 stack의 마지막 popup을 닫습니다.",
  },
  {
    name: "closeAll",
    typeLabel: "() => void",
    required: true,
    description:
      "현재 열린 LayerPopup 타입 인스턴스만 모두 closing 상태로 전환합니다.",
  },
  {
    name: "layerPopups",
    typeLabel: 'Array<{ id: string; type: "layerPopup"; status: "open" | "closing" }>',
    required: true,
    description:
      "전역 popup stack 중 LayerPopup 항목만 필터링한 snapshot 배열입니다.",
  },
];

export default function UseLayerPopupTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="useLayerPopup API 한눈에 보기"
      description="LayerPopup 등록과 stack 제어에 사용하는 hook API를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={useLayerPopupRows}
        note={
          <>
            <span>
              <code>useLayerPopup()</code>는 store action을 감싼 얇은 wrapper입니다.
              실제 shell props는 <code>component</code> 안의{" "}
              <code>{"<LayerPopup {...runtimeProps} />"}</code>에서 선언합니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="LayerPopupOptions 보기"
                title="LayerPopupOptions"
                description="open()에 넘기는 등록 옵션 타입입니다."
                code={LAYER_POPUP_OPTIONS_CODE}
              />
              <GuideTypeTooltip
                label="PopupRuntimeProps 보기"
                title="PopupRuntimeProps"
                description="등록한 component가 받아야 하는 runtime props입니다."
                code={POPUP_RUNTIME_PROPS_CODE}
              />
              <GuideTypeTooltip
                label="PopupSnapshot 보기"
                title="PopupSnapshot"
                description="layerPopups 배열이 반환하는 stack snapshot 구조입니다."
                code={POPUP_SNAPSHOT_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
