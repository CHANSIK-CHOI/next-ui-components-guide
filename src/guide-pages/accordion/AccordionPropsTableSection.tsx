import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  ACCORDION_PROPS_CODE,
  ACCORDION_TYPE_CODE,
  ACCORDION_VARIANT_CODE,
} from "@/components/Guide/accordionTypeReferences";

const accordionPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "React.ReactNode",
    required: true,
    description:
      "보통 Accordion.Item, Accordion.Button, Accordion.Head, Accordion.Panel 조합을 넣습니다.",
  },
  {
    name: "type",
    typeLabel: '"single" | "multiple"',
    defaultValue: '"multiple"',
    description:
      "single이면 한 번에 하나만 열리고, multiple이면 여러 패널을 동시에 열 수 있습니다.",
  },
  {
    name: "variant",
    typeLabel: '"box" | "line"',
    defaultValue: '"box"',
    description: "아코디언 외곽 스타일과 구분선 패턴을 바꿉니다.",
  },
  {
    name: "activeIndices",
    typeLabel: "number[]",
    defaultValue: "undefined",
    description:
      "외부 상태로 열린 패널 index 배열을 제어합니다. 주면 controlled 모드로 동작합니다.",
  },
  {
    name: "defaultActiveIndices",
    typeLabel: "number[]",
    defaultValue: "[]",
    description:
      "uncontrolled 모드에서 초기 열린 패널 index 배열입니다.",
  },
  {
    name: "onChange",
    typeLabel: "(nextActiveIndices: number[]) => void",
    defaultValue: "undefined",
    description:
      "패널 토글 뒤 최종 열린 index 배열을 돌려줍니다.",
  },
  {
    name: "shouldKeepMounted",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "닫힌 패널을 DOM에서 제거하지 않고 숨김 상태로 유지합니다. 내부 form 상태 유지가 필요할 때 유용합니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "Accordion 루트 wrapper에 커스텀 클래스를 추가합니다.",
  },
];

export default function AccordionPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Accordion props 한눈에 보기"
      description="Accordion root가 제어하는 열림 방식과 스타일 variant 규칙을 정리했습니다."
    >
      <GuidePropsTable
        rows={accordionPropsRows}
        note={
          <>
            <span>
              <code>activeIndices</code>와 <code>defaultActiveIndices</code>는
              내부에서 정수만 남기고 중복을 제거한 뒤 사용합니다.{" "}
              <code>type=&quot;single&quot;</code>이면 최종적으로 첫 번째 index
              하나만 유지됩니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="AccordionProps 보기"
                title="AccordionProps"
                description="Accordion root가 받는 제어 및 스타일 props 타입입니다."
                code={ACCORDION_PROPS_CODE}
              />
              <GuideTypeTooltip
                label="AccordionType 보기"
                title="AccordionType"
                description="열림 방식 제어 타입입니다."
                code={ACCORDION_TYPE_CODE}
              />
              <GuideTypeTooltip
                label="AccordionVariant 보기"
                title="AccordionVariant"
                description="스타일 variant 타입입니다."
                code={ACCORDION_VARIANT_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
