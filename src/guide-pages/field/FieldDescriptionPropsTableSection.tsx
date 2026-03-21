import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { FIELD_DESCRIPTION_PROPS_CODE } from "@/components/Guide/fieldTypeReferences";

const fieldDescriptionPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "React.ReactNode",
    defaultValue: "undefined",
    description:
      "입력 아래에 붙는 보조 설명 문구나 추가 가이드를 출력합니다.",
  },
  {
    name: "id",
    typeLabel: "string",
    defaultValue: "auto generated description id",
    description:
      "생략하면 자동 id를 만들고 현재 Field scope에 등록해 aria-describedby에 연결합니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "Field.Description element에 커스텀 클래스를 추가합니다.",
  },
  {
    name: "title | aria-* ...",
    typeLabel: "native p props",
    defaultValue: "inherited",
    description:
      "Field.Description이 직접 제어하지 않는 p 속성은 그대로 전달됩니다.",
  },
];

export default function FieldDescriptionPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Field.Description props 한눈에 보기"
      description="Field.Description은 보조 설명 문구를 출력하면서 현재 스코프의 describedBy에 자동 등록됩니다."
    >
      <GuidePropsTable
        rows={fieldDescriptionPropsRows}
        note={
          <>
            <span>
              <code>Field.Description</code>은 렌더 시 자신의 id를 현재
              Field scope에 등록합니다. 그래서 내부 입력 컴포넌트가{" "}
              <code>aria-describedby</code>를 자동으로 이어받을 수 있습니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="FieldDescriptionProps 보기"
                title="FieldDescriptionProps"
                description="Field.Description이 받는 문단 element props 타입입니다."
                code={FIELD_DESCRIPTION_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
