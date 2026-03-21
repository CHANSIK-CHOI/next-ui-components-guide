import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  DATE_MULTIPLE_PICKER_PROPS_CODE,
  DATEPICKER_BASE_PROPS_CODE,
} from "@/components/Guide/datepickerTypeReferences";

const dateMultiplePickerPropsRows: GuidePropsTableRow[] = [
  {
    name: "selected",
    typeLabel: "Date[] | undefined",
    defaultValue: "undefined",
    description: "현재 선택된 날짜 배열입니다.",
  },
  {
    name: "onSelectedChange",
    typeLabel: "(selected: Date[] | undefined) => void",
    defaultValue: "undefined",
    description:
      "날짜를 추가/제거한 뒤 최종 선택 배열을 외부 상태에 반영하는 콜백입니다.",
  },
  {
    name: "dayPickerProps",
    typeLabel: "PropsMulti | PropsMultiRequired",
    defaultValue: "undefined",
    description:
      "복수 선택용 DayPicker 옵션을 전달합니다. min, max, required, disabled 같은 제약도 여기서 설정합니다.",
  },
  {
    name: "displayFormat",
    typeLabel: "string",
    defaultValue: '"yyyy.MM.dd"',
    description:
      "기본 formatDisplayValue가 각 날짜를 input 문자열로 표시할 때 사용하는 포맷입니다.",
  },
  {
    name: "formatDisplayValue",
    typeLabel: "({ displayFormat, locale, selected }) => string",
    defaultValue: "formatMultipleDateValue",
    description:
      "기본 구현은 날짜 배열을 displayFormat 기준으로 포맷한 뒤 `, `로 이어 붙입니다.",
  },
  {
    name: "getDefaultMonth",
    typeLabel: "({ selected }) => Date | undefined",
    defaultValue: "selected?.[0]",
    description:
      "캘린더 기본 월을 첫 번째 선택 날짜 기준으로 계산합니다.",
  },
  {
    name: "shouldCloseOnSelect | getShouldCloseOnSelect",
    typeLabel:
      "boolean | ({ shouldCloseOnSelect, nextSelected }) => boolean",
    defaultValue: "false",
    description:
      "명시하지 않으면 날짜를 선택해도 캘린더가 닫히지 않고, boolean 또는 함수로 닫힘 전략을 바꿀 수 있습니다.",
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
  {
    name: "id | name | autoComplete | aria-* ...",
    typeLabel: "native input props",
    defaultValue: "inherited",
    description:
      "DatepickerBase가 직접 제어하지 않는 native input props는 내부 input에 그대로 전달됩니다.",
  },
];

export default function DateMultiplePickerPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="DateMultiplePicker props 한눈에 보기"
      description="복수 날짜 선택 동작과 Textfield 상속 규칙을 함께 정리했습니다."
    >
      <GuidePropsTable
        rows={dateMultiplePickerPropsRows}
        note={
          <>
            <span>
              <code>DateMultiplePickerProps</code>는{" "}
              <code>
                DatepickerBaseProps&lt;Date[], PropsMulti |
                PropsMultiRequired&gt;
              </code>
              기반이고, 기본 표시 구현은 선택된 날짜 배열을 문자열로 이어 붙여
              input에 보여줍니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="DatepickerBaseProps 보기"
                title="DatepickerBaseProps"
                description="DateMultiplePicker도 공유하는 공통 Textfield 기반 캘린더 wrapper 타입입니다."
                code={DATEPICKER_BASE_PROPS_CODE}
              />
              <GuideTypeTooltip
                label="DateMultiplePickerProps 보기"
                title="DateMultiplePickerProps"
                description="복수 날짜 선택 전용 exported props 타입입니다."
                code={DATE_MULTIPLE_PICKER_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
