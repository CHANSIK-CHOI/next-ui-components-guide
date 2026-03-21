import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import { RHF_VALUE_INPUT_MANAGED_PROPS_CODE } from "@/components/Guide/rhfTypeReferences";
import { RHF_MULTI_SELECT_PROPS_CODE } from "@/components/Guide/selectTypeReferences";

const rhfMultiSelectPropsRows: GuidePropsTableRow[] = [
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
    typeLabel: "UseControllerProps['rules']",
    defaultValue: "undefined",
    description:
      "최소 선택 개수 같은 검증 규칙을 useController 규격으로 전달합니다.",
  },
  {
    name: "defaultValue",
    typeLabel: "(string | number)[]",
    defaultValue: "undefined",
    description:
      "일반적으로는 useForm의 defaultValues를 우선 사용합니다.",
  },
  {
    name: "shouldUnregister",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "조건부 렌더링으로 필드가 사라질 때 RHF 상태에서도 값을 제거할지 결정합니다.",
  },
  {
    name: "disabled",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "useController와 실제 MultiSelect에 동시에 반영되어 필드 업데이트와 상호작용을 막습니다.",
  },
  {
    name: "isError | errorMessage",
    typeLabel: "boolean | string",
    defaultValue: "false | field error message",
    description:
      "RHF 검증 상태를 기반으로 시각 에러 상태와 메시지를 적용합니다.",
  },
  {
    name: "options | closeMenuOnSelect | isSearchable ...",
    typeLabel: "MultiSelect inherited props",
    defaultValue: "inherited",
    description:
      "RHF가 직접 관리하지 않는 MultiSelect UI props와 react-select props는 그대로 전달할 수 있습니다.",
  },
];

export default function RHFMultiSelectPropsTableSection() {
  const rhfMultiSelectTypeCode = `${RHF_VALUE_INPUT_MANAGED_PROPS_CODE}

${RHF_MULTI_SELECT_PROPS_CODE}`;

  return (
    <GuideSection
      label="Props Table"
      title="RHFMultiSelect props 한눈에 보기"
      description="RHFMultiSelect에서 사용하는 RHF 제어 props와 MultiSelect 상속 props를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={rhfMultiSelectPropsRows}
        note={
          <>
            <span>
              <code>RHFMultiSelectProps</code>는 <code>MultiSelectProps</code>
              에서 <code>name</code>, <code>value</code>,{" "}
              <code>defaultValue</code>, <code>onBlur</code>,{" "}
              <code>onChange</code>를 RHF가 관리하는 구조입니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="RHFMultiSelectProps 보기"
                title="RHFMultiSelectProps / RHFValueInputManagedProps"
                description="MultiSelect wrapper에서 RHF가 직접 관리하는 value 계열 prop 조합입니다."
                code={rhfMultiSelectTypeCode}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
