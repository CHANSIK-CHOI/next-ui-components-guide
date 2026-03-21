import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { FIELD_LABEL_PROPS_CODE } from "@/components/Guide/fieldTypeReferences";

const fieldLabelPropsRows: GuidePropsTableRow[] = [
  {
    name: "children",
    typeLabel: "React.ReactNode",
    defaultValue: "undefined",
    description: "라벨 텍스트나 커스텀 inline 내용을 표시합니다.",
  },
  {
    name: "as",
    typeLabel: '"label" | "span"',
    defaultValue: '"label"',
    description:
      "기본은 실제 label 태그이고, 그룹 제목처럼 입력 연결이 필요 없으면 span으로 바꿉니다.",
  },
  {
    name: "htmlFor",
    typeLabel: "string",
    defaultValue: "field inputId",
    description:
      "as='label'일 때만 사용할 수 있습니다. 생략하면 현재 Field scope의 inputId를 자동 연결합니다.",
  },
  {
    name: "id",
    typeLabel: "string",
    defaultValue: "field labelId",
    description:
      "생략하면 현재 Field scope에서 생성한 label id를 사용합니다.",
  },
  {
    name: "className",
    typeLabel: "string",
    defaultValue: "undefined",
    description: "Field.Label element에 커스텀 클래스를 추가합니다.",
  },
  {
    name: "title | onClick | aria-* ...",
    typeLabel: "native label/span props",
    defaultValue: "inherited",
    description:
      "as 값에 따라 label 또는 span의 native 속성을 그대로 전달할 수 있습니다.",
  },
];

export default function FieldLabelPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Field.Label props 한눈에 보기"
      description="Field.Label은 label/span 이중 모드를 지원하며, 기본적으로 현재 Field scope의 inputId와 연결됩니다."
    >
      <GuidePropsTable
        rows={fieldLabelPropsRows}
        note={
          <>
            <span>
              <code>Field.LabelProps</code>는{" "}
              <code>as=&quot;label&quot;</code>과{" "}
              <code>as=&quot;span&quot;</code> 유니온 타입입니다.{" "}
              <code>span</code> 모드에서는 <code>htmlFor</code>를 받을 수 없고,
              그룹 제목처럼 input과 직접 연결되지 않는 라벨에 사용합니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="FieldLabelProps 보기"
                title="FieldLabelProps"
                description="label/span 모드를 모두 담은 Field.Label 유니온 타입입니다."
                code={FIELD_LABEL_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
