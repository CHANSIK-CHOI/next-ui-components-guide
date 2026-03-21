import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { FIELD_ITEM_PROPS_CODE } from "@/components/Guide/fieldTypeReferences";

const fieldItemPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "React.ReactNode",
    required: true,
    description:
      "checkbox, radio, switch처럼 한 행 단위로 묶고 싶은 입력과 라벨/설명 조합을 넣습니다.",
  },
  {
    name: "inputId",
    typeLabel: "string",
    defaultValue: "auto generated id",
    description:
      "현재 Item 스코프 안에서 사용할 입력 id를 고정합니다. 중첩 Field 안에서도 독립적으로 동작합니다.",
  },
  {
    name: "direction",
    typeLabel: '"row" | "column"',
    defaultValue: '"row"',
    description:
      "Item 내부 요소의 흐름 방향입니다. 라벨-입력 한 줄 배치는 row가 기본입니다.",
  },
  {
    name: "align",
    typeLabel: '"start" | "center"',
    defaultValue: '"center"',
    description:
      "row 배치에서 입력과 긴 라벨 텍스트의 수직 정렬을 맞출 때 주로 사용합니다.",
  },
  {
    name: "infoMessage | errorMessage",
    typeLabel: "string",
    defaultValue: '""',
    description:
      "현재 Item 스코프 하단 메시지를 출력합니다. Field root 안에 중첩해도 자기 범위 메시지만 처리합니다.",
  },
  {
    name: "isError",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "메시지 없이 시각 에러 상태만 강제로 줄 때 사용합니다. 부모 Field의 에러 상태와 합쳐집니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "Field.Item wrapper에 커스텀 클래스를 추가합니다.",
  },
  {
    name: "id | style | role | data-* ...",
    typeLabel: "native div props",
    defaultValue: "inherited",
    description:
      "Field.Item이 직접 제어하지 않는 div 속성은 wrapper에 그대로 전달됩니다.",
  },
];

export default function FieldItemPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Field.Item props 한눈에 보기"
      description="한 행 단위 입력 스코프를 만드는 Field.Item의 정렬과 메시지 규칙을 정리했습니다."
    >
      <GuidePropsTable
        rows={fieldItemPropsRows}
        note={
          <>
            <span>
              <code>Field.Item</code>도 독립적인 Field scope를 새로 만듭니다.
              그래서 부모 <code>Field</code> 안에 있어도 자신만의{" "}
              <code>inputId</code>, <code>describedByIds</code>,{" "}
              <code>isError</code>를 가질 수 있습니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="FieldItemProps 보기"
                title="FieldItemProps"
                description="Field.Item이 받는 row/column 스코프 props 타입입니다."
                code={FIELD_ITEM_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
