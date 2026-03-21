import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  RHF_CHECKED_INPUT_MANAGED_PROPS_CODE,
  RHF_COMPONENT_PROPS_CODE,
} from "@/components/Guide/rhfTypeReferences";

const rhfCheckboxPropsRows: GuidePropsTableRow[] = [
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
      "필수 동의 같은 검증 규칙을 useController 규격으로 전달합니다.",
  },
  {
    name: "defaultValue",
    typeLabel: "boolean",
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
    name: "disabled",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "useController와 실제 Checkbox에 동시에 반영되어 필드 업데이트와 상호작용을 막습니다.",
  },
  {
    name: "readOnly",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "Checkbox로 전달되어 현재 값을 유지한 채 변경만 막습니다.",
  },
  {
    name: "isError",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "RHF validation error와 별도로 추가 시각 에러 상태를 강제할 때 사용합니다.",
  },
  {
    name: "id / value / aria-describedby / className",
    typeLabel: "Checkbox inherited props",
    defaultValue: "inherited",
    description:
      "RHF가 직접 관리하지 않는 Checkbox props는 그대로 전달할 수 있습니다.",
  },
];

export default function RHFCheckboxPropsTableSection() {
  const rhfCheckboxTypeCode = `${RHF_COMPONENT_PROPS_CODE}

${RHF_CHECKED_INPUT_MANAGED_PROPS_CODE}

export type RHFCheckboxProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = RHFComponentProps<
  TFormValues,
  TFieldName,
  CheckboxProps,
  RHFCheckedInputManagedProps
>;`;

  return (
    <GuideSection
      label="Props Table"
      title="RHFCheckbox props 한눈에 보기"
      description="RHFCheckbox에서 사용하는 RHF 제어 props와 Checkbox 상속 props를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={rhfCheckboxPropsRows}
        note={
          <>
            <span>
              <code>RHFCheckboxProps</code>는{" "}
              <code>RHFComponentProps&lt;TFormValues, TFieldName, CheckboxProps, RHFCheckedInputManagedProps&gt;</code>
              형태입니다. 그래서 <code>checked</code>,{" "}
              <code>defaultChecked</code>, <code>defaultValue</code>,{" "}
              <code>name</code>, <code>onBlur</code>, <code>onChange</code>는
              RHF가 관리하고, 나머지 Checkbox props만 직접 전달하는 패턴입니다.
            </span>
            <GuideTypeTooltip
              label="RHFComponentProps 타입 보기"
              title="RHFComponentProps / RHFCheckedInputManagedProps"
              description="Checkbox, Switch 같은 RHF checked-input wrapper가 공통으로 사용하는 타입 정의입니다."
              code={rhfCheckboxTypeCode}
            />
          </>
        }
      />
    </GuideSection>
  );
}
