import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { RHF_SEARCH_PROPS_CODE } from "@/components/Guide/searchTypeReferences";

const rhfSearchPropsRows: GuidePropsTableRow[] = [
  {
    name: "name",
    typeLabel: "FieldPath<TFormValues>",
    required: true,
    description: "React Hook Form 필드 경로입니다.",
  },
  {
    name: "control",
    typeLabel: "Control<TFormValues>",
    required: true,
    description: "useForm에서 받은 control 객체를 전달합니다.",
  },
  {
    name: "rules",
    typeLabel: "RHFTextfieldProps['rules']",
    defaultValue: "undefined",
    description: "검색어 검증 규칙을 RHFTextfield와 동일하게 연결합니다.",
  },
  {
    name: "defaultValue",
    typeLabel: "string",
    defaultValue: "undefined",
    description:
      "필요할 때만 사용하며, 일반적으로는 useForm의 defaultValues를 우선 사용합니다.",
  },
  {
    name: "shouldUnregister",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "조건부 렌더링으로 필드가 사라질 때 RHF 상태에서도 값을 제거할지 결정합니다.",
  },
  {
    name: "onSearch",
    typeLabel: "() => void",
    defaultValue: "undefined",
    description:
      "검색 버튼 클릭 액션을 RHF submit과 별도로 연결할 수 있습니다.",
  },
  {
    name: "searchButtonTitle / searchButtonType",
    typeLabel: 'string | "button" | "submit" | "reset"',
    defaultValue: '"검색" | inferred',
    description: "검색 버튼의 접근성 title과 버튼 type을 설정합니다.",
  },
  {
    name: "formatValue",
    typeLabel: "(value: string) => string",
    defaultValue: "undefined",
    description:
      "RHFTextfield에서 상속한 값 가공 로직도 그대로 사용할 수 있습니다.",
  },
  {
    name: "isClearable / infoMessage / readOnly / disabled ...",
    typeLabel: "RHFTextfield inherited props",
    defaultValue: "inherited",
    description:
      "RHFTextfield와 Textfield의 UI props를 그대로 전달할 수 있습니다.",
  },
];

export default function RHFSearchPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="RHFSearch props 한눈에 보기"
      description="RHFSearch에서 사용하는 RHF 제어 props와 검색 버튼 관련 추가 props를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={rhfSearchPropsRows}
        note={
          <>
            <span>
              <code>RHFSearchProps</code>는 <code>RHFTextfieldProps</code>에서{" "}
              <code>children</code>과 <code>type</code>을 숨기고, 검색 버튼용
              prop만 추가한 타입입니다. 내부에서 <code>type</code>은 항상{" "}
              <code>{'"text"'}</code>로 고정됩니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="RHFSearchProps 보기"
                title="RHFSearchProps"
                description="RHFTextfield 기반 검색 입력 래퍼의 타입 정의입니다."
                code={RHF_SEARCH_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
