import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  DATE_MULTIPLE_PICKER_PROPS_CODE,
  RHF_DATE_MULTIPLE_PICKER_PROPS_CODE,
} from "@/components/Guide/datepickerTypeReferences";
import { RHF_COMPONENT_PROPS_CODE } from "@/components/Guide/rhfTypeReferences";

const rhfDateMultiplePickerPropsRows: GuidePropsTableRow[] = [
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
      "최소 선택 개수나 커스텀 배열 검증 규칙을 useController 규격으로 전달합니다.",
  },
  {
    name: "defaultValue",
    typeLabel: "Date[] | undefined",
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
      "useController와 실제 DateMultiplePicker에 동시에 반영되어 필드 업데이트와 상호작용을 막습니다.",
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
    typeLabel: "(selected: Date[] | undefined) => void",
    defaultValue: "undefined",
    description:
      "field.onChange 이후 추가로 호출되므로 선택 배열 변화에 맞춘 부수효과를 연결할 때 사용합니다.",
  },
  {
    name: "dayPickerProps | displayFormat | shouldCloseOnSelect ...",
    typeLabel: "DateMultiplePicker inherited props",
    defaultValue: "inherited",
    description:
      "RHF가 직접 관리하지 않는 복수 선택 UI props와 캘린더 제어 props는 그대로 전달할 수 있습니다.",
  },
];

export default function RHFDateMultiplePickerPropsTableSection() {
  const rhfDateMultiplePickerTypeCode = `${RHF_COMPONENT_PROPS_CODE}

${RHF_DATE_MULTIPLE_PICKER_PROPS_CODE}`;

  return (
    <GuideSection
      label="Props Table"
      title="RHFDateMultiplePicker props 한눈에 보기"
      description="RHFDateMultiplePicker에서 사용하는 RHF 제어 props와 DateMultiplePicker 상속 props를 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={rhfDateMultiplePickerPropsRows}
        note={
          <>
            <span>
              <code>RHFDateMultiplePickerProps</code>는{" "}
              <code>DateMultiplePickerProps</code>에 RHF 제어 prop을 합친
              구조입니다. 실제 <code>selected</code> 배열은 RHF field state가
              관리하고, 나머지 날짜 표시/캘린더 동작 prop만 직접 전달합니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="RHFDateMultiplePicker 타입 보기"
                title="RHFDateMultiplePickerProps / RHFComponentProps"
                description="DateMultiplePicker wrapper에서 RHF가 selected 배열을 관리하도록 조합한 타입입니다."
                code={rhfDateMultiplePickerTypeCode}
              />
              <GuideTypeTooltip
                label="DateMultiplePickerProps 보기"
                title="DateMultiplePickerProps"
                description="RHFDateMultiplePicker가 상속하는 기본 복수 선택 props 타입입니다."
                code={DATE_MULTIPLE_PICKER_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
