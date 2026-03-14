import { DateMultiplePicker } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { format } from "date-fns";
import { memo, useState } from "react";

const DateMultiplePickerPropsGuideProp = memo(
  function DateMultiplePickerPropsGuideProp() {
    const [selected, setSelected] = useState<Date[] | undefined>([
      new Date(2026, 2, 4),
      new Date(2026, 2, 9),
    ]);

    return (
      <GuideProp
        isWide
        name="Textfield props 확장"
        typeLabel='Omit<TextfieldProps, "children" | "isTextInputBlocked" | "onChange" | "type" | "value"> & { selected?: Date[]; onSelectedChange?: (selected?: Date[]) => void; dayPickerProps?: PropsMulti | PropsMultiRequired; ... }'
        description={
          <>
            - DateMultiplePicker는 복수 날짜 선택을 위한 Textfield 기반
            래퍼입니다.
            <br /> - placeholder, infoMsg, errorMsg, readOnly, disabled,
            isClearable, onClear 같은 Textfield props를 그대로 사용할 수
            있고, selected는 Date[] 형태로 제어합니다.
            <br /> - dayPickerProps에는 복수 선택 모드에 맞는 min, max, required
            같은 옵션을 전달할 수 있습니다.
            <br /> - defaultCalendarOpen, getDefaultMonth,
            shouldCloseOnSelect 같은 캘린더 제어 props도 함께 사용할 수
            있습니다.
          </>
        }
      >
        <DateMultiplePicker
          selected={selected}
          onSelectedChange={setSelected}
          isClearable
          infoMsg="여러 날짜를 태그처럼 선택해야 하는 예약/스케줄 UX에 사용할 수 있습니다."
        />
      </GuideProp>
    );
  },
);

const DateMultiplePickerValueGuideProp = memo(
  function DateMultiplePickerValueGuideProp() {
    const [selected, setSelected] = useState<Date[] | undefined>([
      new Date(2026, 2, 7),
      new Date(2026, 2, 11),
      new Date(2026, 2, 15),
    ]);

    return (
      <GuideProp
        isWide
        name="selected | onSelectedChange"
        typeLabel="Date[] | undefined"
        description="복수 선택 모드는 선택된 날짜 배열을 외부에서 제어합니다."
      >
        <DateMultiplePicker
          selected={selected}
          onSelectedChange={setSelected}
          isClearable
          infoMsg={
            selected?.length
              ? `선택된 날짜 수: ${selected.length}개`
              : "아직 선택된 날짜가 없습니다."
          }
        />
      </GuideProp>
    );
  },
);

const DateMultiplePickerClearGuideProp = memo(
  function DateMultiplePickerClearGuideProp() {
    const [selected, setSelected] = useState<Date[] | undefined>([
      new Date(2026, 2, 4),
      new Date(2026, 2, 10),
      new Date(2026, 2, 18),
    ]);
    const [lastAction, setLastAction] = useState("초기 선택값 유지");

    return (
      <GuideProp
        isWide
        name="isClearable | onClear"
        typeLabel="boolean | () => void"
        description="clear 버튼은 isClearable이 true이고, selected 값이 있으며, dayPickerProps.required/readOnly/disabled가 아닐 때만 노출됩니다. 클릭하면 onSelectedChange(undefined)가 먼저 호출되고, onClear를 전달했다면 그 다음 실행됩니다."
      >
        <DateMultiplePicker
          selected={selected}
          onSelectedChange={(nextSelected) => {
            setSelected(nextSelected);
            setLastAction(
              nextSelected?.length
                ? `마지막 동작: ${nextSelected.length}개 날짜 선택`
                : "마지막 동작: 값 비움",
            );
          }}
          isClearable
          onClear={() => setLastAction("마지막 동작: clear")}
          infoMsg={
            selected?.length
              ? `${lastAction} / clear 버튼으로 복수 선택 값을 비울 수 있습니다.`
              : `${lastAction} / 현재 선택된 날짜가 없습니다.`
          }
        />
      </GuideProp>
    );
  },
);

const DateMultiplePickerDayPickerPropsGuideProp = memo(
  function DateMultiplePickerDayPickerPropsGuideProp() {
    const [limitedDates, setLimitedDates] = useState<Date[] | undefined>([
      new Date(2026, 2, 3),
      new Date(2026, 2, 6),
    ]);
    const [requiredDates, setRequiredDates] = useState<Date[] | undefined>([
      new Date(2026, 2, 21),
      new Date(2026, 2, 23),
    ]);

    return (
      <GuideProp
        isWide
        name="dayPickerProps"
        typeLabel="PropsMulti | PropsMultiRequired"
        description="복수 선택 모드에서는 min, max, required, disabled 같은 옵션을 많이 사용합니다."
      >
        <DateMultiplePicker
          selected={limitedDates}
          onSelectedChange={setLimitedDates}
          isClearable
          dayPickerProps={{
            min: 1,
            max: 4,
            disabled: { dayOfWeek: [0] },
          }}
          infoMsg="최대 4개까지 선택하고, 일요일은 disabled 처리한 예시입니다."
        />
        <DateMultiplePicker
          selected={requiredDates}
          onSelectedChange={setRequiredDates}
          isClearable
          dayPickerProps={{
            required: true,
            min: 2,
          }}
          infoMsg="required 복수 선택은 clear 버튼이 숨겨지고 최소 선택 개수를 유지합니다."
        />
      </GuideProp>
    );
  },
);

const DateMultiplePickerDisplayGuideProp = memo(
  function DateMultiplePickerDisplayGuideProp() {
    const [formattedDates, setFormattedDates] = useState<Date[] | undefined>([
      new Date(2026, 2, 1),
      new Date(2026, 2, 8),
      new Date(2026, 2, 15),
    ]);
    const [customDates, setCustomDates] = useState<Date[] | undefined>([
      new Date(2026, 2, 17),
      new Date(2026, 2, 24),
    ]);

    return (
      <GuideProp
        isWide
        name="displayFormat | formatDisplayValue"
        typeLabel="string | ({ displayFormat, locale, selected }) => string"
        description="복수 날짜 배열을 입력창에 어떻게 표시할지 커스터마이징할 수 있습니다."
      >
        <DateMultiplePicker
          selected={formattedDates}
          onSelectedChange={setFormattedDates}
          displayFormat="yyyy년 MM월 dd일"
          isClearable
        />
        <DateMultiplePicker
          selected={customDates}
          onSelectedChange={setCustomDates}
          isClearable
          formatDisplayValue={({ selected, locale }) =>
            selected?.length
              ? `${selected
                  .map((date) => format(date, "M월 d일", { locale }))
                  .join(" / ")} 방문`
              : ""
          }
        />
      </GuideProp>
    );
  },
);

const DateMultiplePickerCalendarStateGuideProp = memo(
  function DateMultiplePickerCalendarStateGuideProp() {
    const [selected, setSelected] = useState<Date[] | undefined>([
      new Date(2026, 2, 5),
      new Date(2026, 2, 12),
    ]);

    return (
      <GuideProp
        isWide
        name="defaultCalendarOpen | closeOnSelect | calendarButtonTitle | dropdownClassName"
        typeLabel="boolean | string"
        description="복수 선택 모드는 기본적으로 선택 후 닫히지 않습니다. defaultCalendarOpen으로 초기 렌더에서 열어둘 수 있고, closeOnSelect를 true로 넘기면 선택할 때마다 캘린더를 닫도록 바꿀 수 있습니다. calendarButtonTitle과 dropdownClassName으로 캘린더 버튼/래퍼도 제어할 수 있습니다."
      >
        <DateMultiplePicker
          selected={selected}
          onSelectedChange={setSelected}
          defaultCalendarOpen
          calendarButtonTitle="기본 열림 복수 선택 캘린더"
          dropdownClassName="datepicker__dropdown--preview"
          infoMsg="복수 선택 모드의 기본 닫힘 동작은 false이며, defaultCalendarOpen으로 처음부터 열어둘 수 있습니다."
        />
        <DateMultiplePicker
          selected={selected}
          onSelectedChange={setSelected}
          closeOnSelect
          calendarButtonTitle="선택 시 닫히는 복수 선택 캘린더"
          infoMsg="closeOnSelect=true로 선택할 때마다 캘린더를 닫는 예시입니다."
        />
      </GuideProp>
    );
  },
);

const DateMultiplePickerAdvancedCalendarGuideProp = memo(
  function DateMultiplePickerAdvancedCalendarGuideProp() {
    const [defaultMonthDates, setDefaultMonthDates] = useState<
      Date[] | undefined
    >();
    const [customCloseDates, setCustomCloseDates] = useState<Date[] | undefined>(
      [],
    );

    return (
      <GuideProp
        isWide
        name="getDefaultMonth | shouldCloseOnSelect"
        typeLabel='({ selected }) => Date | undefined | ({ closeOnSelect, nextSelected }) => boolean'
        description="getDefaultMonth는 선택값이 없을 때 처음 보여줄 월을 계산하고, shouldCloseOnSelect는 복수 선택 중 캘린더를 닫을지 직접 결정합니다."
      >
        <DateMultiplePicker
          selected={defaultMonthDates}
          onSelectedChange={setDefaultMonthDates}
          defaultCalendarOpen
          getDefaultMonth={({ selected }) => selected?.[0] ?? new Date(2026, 6, 1)}
          calendarButtonTitle="기본 월 커스텀 복수 선택 캘린더"
          infoMsg="selected가 없으면 2026년 7월부터 시작하도록 기본 월을 커스터마이징한 예시입니다."
        />
        <DateMultiplePicker
          selected={customCloseDates}
          onSelectedChange={setCustomCloseDates}
          shouldCloseOnSelect={({ nextSelected }) =>
            Boolean(nextSelected && nextSelected.length >= 3)
          }
          calendarButtonTitle="3개 이상 선택 시 닫힘"
          infoMsg="3개 미만을 선택하면 캘린더를 유지하고, 3개 이상 선택하면 닫히도록 제어한 예시입니다."
        />
      </GuideProp>
    );
  },
);

const DateMultiplePickerStateGuideProp = memo(
  function DateMultiplePickerStateGuideProp() {
    const [readOnlyDates] = useState<Date[] | undefined>([
      new Date(2026, 2, 2),
      new Date(2026, 2, 9),
    ]);
    const [disabledDates] = useState<Date[] | undefined>([
      new Date(2026, 2, 20),
      new Date(2026, 2, 27),
    ]);

    return (
      <GuideProp
        name="readOnly | disabled"
        typeLabel="boolean"
        defaultValue="false"
        description="DateMultiplePicker도 기본적으로 직접 타이핑 입력이 막혀 있고, readOnly는 캘린더 열기, 날짜 변경, clear 버튼까지 막습니다. disabled는 전체 상호작용을 비활성화합니다."
        isWide
      >
        <DateMultiplePicker
          selected={readOnlyDates}
          readOnly
          isClearable
          infoMsg="readOnly 상태에서는 현재 선택만 표시되고 캘린더 선택과 clear가 막힙니다."
        />
        <DateMultiplePicker selected={disabledDates} disabled />
      </GuideProp>
    );
  },
);

export default function DateMultiplePickerControlledSection() {
  return (
    <GuideSection
      label="DateMultiplePicker"
      title="DateMultiplePicker / controlled usage"
      description="DateMultiplePicker는 selected와 onSelectedChange를 외부 상태로 관리하는 controlled usage를 기준으로, 여러 날짜를 배열 형태로 선택하는 복수 선택 전용 컴포넌트입니다."
    >
      <DateMultiplePickerPropsGuideProp />
      <DateMultiplePickerValueGuideProp />
      <DateMultiplePickerClearGuideProp />
      <DateMultiplePickerDayPickerPropsGuideProp />
      <DateMultiplePickerDisplayGuideProp />
      <DateMultiplePickerCalendarStateGuideProp />
      <DateMultiplePickerAdvancedCalendarGuideProp />
      <DateMultiplePickerStateGuideProp />
    </GuideSection>
  );
}
