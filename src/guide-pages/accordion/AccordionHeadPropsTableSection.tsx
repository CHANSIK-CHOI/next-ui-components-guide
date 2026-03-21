import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { ACCORDION_HEAD_PROPS_CODE } from "@/components/Guide/accordionTypeReferences";

const accordionHeadPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "React.ReactNode",
    defaultValue: "undefined",
    description:
      "헤더 제목 영역 콘텐츠입니다. 없으면 제목 없이 화살표 영역만 렌더링됩니다.",
  },
  {
    name: "buttonIndex",
    typeLabel: "number",
    defaultValue: "undefined",
    description:
      "주면 오른쪽 화살표만 Accordion.Button으로 렌더링됩니다. 헤더 안에 checkbox 같은 다른 인터랙션을 넣을 때 유용합니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "Accordion head wrapper에 커스텀 클래스를 추가합니다.",
  },
  {
    name: "id | role | style | data-* ...",
    typeLabel: "native div props",
    defaultValue: "inherited",
    description:
      "Accordion.Head가 직접 제어하지 않는 div props는 wrapper에 그대로 전달됩니다.",
  },
];

export default function AccordionHeadPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Accordion.Head props 한눈에 보기"
      description="Accordion.Head는 제목 영역과 화살표 토글 버튼을 조합하는 헤더 wrapper입니다."
    >
      <GuidePropsTable
        rows={accordionHeadPropsRows}
        note={
          <>
            <span>
              <code>buttonIndex</code>가 있으면 헤더 텍스트에 title id를 만들고,
              오른쪽 화살표 버튼의 <code>aria-labelledby</code>로 연결합니다.
              그래서 헤더 전체를 버튼으로 감싸지 않아도 접근성 이름이 유지됩니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="AccordionHeadProps 보기"
                title="AccordionHeadProps"
                description="헤더 wrapper와 화살표 전용 토글 패턴을 위한 props 타입입니다."
                code={ACCORDION_HEAD_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
