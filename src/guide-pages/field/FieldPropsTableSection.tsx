import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { FIELD_PROPS_CODE } from "@/components/Guide/fieldTypeReferences";

const fieldPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "React.ReactNode",
    required: true,
    description:
      "Field.Label, 입력 컴포넌트, Field.Description, Field.Message 같은 하위 요소를 한 스코프로 묶습니다.",
  },
  {
    name: "inputId",
    typeLabel: "string",
    defaultValue: "auto generated id",
    description:
      "Field.Label의 htmlFor와 내부 입력 컴포넌트의 id를 강제로 고정하고 싶을 때 사용합니다.",
  },
  {
    name: "direction",
    typeLabel: '"row" | "column"',
    defaultValue: '"column"',
    description:
      "라벨/입력/설명 흐름의 기본 배치를 결정합니다. 일반 폼 블록은 column이 기본입니다.",
  },
  {
    name: "align",
    typeLabel: '"start" | "center"',
    defaultValue: '"start"',
    description:
      "자식 요소의 교차축 정렬을 제어합니다. checkbox/switch 행 정렬과 함께 자주 씁니다.",
  },
  {
    name: "infoMessage | errorMessage",
    typeLabel: "string",
    defaultValue: '""',
    description:
      "Field 하단 메시지 슬롯에 안내/에러 문구를 출력합니다. errorMessage가 있으면 현재 스코프 전체가 에러 상태가 됩니다.",
  },
  {
    name: "isError",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "메시지 없이 시각 에러 상태만 강제로 줄 때 사용합니다. errorMessage가 있으면 자동으로 true처럼 동작합니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "Field root wrapper에 커스텀 클래스를 추가합니다.",
  },
  {
    name: "id | style | role | data-* ...",
    typeLabel: "native div props",
    defaultValue: "inherited",
    description:
      "Field가 직접 제어하지 않는 div 속성은 루트 wrapper에 그대로 전달됩니다.",
  },
];

export default function FieldPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Field props 한눈에 보기"
      description="Field root 스코프가 제공하는 레이아웃과 메시지 공유 규칙을 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={fieldPropsRows}
        note={
          <>
            <span>
              <code>Field</code>는 현재 스코프의 <code>inputId</code>,{" "}
              <code>labelId</code>, <code>describedByIds</code>,{" "}
              <code>isError</code>를 context로 공유합니다. 그래서 내부 입력
              컴포넌트와 <code>Field.Label</code>,{" "}
              <code>Field.Description</code>, <code>Field.Message</code>가 자동으로
              연결됩니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="FieldProps 보기"
                title="FieldProps"
                description="Field root가 받는 기본 스코프 및 레이아웃 props 타입입니다."
                code={FIELD_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
