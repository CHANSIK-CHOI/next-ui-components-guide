import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  RHF_COMPONENT_PROPS_CODE,
  RHF_VALUE_INPUT_MANAGED_PROPS_CODE,
} from "@/components/Guide/rhfTypeReferences";
import {
  RHF_TEXTAREA_BASE_PROPS_CODE,
  TEXTAREA_BASE_PROPS_CODE,
} from "@/components/Guide/textareaTypeReferences";

const rhfTextareaPropsRows: GuidePropsTableRow[] = [
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
      "required, validate, minLength 같은 검증 규칙을 useController 규격으로 전달합니다.",
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
    name: "formatValue",
    typeLabel: "(value: string) => string",
    defaultValue: "undefined",
    description:
      "onChange 시 입력값을 가공한 뒤 RHF 상태에 반영합니다.",
  },
  {
    name: "disabled",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "useController와 실제 Textarea에 동시에 반영되어 필드 업데이트와 상호작용을 막습니다.",
  },
  {
    name: "errorMessage",
    typeLabel: "string",
    defaultValue: "field error message",
    description:
      "RHF 검증 메시지가 없을 때만 fallback 에러 메시지로 사용됩니다.",
  },
  {
    name: "rows / resize / isClearable / onClear ...",
    typeLabel: "Textarea inherited props",
    defaultValue: "inherited",
    description:
      "RHF가 직접 관리하지 않는 Textarea UI props와 native textarea props는 그대로 전달할 수 있습니다.",
  },
];

export default function RHFTextareaPropsTableSection() {
  const rhfTextareaTypeCode = `${RHF_COMPONENT_PROPS_CODE}

${RHF_VALUE_INPUT_MANAGED_PROPS_CODE}

${RHF_TEXTAREA_BASE_PROPS_CODE}

export type RHFTextareaProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = RHFComponentProps<
  TFormValues,
  TFieldName,
  TextareaProps,
  RHFValueInputManagedProps
> &
  RHFTextareaBaseProps;`;

  return (
    <GuideSection
      label="Props Table"
      title="RHFTextarea props 한눈에 보기"
      description="RHFTextarea에서 사용하는 RHF 제어 props와 Textarea 상속 props를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={rhfTextareaPropsRows}
        note={
          <>
            <span>
              <code>RHFTextareaProps</code>는{" "}
              <code>
                RHFComponentProps&lt;TFormValues, TFieldName, TextareaProps,
                RHFValueInputManagedProps&gt;
              </code>
              에 <code>formatValue</code>를 추가한 구조입니다. 그래서{" "}
              <code>name</code>, <code>value</code>, <code>defaultValue</code>,{" "}
              <code>onBlur</code>, <code>onChange</code>는 RHF가 관리하고,
              나머지 Textarea UI props만 직접 전달하는 패턴입니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="RHFTextarea 타입 보기"
                title="RHFTextareaProps / RHFValueInputManagedProps"
                description="Textarea wrapper에서 RHF가 직접 관리하는 value 계열 prop 조합입니다."
                code={rhfTextareaTypeCode}
              />
              <GuideTypeTooltip
                label="TextareaBaseProps 보기"
                title="TextareaBaseProps"
                description="RHFTextarea도 그대로 상속하는 Textarea의 커스텀 UI props입니다."
                code={TEXTAREA_BASE_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
