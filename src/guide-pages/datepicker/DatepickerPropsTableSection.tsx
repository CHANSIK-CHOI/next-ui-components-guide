import {
  GuidePropsTable,
  GuideSection,
  GuideTypeTooltip,
  type GuidePropsTableRow,
} from "@/components/Guide";
import {
  DATEPICKER_BASE_PROPS_CODE,
  DATEPICKER_PROPS_CODE,
} from "@/components/Guide/datepickerTypeReferences";

const datepickerPropsRows: GuidePropsTableRow[] = [
  {
    name: "selected",
    typeLabel: "Date | undefined",
    defaultValue: "undefined",
    description: "현재 선택된 단일 날짜 값입니다.",
  },
  {
    name: "onSelectedChange",
    typeLabel: "(selected: Date | undefined) => void",
    defaultValue: "undefined",
    description:
      "캘린더 선택이나 clear 이후 최종 선택값을 외부 상태에 반영하는 콜백입니다.",
  },
  {
    name: "dayPickerProps",
    typeLabel: "PropsSingle | PropsSingleRequired",
    defaultValue: "undefined",
    description:
      "react-day-picker 단일 선택 옵션을 전달합니다. required, disabled, startMonth, endMonth 같은 제한도 여기서 제어합니다.",
  },
  {
    name: "displayFormat",
    typeLabel: "string",
    defaultValue: '"yyyy.MM.dd"',
    description:
      "기본 formatDisplayValue가 input에 표시할 날짜 문자열 포맷입니다.",
  },
  {
    name: "formatDisplayValue",
    typeLabel: "({ displayFormat, locale, selected }) => string",
    defaultValue: "formatSingleDateValue",
    description:
      "displayFormat보다 더 세밀하게 입력창 표시 문자열을 커스터마이징합니다.",
  },
  {
    name: "getDefaultMonth",
    typeLabel: "({ selected }) => Date | undefined",
    defaultValue: "selected",
    description:
      "캘린더를 처음 열 때 어떤 월을 보여줄지 계산하는 전략 함수입니다.",
  },
  {
    name: "shouldCloseOnSelect | getShouldCloseOnSelect",
    typeLabel:
      "boolean | ({ shouldCloseOnSelect, nextSelected }) => boolean",
    defaultValue: "auto close on selected date",
    description:
      "명시하지 않으면 날짜를 하나 선택한 뒤 자동으로 닫히고, boolean 또는 함수로 닫힘 규칙을 덮어쓸 수 있습니다.",
  },
  {
    name: "defaultIsCalendarOpen",
    typeLabel: "boolean",
    defaultValue: "false",
    description: "초기 렌더에서 캘린더 dropdown을 열어둘지 결정합니다.",
  },
  {
    name: "calendarButtonTitle | dropdownClassName",
    typeLabel: "string",
    defaultValue: "auto title | undefined",
    description:
      "우측 캘린더 버튼 title과 dropdown wrapper 클래스를 커스터마이징합니다.",
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

export default function DatepickerPropsTableSection() {
  return (
    <GuideSection
      label="Props Table"
      title="Datepicker props 한눈에 보기"
      description="단일 날짜 선택에 필요한 핵심 props와 Textfield 상속 규칙을 표로 정리했습니다."
    >
      <GuidePropsTable
        rows={datepickerPropsRows}
        note={
          <>
            <span>
              <code>DatepickerProps</code>는{" "}
              <code>
                DatepickerBaseProps&lt;Date, PropsSingle | PropsSingleRequired&gt;
              </code>
              에서 내부 전략 prop인 <code>mode</code>와 기본 구현 함수를
              optional override 형태로 다시 노출한 타입입니다.
            </span>
            <div className="guidePropsTable__noteActions">
              <GuideTypeTooltip
                label="DatepickerBaseProps 보기"
                title="DatepickerBaseProps"
                description="Datepicker 계열이 공통으로 상속하는 Textfield 기반 캘린더 wrapper 타입입니다."
                code={DATEPICKER_BASE_PROPS_CODE}
              />
              <GuideTypeTooltip
                label="DatepickerProps 보기"
                title="DatepickerProps"
                description="단일 날짜 선택 전용 exported props 타입입니다."
                code={DATEPICKER_PROPS_CODE}
              />
            </div>
          </>
        }
      />
    </GuideSection>
  );
}
