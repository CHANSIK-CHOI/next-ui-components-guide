import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { ACCORDION_BUTTON_PROPS_CODE } from "@/components/Guide/accordionTypeReferences";

const accordionButtonPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "React.ReactNode",
    required: true,
    description:
      "토글 버튼 내부 콘텐츠입니다. 보통 Accordion.Head를 children으로 넣습니다.",
  },
  {
    name: "index",
    typeLabel: "number",
    required: true,
    description:
      "토글할 패널 index입니다. 같은 index의 Accordion.Panel과 연결됩니다.",
  },
  {
    name: "onClick",
    typeLabel: "(index: number, event: MouseEvent<HTMLButtonElement>) => void",
    defaultValue: "undefined",
    description:
      "내부 토글 처리 이후 추가로 실행되는 콜백입니다. 일반 button onClick과 달리 index를 첫 번째 인자로 받습니다.",
  },
  {
    name: "aria-controls | aria-expanded",
    typeLabel: "string | boolean",
    defaultValue: "auto linked",
    description:
      "생략하면 현재 panel id와 열림 상태를 자동으로 연결합니다. 필요하면 직접 override할 수 있습니다.",
  },
  {
    name: "disabled",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "버튼 상호작용을 막습니다. native button disabled 동작을 그대로 따릅니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "Accordion button element에 커스텀 클래스를 추가합니다.",
  },
  {
    name: "name | title | tabIndex | data-* ...",
    typeLabel: "native button props",
    defaultValue: "inherited",
    description:
      "children, onClick, id를 제외한 나머지 native button props는 그대로 전달할 수 있습니다.",
  },
];

export default function AccordionButtonPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Accordion.Button props 한눈에 보기"
      description="Accordion.Button은 패널 토글과 접근성 연결을 자동으로 처리하는 button wrapper입니다."
    >
      <GuidePropsTable
        rows={accordionButtonPropsRows}
        note={
          <>
            <span>
              <code>Accordion.Button</code>은 <code>type=&quot;button&quot;</code>과
              내부 <code>id</code>를 직접 고정합니다. 또한 패널이 닫혀 있고{" "}
              <code>shouldKeepMounted</code>가 false이면 기본{" "}
              <code>aria-controls</code>를 제거해 unmounted panel과의 참조를
              피합니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="AccordionButtonProps 보기"
                title="AccordionButtonProps"
                description="자동 토글과 커스텀 onClick 시그니처를 가진 button props 타입입니다."
                code={ACCORDION_BUTTON_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
