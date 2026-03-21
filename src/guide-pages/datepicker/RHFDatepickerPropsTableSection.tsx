import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  DATEPICKER_PROPS_CODE,
  RHF_DATEPICKER_PROPS_CODE,
} from "@/components/Guide/datepickerTypeReferences";
import { RHF_COMPONENT_PROPS_CODE } from "@/components/Guide/rhfTypeReferences";

const rhfDatepickerPropsRows: GuidePropsTableRow[] = [
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
      "required, validate 같은 날짜 검증 규칙을 useController 규격으로 전달합니다.",
  },
  {
    name: "defaultValue",
    typeLabel: "Date | undefined",
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
      "useController와 실제 Datepicker에 동시에 반영되어 필드 업데이트와 상호작용을 막습니다.",
  },
  {
    name: "errorMessage",
    typeLabel: "string",
    defaultValue: "field error message",
    description:
      "RHF 검증 메시지가 없을 때만 fallback 에러 메시지로 사용됩니다.",
  },
  {
    name: "onSelectedChange",
    typeLabel: "(selected: Date | undefined) => void",
    defaultValue: "undefined",
    description:
      "field.onChange 이후 추가로 호출되므로 RHF 상태와 함께 부수효과를 연결할 때 사용합니다.",
  },
  {
    name: "dayPickerProps | displayFormat | shouldCloseOnSelect ...",
    typeLabel: "Datepicker inherited props",
    defaultValue: "inherited",
    description:
      "RHF가 직접 관리하지 않는 Datepicker UI props와 캘린더 제어 props는 그대로 전달할 수 있습니다.",
  },
];

export default function RHFDatepickerPropsTableSection() {
  const rhfDatepickerTypeCode = `${RHF_COMPONENT_PROPS_CODE}

${RHF_DATEPICKER_PROPS_CODE}`;

  return (
    <GuideSection
      label="Props Table"
      title="RHFDatepicker props 한눈에 보기"
      description="RHFDatepicker에서 사용하는 RHF 제어 props와 Datepicker 상속 props를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={rhfDatepickerPropsRows}
        note={
          <>
            <span>
              <code>RHFDatepickerProps</code>는 <code>DatepickerProps</code>
              에 RHF의 <code>name</code>, <code>control</code>,{" "}
              <code>rules</code>, <code>defaultValue</code>,{" "}
              <code>shouldUnregister</code>를 합친 구조이고, 실제{" "}
              <code>selected</code> 값은 RHF field state가 직접 관리합니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="RHFDatepicker 타입 보기"
                title="RHFDatepickerProps / RHFComponentProps"
                description="Datepicker wrapper에서 RHF가 selected 값을 관리하도록 조합한 타입입니다."
                code={rhfDatepickerTypeCode}
              />
              <GuideTypeTooltip
                label="DatepickerProps 보기"
                title="DatepickerProps"
                description="RHFDatepicker가 상속하는 기본 Datepicker props 타입입니다."
                code={DATEPICKER_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
