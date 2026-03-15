import { DateRangePicker } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { memo, useState } from "react";
import type { DateRange } from "react-day-picker";

const DateRangePickerPropsGuideProp = memo(
  function DateRangePickerPropsGuideProp() {
    const [selected, setSelected] = useState<DateRange | undefined>({
      from: new Date(2026, 2, 10),
      to: new Date(2026, 2, 12),
    });

    return (
      <GuideProp
        isWide
        name="Textfield props 확장"
        typeLabel='Omit<TextfieldProps, "children" | "isTextInputBlocked" | "onChange" | "type" | "value"> & { selected?: DateRange; onSelectedChange?: (selected?: DateRange) => void; dayPickerProps?: PropsRange | PropsRangeRequired; ... }'
        description={
          <>
            - DateRangePicker는 Textfield props를 확장한 기간 선택 전용
            컴포넌트입니다.
            <br /> - placeholder, infoMessage, errorMessage, readOnly, disabled,
            isClearable, onClear 같은 Textfield props를 그대로 사용할 수
            있습니다.
            <br /> - selected와 onSelectedChange는 DateRange 형태로 동작하고,
            dayPickerProps는 기간 선택 모드에 맞는 옵션을 전달합니다.
            <br /> - defaultIsCalendarOpen, getDefaultMonth,
            getShouldCloseOnSelect 같은 캘린더 제어 props도 함께 사용할 수
            있습니다.
          </>
        }
      >
        <DateRangePicker
          selected={selected}
          onSelectedChange={setSelected}
          isClearable
          infoMessage="입실/퇴실, 시작일/종료일처럼 범위를 선택할 때 사용합니다."
        />
      </GuideProp>
    );
  },
);

const DateRangePickerValueGuideProp = memo(
  function DateRangePickerValueGuideProp() {
    const [selected, setSelected] = useState<DateRange | undefined>({
      from: new Date(2026, 2, 18),
      to: new Date(2026, 2, 22),
    });

    const infoMessage =
      selected?.from && selected?.to
        ? `선택 범위: ${format(selected.from, "yyyy.MM.dd", {
            locale: ko,
          })} - ${format(selected.to, "yyyy.MM.dd", { locale: ko })}`
        : "시작일과 종료일을 순서대로 선택해주세요.";

    return (
      <GuideProp
        isWide
        name="selected | onSelectedChange"
        typeLabel="DateRange | undefined"
        description="기간 값은 { from, to } 형태로 제어합니다. 종료일까지 선택되면 최종 값이 반영되고, 새 범위를 다시 시작하면 기존 값은 비워지며 미완성 범위는 닫힐 때 초기화됩니다."
      >
        <DateRangePicker
          selected={selected}
          onSelectedChange={setSelected}
          isClearable
          infoMessage={infoMessage}
        />
      </GuideProp>
    );
  },
);

const DateRangePickerClearGuideProp = memo(
  function DateRangePickerClearGuideProp() {
    const [selected, setSelected] = useState<DateRange | undefined>({
      from: new Date(2026, 2, 15),
      to: new Date(2026, 2, 18),
    });
    const [lastAction, setLastAction] = useState("초기 범위 유지");

    return (
      <GuideProp
        isWide
        name="isClearable | onClear"
        typeLabel="boolean | () => void"
        description="clear 버튼은 isClearable이 true이고, 표시할 값이 있으며, onClear가 제공되고, dayPickerProps.required/readOnly/disabled가 아닐 때만 노출됩니다. 클릭하면 onSelectedChange(undefined)가 먼저 호출되고, 그 다음 onClear가 실행됩니다."
      >
        <DateRangePicker
          selected={selected}
          onSelectedChange={(nextSelected) => {
            setSelected(nextSelected);

            if (nextSelected?.from && nextSelected.to) {
              setLastAction(
                `마지막 범위: ${format(nextSelected.from, "yyyy.MM.dd", {
                  locale: ko,
                })} - ${format(nextSelected.to, "yyyy.MM.dd", {
                  locale: ko,
                })}`,
              );
            }
          }}
          isClearable
          onClear={() => setLastAction("마지막 동작: clear")}
          infoMessage={
            selected?.from && selected.to
              ? `${lastAction} / clear 버튼으로 범위를 비울 수 있습니다.`
              : `${lastAction} / 현재 확정된 기간이 없습니다.`
          }
        />
      </GuideProp>
    );
  },
);

const DateRangePickerDayPickerPropsGuideProp = memo(
  function DateRangePickerDayPickerPropsGuideProp() {
    const [limitedRange, setLimitedRange] = useState<DateRange | undefined>({
      from: new Date(2026, 2, 11),
      to: new Date(2026, 2, 14),
    });
    const [requiredRange, setRequiredRange] = useState<DateRange | undefined>({
      from: new Date(2026, 2, 20),
      to: new Date(2026, 2, 24),
    });

    return (
      <GuideProp
        isWide
        name="dayPickerProps"
        typeLabel="PropsRange | PropsRangeRequired"
        description={
          <>
            기간 선택 모드에서 min, max, excludeDisabled, resetOnSelect,
            required, disabled 같은 옵션을 전달할 수 있습니다.
            <br /> 아래 예시는 최소/최대 기간과 주말 비활성화 처리, required
            범위를 함께 보여줍니다.
          </>
        }
      >
        <DateRangePicker
          selected={limitedRange}
          onSelectedChange={setLimitedRange}
          isClearable
          dayPickerProps={{
            min: 2,
            max: 5,
            excludeDisabled: true,
            disabled: { dayOfWeek: [0, 6] },
          }}
          infoMessage="2일 이상 5일 이하, 주말 제외 범위 선택 예시입니다."
        />
        <DateRangePicker
          selected={requiredRange}
          onSelectedChange={setRequiredRange}
          isClearable
          dayPickerProps={{
            required: true,
            resetOnSelect: true,
          }}
          infoMessage="required 범위는 clear 버튼이 숨겨지고, resetOnSelect로 새 범위를 다시 시작할 수 있습니다."
        />
      </GuideProp>
    );
  },
);

const DateRangePickerDisplayGuideProp = memo(
  function DateRangePickerDisplayGuideProp() {
    const [formattedRange, setFormattedRange] = useState<DateRange | undefined>(
      {
        from: new Date(2026, 2, 3),
        to: new Date(2026, 2, 5),
      },
    );
    const [customRange, setCustomRange] = useState<DateRange | undefined>({
      from: new Date(2026, 2, 27),
      to: new Date(2026, 2, 30),
    });

    return (
      <GuideProp
        isWide
        name="displayFormat | formatDisplayValue"
        typeLabel="string | ({ displayFormat, locale, selected }) => string"
        description="기간 선택 값도 입력창 표시 문자열을 원하는 형식으로 바꿀 수 있습니다."
      >
        <DateRangePicker
          selected={formattedRange}
          onSelectedChange={setFormattedRange}
          displayFormat="yyyy년 MM월 dd일"
          isClearable
        />
        <DateRangePicker
          selected={customRange}
          onSelectedChange={setCustomRange}
          isClearable
          formatDisplayValue={({ selected, locale }) => {
            if (!selected?.from) return "";
            if (!selected.to) {
              return `${format(selected.from, "M월 d일", { locale })} 체크인`;
            }

            return `${format(selected.from, "M월 d일", {
              locale,
            })} - ${format(selected.to, "M월 d일", { locale })} 숙박`;
          }}
        />
      </GuideProp>
    );
  },
);

const DateRangePickerCalendarStateGuideProp = memo(
  function DateRangePickerCalendarStateGuideProp() {
    const [selected, setSelected] = useState<DateRange | undefined>({
      from: new Date(2026, 2, 8),
      to: new Date(2026, 2, 10),
    });

    return (
      <GuideProp
        isWide
        name="defaultIsCalendarOpen | shouldCloseOnSelect | calendarButtonTitle | dropdownClassName"
        typeLabel="boolean | string"
        description="기간 선택은 기본적으로 시작일과 종료일이 모두 선택되면 닫히고, 중간 선택 상태에서 닫으면 값이 초기화됩니다. defaultIsCalendarOpen은 내부 열림 상태의 초기값이고, shouldCloseOnSelect를 false로 두면 완료 후에도 캘린더를 유지할 수 있습니다. calendarButtonTitle과 dropdownClassName으로 캘린더 버튼/래퍼를 제어할 수 있습니다."
      >
        <DateRangePicker
          selected={selected}
          onSelectedChange={setSelected}
          defaultIsCalendarOpen
          calendarButtonTitle="기본 열림 범위 캘린더"
          dropdownClassName="datepicker__dropdown--preview"
          infoMessage="defaultIsCalendarOpen, calendarButtonTitle, dropdownClassName을 함께 사용한 예시입니다."
        />
        <DateRangePicker
          selected={selected}
          onSelectedChange={setSelected}
          shouldCloseOnSelect={false}
          calendarButtonTitle="선택 후 유지 범위 캘린더"
          infoMessage="shouldCloseOnSelect=false로 완료 후에도 캘린더를 유지하는 예시입니다."
        />
      </GuideProp>
    );
  },
);

const DateRangePickerAdvancedCalendarGuideProp = memo(
  function DateRangePickerAdvancedCalendarGuideProp() {
    const [defaultMonthRange, setDefaultMonthRange] = useState<
      DateRange | undefined
    >();
    const [customCloseRange, setCustomCloseRange] = useState<
      DateRange | undefined
    >();

    return (
      <GuideProp
        isWide
        name="getDefaultMonth | getShouldCloseOnSelect"
        typeLabel='({ selected }) => Date | undefined | ({ shouldCloseOnSelect, nextSelected }) => boolean'
        description="getDefaultMonth는 선택값이 없을 때 처음 보여줄 월을 계산하고, getShouldCloseOnSelect는 범위 선택 진행 중/완료 후 캘린더를 닫을지 직접 결정합니다."
      >
        <DateRangePicker
          selected={defaultMonthRange}
          onSelectedChange={setDefaultMonthRange}
          defaultIsCalendarOpen
          getDefaultMonth={({ selected }) =>
            selected?.from ?? selected?.to ?? new Date(2026, 6, 1)
          }
          calendarButtonTitle="기본 월 커스텀 범위 캘린더"
          infoMessage="selected가 없으면 2026년 7월부터 시작하도록 기본 월을 커스터마이징한 예시입니다."
        />
        <DateRangePicker
          selected={customCloseRange}
          onSelectedChange={setCustomCloseRange}
          getShouldCloseOnSelect={({ nextSelected }) =>
            Boolean(
              nextSelected?.from &&
                nextSelected?.to &&
                nextSelected.to.getDate() >= 20,
            )
          }
          calendarButtonTitle="종료일 20일 이후면 닫힘"
          infoMessage="종료일이 20일 미만이면 완료 범위를 선택해도 캘린더를 유지하고, 20일 이후면 닫히도록 제어한 예시입니다."
        />
      </GuideProp>
    );
  },
);

const DateRangePickerStateGuideProp = memo(
  function DateRangePickerStateGuideProp() {
    const [readOnlyRange] = useState<DateRange | undefined>({
      from: new Date(2026, 2, 14),
      to: new Date(2026, 2, 16),
    });
    const [disabledRange] = useState<DateRange | undefined>({
      from: new Date(2026, 2, 25),
      to: new Date(2026, 2, 27),
    });

    return (
      <GuideProp
        name="disabled | readOnly"
        typeLabel="boolean"
        defaultValue="false"
        description="DateRangePicker도 기본적으로 직접 타이핑 입력이 막혀 있고, disabled는 전체 상호작용을 비활성화합니다. readOnly는 현재 기간만 표시하면서 캘린더 열기, 기간 변경, clear 버튼을 막습니다."
        isWide
      >
        <DateRangePicker selected={disabledRange} disabled />
        <DateRangePicker
          selected={readOnlyRange}
          readOnly
          isClearable
          infoMessage="readOnly 상태에서는 현재 기간만 표시되고 캘린더 선택과 clear가 막힙니다."
        />
      </GuideProp>
    );
  },
);

export default function DateRangePickerControlledSection() {
  return (
    <GuideSection
      label="DateRangePicker"
      title="DateRangePicker / controlled usage"
      description="DateRangePicker는 selected와 onSelectedChange를 외부 상태로 관리하는 controlled usage를 기준으로, 시작일과 종료일을 함께 선택하는 기간 선택 전용 컴포넌트입니다. 종료일까지 선택되어야 최종 값이 반영됩니다."
    >
      <DateRangePickerPropsGuideProp />
      <DateRangePickerValueGuideProp />
      <DateRangePickerClearGuideProp />
      <DateRangePickerDayPickerPropsGuideProp />
      <DateRangePickerDisplayGuideProp />
      <DateRangePickerCalendarStateGuideProp />
      <DateRangePickerAdvancedCalendarGuideProp />
      <DateRangePickerStateGuideProp />
    </GuideSection>
  );
}
