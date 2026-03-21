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
import { RHF_RADIO_MANAGED_PROPS_CODE } from "@/components/Guide/radioTypeReferences";

const rhfRadioPropsRows: GuidePropsTableRow[] = [
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
    name: "value",
    typeLabel: "NonNullable<RadioProps['value']>",
    required: true,
    description:
      "각 RHFRadio 옵션이 대표하는 실제 선택값입니다. 같은 name 아래 여러 옵션이 이 값으로 구분됩니다.",
  },
  {
    name: "rules",
    typeLabel: "UseControllerProps['rules']",
    defaultValue: "undefined",
    description:
      "required 같은 검증 규칙을 useController 규격으로 전달합니다.",
  },
  {
    name: "defaultValue",
    typeLabel: "RadioProps['value']",
    defaultValue: "undefined",
    description:
      "필요할 때만 사용하며, 일반적으로는 useForm의 defaultValues를 우선 사용합니다.",
  },
  {
    name: "shouldUnregister",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "조건부 렌더링으로 라디오 그룹이 사라질 때 RHF 상태에서도 값을 제거할지 결정합니다.",
  },
  {
    name: "disabled",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "useController와 실제 Radio에 동시에 반영되어 필드 업데이트와 상호작용을 막습니다.",
  },
  {
    name: "readOnly",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "Radio로 전달되어 현재 선택을 유지한 채 변경만 막습니다.",
  },
  {
    name: "isError",
    typeLabel: "boolean",
    defaultValue: "false",
    description:
      "RHF validation error와 별도로 추가 시각 에러 상태를 강제할 때 사용합니다.",
  },
  {
    name: "id / aria-describedby / className",
    typeLabel: "Radio inherited props",
    defaultValue: "inherited",
    description:
      "RHF가 직접 관리하지 않는 Radio props는 그대로 전달할 수 있습니다.",
  },
];

export default function RHFRadioPropsTableSection() {
  const rhfRadioTypeCode = `${RHF_COMPONENT_PROPS_CODE}

${RHF_CHECKED_INPUT_MANAGED_PROPS_CODE}

${RHF_RADIO_MANAGED_PROPS_CODE}

export type RHFRadioProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = RHFComponentProps<
  TFormValues,
  TFieldName,
  RadioProps,
  RHFRadioManagedProps
> & {
  value: RHFRadioValue;
};`;

  return (
    <GuideSection
      label="Props Table"
      title="RHFRadio props 한눈에 보기"
      description="RHFRadio에서 사용하는 RHF 제어 props와 Radio 상속 props를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={rhfRadioPropsRows}
        note={
          <>
            <span>
              <code>RHFRadioProps</code>는{" "}
              <code>
                RHFComponentProps&lt;TFormValues, TFieldName, RadioProps,
                {` RHFCheckedInputManagedProps | "value">`}
              </code>
              와 필수 <code>value</code> prop 조합입니다. 그래서{" "}
              <code>checked</code>, <code>defaultChecked</code>,{" "}
              <code>defaultValue</code>, <code>name</code>,{" "}
              <code>onBlur</code>, <code>onChange</code>는 RHF가 관리하고,
              각 옵션은 자신의 <code>value</code>를 반드시 전달해야 합니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="RHFRadio 타입 보기"
                title="RHFRadioProps / RHFRadioManagedProps"
                description="Radio wrapper에서 value를 필수로 만드는 타입 조합입니다."
                code={rhfRadioTypeCode}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
