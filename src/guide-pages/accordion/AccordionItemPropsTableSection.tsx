import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { ACCORDION_ITEM_PROPS_CODE } from "@/components/Guide/accordionTypeReferences";

const accordionItemPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "React.ReactNode",
    required: true,
    description:
      "보통 해당 index에 대응하는 Accordion.Button과 Accordion.Panel을 함께 넣습니다.",
  },
  {
    name: "index",
    typeLabel: "number",
    required: true,
    description:
      "현재 item을 식별하는 index입니다. Button과 Panel의 index와 맞아야 같은 패널로 동작합니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "Accordion item wrapper에 커스텀 클래스를 추가합니다.",
  },
  {
    name: "layout | initial | animate | exit | style ...",
    typeLabel: 'framer-motion HTMLMotionProps<"div">',
    defaultValue: "inherited",
    description:
      "Accordion.Item은 motion.div 기반이라 필요한 motion/div props를 함께 전달할 수 있습니다.",
  },
];

export default function AccordionItemPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Accordion.Item props 한눈에 보기"
      description="Accordion.Item은 index 단위로 헤더와 패널을 묶는 motion wrapper입니다."
    >
      <GuidePropsTable
        rows={accordionItemPropsRows}
        note={
          <>
            <span>
              <code>Accordion.Item</code>은 현재 index가 열린 상태면{" "}
              <code>is-active</code> 클래스를 추가하고, layout transition을 같이
              적용합니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="AccordionItemProps 보기"
                title="AccordionItemProps"
                description="motion.div 기반 item wrapper props 타입입니다."
                code={ACCORDION_ITEM_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
