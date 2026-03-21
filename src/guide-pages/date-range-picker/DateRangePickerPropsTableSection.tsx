import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  DATEPICKER_BASE_PROPS_CODE,
  DATE_RANGE_PICKER_PROPS_CODE,
} from "@/components/Guide/datepickerTypeReferences";

const dateRangePickerPropsRows: GuidePropsTableRow[] = [
  {
    name: "selected",
    typeLabel: "DateRange | undefined",
    defaultValue: "undefined",
    description:
      "확정된 기간 값입니다. 캘린더가 열려 있는 동안의 미완성 범위는 내부 draft로 유지되고, 외부에는 from/to가 모두 있을 때만 반영됩니다.",
  },
  {
    name: "onSelectedChange",
    typeLabel: "(selected: DateRange | undefined) => void",
    defaultValue: "undefined",
    description:
      "완성된 범위를 선택했을 때 최종 기간을 전달하고, 새 범위를 다시 시작하면 undefined로 초기화합니다.",
  },
  {
    name: "dayPickerProps",
    typeLabel: "PropsRange | PropsRangeRequired",
    defaultValue: "undefined",
    description:
      "기간 선택용 DayPicker 옵션을 전달합니다. min, max, excludeDisabled, required, disabled 같은 제약도 여기서 설정합니다.",
  },
  {
    name: "dayPickerProps.min | resetOnSelect",
    typeLabel: "number | boolean",
    defaultValue: "1 | true",
    description:
      "명시하지 않으면 최소 1박 기준으로 동작하고, 새 범위를 시작할 때 기존 범위를 다시 선택하도록 resetOnSelect가 켜집니다.",
  },
  {
    name: "displayFormat",
    typeLabel: "string",
    defaultValue: '"yyyy.MM.dd"',
    description:
      "기본 formatDisplayValue가 input에 표시할 시작일/종료일 문자열 포맷입니다.",
  },
  {
    name: "formatDisplayValue",
    typeLabel: "({ displayFormat, locale, selected }) => string",
    defaultValue: "formatRangeDateValue",
    description:
      "완성 전 범위는 `from -` 형태로, 완성 후에는 `from - to` 형태로 표시하는 기본 구현을 교체할 수 있습니다.",
  },
  {
    name: "getDefaultMonth",
    typeLabel: "({ selected }) => Date | undefined",
    defaultValue: "selected.from ?? selected.to",
    description:
      "캘린더 기본 월을 범위의 시작일 또는 종료일 기준으로 계산합니다.",
  },
  {
    name: "shouldCloseOnSelect | getShouldCloseOnSelect",
    typeLabel:
      "boolean | ({ shouldCloseOnSelect, nextSelected }) => boolean",
    defaultValue: "auto close on complete range",
    description:
      "명시하지 않으면 from/to가 모두 선택된 시점에만 닫히고, boolean 또는 함수로 닫힘 전략을 바꿀 수 있습니다.",
  },
  {
    name: "defaultIsCalendarOpen | calendarButtonTitle | dropdownClassName",
    typeLabel: "boolean | string",
    defaultValue: "false | auto title | undefined",
    description:
      "초기 열림 상태와 우측 캘린더 버튼 title, dropdown wrapper 클래스명을 함께 제어합니다.",
  },
  {
    name: "placeholder | infoMessage | errorMessage | isClearable | onClear",
    typeLabel: "Textfield inherited props",
    defaultValue: "inherited",
    description:
      "Textfield의 입력 표시, 메시지, clear UI 규칙을 그대로 상속합니다. required/readOnly/disabled에서는 clear 버튼이 숨겨집니다.",
  },
];

export default function DateRangePickerPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="DateRangePicker props 한눈에 보기"
      description="기간 선택 전용 동작과 Textfield 상속 규칙을 함께 정리했습니다."
    >
      <GuidePropsTable
        rows={dateRangePickerPropsRows}
        note={
          <>
            <span>
              <code>DateRangePickerProps</code>는{" "}
              <code>
                DatepickerBaseProps&lt;DateRange, PropsRange |
                PropsRangeRequired&gt;
              </code>
              기반이고, 캘린더가 열린 동안의 미완성 범위는 내부 draft state로
              보관한 뒤 완료된 범위만 외부 <code>selected</code>에 확정합니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="DatepickerBaseProps 보기"
                title="DatepickerBaseProps"
                description="DateRangePicker도 공유하는 공통 Textfield 기반 캘린더 wrapper 타입입니다."
                code={DATEPICKER_BASE_PROPS_CODE}
              />
              <GuideTypeTooltip
                label="DateRangePickerProps 보기"
                title="DateRangePickerProps"
                description="기간 선택 전용 exported props 타입입니다."
                code={DATE_RANGE_PICKER_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
