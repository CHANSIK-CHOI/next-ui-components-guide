import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { ACCORDION_PANEL_PROPS_CODE } from "@/components/Guide/accordionTypeReferences";

const accordionPanelPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "React.ReactNode",
    required: true,
    description: "열리고 닫히는 패널 본문 콘텐츠입니다.",
  },
  {
    name: "index",
    typeLabel: "number",
    required: true,
    description:
      "현재 패널을 식별하는 index입니다. 같은 index의 Accordion.Button과 연결됩니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "Accordion panel wrapper에 커스텀 클래스를 추가합니다.",
  },
];

export default function AccordionPanelPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Accordion.Panel props 한눈에 보기"
      description="Accordion.Panel은 현재 index의 열림 상태에 따라 collapse 애니메이션과 aria 연결을 처리합니다."
    >
      <GuidePropsTable
        rows={accordionPanelPropsRows}
        note={
          <>
            <span>
              실제 unmount/hidden 전략은 부모 <code>Accordion</code>의{" "}
              <code>shouldKeepMounted</code>가 제어합니다. true면 패널을 숨긴 채
              유지하고, false면 닫힐 때 DOM에서 제거합니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="AccordionPanelProps 보기"
                title="AccordionPanelProps"
                description="패널 본문 wrapper가 받는 기본 props 타입입니다."
                code={ACCORDION_PANEL_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
