import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  TOOLTIP_PLACEMENT_CODE,
  TOOLTIP_PROPS_CODE,
} from "@/components/Guide/tooltipTypeReferences";

const tooltipPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "ReactNode",
    required: true,
    description:
      "tooltip trigger 역할을 하는 콘텐츠입니다. 보통 focus 가능한 버튼/링크/폼 요소를 넣습니다.",
  },
  {
    name: "content",
    typeLabel: "ReactNode",
    required: true,
    description: "툴팁 bubble 안에 표시할 설명 콘텐츠입니다.",
  },
  {
    name: "placement",
    typeLabel:
      '"topCenter" | "topLeft" | "topRight" | "bottomCenter" | "bottomLeft" | "bottomRight"',
    defaultValue: '"topCenter"',
    description:
      "trigger 기준 배치를 지정합니다. 위/아래 방향에 따라 진입 애니메이션 offset도 함께 바뀝니다.",
  },
  {
    name: "open",
    typeLabel: "boolean",
    defaultValue: "undefined",
    description:
      "주면 controlled 모드로 동작합니다. 내부 hover/focus 이벤트는 onOpenChange만 호출하고 실제 열림 상태는 외부 값이 결정합니다.",
  },
  {
    name: "defaultOpen",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "uncontrolled 모드에서 초기 열림 상태입니다.",
  },
  {
    name: "onOpenChange",
    typeLabel: "(nextOpen: boolean) => void",
    defaultValue: "undefined",
    description:
      "hover, leave, focus, blur, Escape로 열림 상태가 바뀔 때 호출됩니다.",
  },
  {
    name: "disabled",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "true면 tooltip은 강제로 닫히고, hover/focus로 다시 열리지 않습니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "Tooltip 루트 wrapper에 커스텀 클래스를 추가합니다.",
  },
];

export default function TooltipPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Tooltip props 한눈에 보기"
      description="Tooltip의 배치, 제어 방식, 비활성화 규칙을 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={tooltipPropsRows}
        note={
          <>
            <span>
              <code>children</code>가 유효한 React element면 현재{" "}
              <code>aria-describedby</code>를 보존한 채 tooltip id를 병합합니다.
              tooltip이 닫히면 이 참조도 함께 제거됩니다. 비-element children은
              그대로 렌더링됩니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="TooltipProps 보기"
                title="TooltipProps"
                description="Tooltip이 받는 제어 및 배치 props 타입입니다."
                code={TOOLTIP_PROPS_CODE}
              />
              <GuideTypeTooltip
                label="TooltipPlacement 보기"
                title="TooltipPlacement"
                description="Tooltip 배치 옵션 타입입니다."
                code={TOOLTIP_PLACEMENT_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
