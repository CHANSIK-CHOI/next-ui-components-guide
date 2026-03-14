import { Datepicker } from "@/components";
import { GuideProp, GuideSection } from "@/components/Guide";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { memo, useState } from "react";

const DatepickerPropsGuideProp = memo(function DatepickerPropsGuideProp() {
  const [selected, setSelected] = useState<Date | undefined>(
    new Date(2026, 2, 13),
  );

  return (
    <GuideProp
      isWide
      name="Textfield props 확장"
      typeLabel='Omit<TextfieldProps, "children" | "isTextInputBlocked" | "onChange" | "type" | "value"> & { selected?: Date; onSelectedChange?: (selected?: Date) => void; dayPickerProps?: PropsSingle | PropsSingleRequired; ... }'
      description={
        <>
          - Datepicker는 Textfield props를 확장한 단일 날짜 선택 컴포넌트입니다.
          <br /> - placeholder, infoMsg, errorMsg, isClearable, onClear,
          readOnly, disabled 같은 Textfield props를 그대로 사용할 수 있습니다.
          <br /> - selected와 onSelectedChange로 날짜를 제어하고,
          dayPickerProps로 react-day-picker 옵션을 전달합니다.
          <br /> - defaultCalendarOpen, getDefaultMonth,
          shouldCloseOnSelect 같은 캘린더 제어 props도 함께 사용할 수
          있습니다.
        </>
      }
    >
      <Datepicker
        selected={selected}
        onSelectedChange={setSelected}
        placeholder="날짜를 선택해주세요"
        isClearable
        infoMsg="Textfield props를 유지한 채 단일 날짜 선택 UI를 제공합니다."
      />
    </GuideProp>
  );
});

const DatepickerValueGuideProp = memo(function DatepickerValueGuideProp() {
  const [selected, setSelected] = useState<Date | undefined>(
    new Date(2026, 2, 20),
  );

  return (
    <GuideProp
      isWide
      name="selected | onSelectedChange"
      typeLabel="Date | undefined"
      description="선택된 날짜와 변경 핸들러를 외부에서 제어하는 상태 제어 패턴입니다."
    >
      <Datepicker
        selected={selected}
        onSelectedChange={setSelected}
        isClearable
        infoMsg={
          selected
            ? `선택된 날짜: ${format(selected, "yyyy.MM.dd", { locale: ko })}`
            : "아직 날짜가 선택되지 않았습니다."
        }
      />
    </GuideProp>
  );
});

const DatepickerClearGuideProp = memo(function DatepickerClearGuideProp() {
  const [selected, setSelected] = useState<Date | undefined>(
    new Date(2026, 2, 22),
  );
  const [lastAction, setLastAction] = useState("초기 선택값 유지");

  return (
    <GuideProp
      isWide
      name="isClearable | onClear"
      typeLabel="boolean | () => void"
      description="clear 버튼은 isClearable이 true이고, selected 값이 있으며, onClear가 제공되고, dayPickerProps.required/readOnly/disabled가 아닐 때만 노출됩니다. 클릭하면 onSelectedChange(undefined)가 먼저 호출되고, 그 다음 onClear가 실행됩니다."
    >
      <Datepicker
        selected={selected}
        onSelectedChange={(nextSelected) => {
          setSelected(nextSelected);

          if (nextSelected) {
            setLastAction(
              `마지막 동작: ${format(nextSelected, "yyyy.MM.dd", {
                locale: ko,
              })} 선택`,
            );
          }
        }}
        isClearable
        onClear={() => setLastAction("마지막 동작: clear")}
        infoMsg={
          selected
            ? `${lastAction} / clear 버튼으로 값을 비울 수 있습니다.`
            : `${lastAction} / 현재 선택된 날짜가 없습니다.`
        }
      />
    </GuideProp>
  );
});

const DatepickerDisplayGuideProp = memo(function DatepickerDisplayGuideProp() {
  const [formattedDate, setFormattedDate] = useState<Date | undefined>(
    new Date(2026, 2, 10),
  );
  const [customDate, setCustomDate] = useState<Date | undefined>(
    new Date(2026, 2, 24),
  );

  return (
    <GuideProp
      isWide
      name="displayFormat | formatDisplayValue"
      typeLabel="string | ({ displayFormat, locale, selected }) => string"
      description="입력창에 표시할 날짜 문자열 포맷을 제어합니다. formatDisplayValue를 사용하면 displayFormat보다 더 자유롭게 표시 텍스트를 바꿀 수 있습니다."
    >
      <Datepicker
        selected={formattedDate}
        onSelectedChange={setFormattedDate}
        displayFormat="yyyy년 MM월 dd일"
        isClearable
      />
      <Datepicker
        selected={customDate}
        onSelectedChange={setCustomDate}
        formatDisplayValue={({ selected, locale }) =>
          selected
            ? `${format(selected, "M월 d일 (EEE)", { locale })} 예약`
            : ""
        }
        placeholder="커스텀 표시 포맷"
        isClearable
      />
    </GuideProp>
  );
});

const DatepickerDayPickerPropsGuideProp = memo(
  function DatepickerDayPickerPropsGuideProp() {
    const [limitedDate, setLimitedDate] = useState<Date | undefined>(
      new Date(2026, 2, 12),
    );
    const [weekdayDate, setWeekdayDate] = useState<Date | undefined>(
      new Date(2026, 2, 18),
    );
    const [requiredDate, setRequiredDate] = useState<Date | undefined>(
      new Date(2026, 2, 8),
    );

    return (
      <GuideProp
        isWide
        name="dayPickerProps"
        typeLabel="PropsSingle | PropsSingleRequired"
        description={
          <>
            dayPickerProps로 DayPicker 선택 props와 기본 옵션을 함께 전달할 수
            있습니다.
            <br /> 아래 예시는 startMonth, endMonth, disabled, required를
            사용하는 경우입니다.
          </>
        }
      >
        <Datepicker
          selected={limitedDate}
          onSelectedChange={setLimitedDate}
          isClearable
          dayPickerProps={{
            startMonth: new Date(2026, 1, 1),
            endMonth: new Date(2026, 1, 28),
            disabled: [
              { before: new Date(2026, 1, 1) },
              { after: new Date(2026, 1, 28) },
            ],
          }}
          infoMsg="2026년 2월 안에서만 선택할 수 있습니다."
        />
        <Datepicker
          selected={weekdayDate}
          onSelectedChange={setWeekdayDate}
          isClearable
          dayPickerProps={{
            disabled: { dayOfWeek: [0, 6] },
          }}
          infoMsg="주말은 disabled 처리한 예시입니다."
        />
        <Datepicker
          selected={requiredDate}
          onSelectedChange={setRequiredDate}
          isClearable
          dayPickerProps={{
            required: true,
          }}
          infoMsg="required일 때는 clear 버튼이 노출되지 않습니다."
        />
      </GuideProp>
    );
  },
);

const DatepickerCalendarStateGuideProp = memo(
  function DatepickerCalendarStateGuideProp() {
    const [selected, setSelected] = useState<Date | undefined>(
      new Date(2026, 2, 15),
    );

    return (
      <GuideProp
        isWide
        name="defaultCalendarOpen | closeOnSelect | calendarButtonTitle | dropdownClassName"
        typeLabel="boolean | string"
        description="defaultCalendarOpen은 내부 열림 상태의 초기값입니다. closeOnSelect를 false로 두면 단일 날짜 선택 후에도 캘린더를 유지할 수 있고, calendarButtonTitle과 dropdownClassName으로 버튼 title과 캘린더 래퍼를 제어할 수 있습니다."
      >
        <Datepicker
          selected={selected}
          onSelectedChange={setSelected}
          defaultCalendarOpen
          calendarButtonTitle="기본 열림 예시"
          dropdownClassName="datepicker__dropdown--preview"
          infoMsg="defaultCalendarOpen과 dropdownClassName을 함께 사용한 예시입니다."
        />
        <Datepicker
          selected={selected}
          onSelectedChange={setSelected}
          closeOnSelect={false}
          calendarButtonTitle="선택 후 유지 캘린더"
          infoMsg="closeOnSelect=false로 선택 후에도 캘린더를 유지합니다."
        />
      </GuideProp>
    );
  },
);

const DatepickerAdvancedCalendarGuideProp = memo(
  function DatepickerAdvancedCalendarGuideProp() {
    const [defaultMonthDate, setDefaultMonthDate] = useState<Date | undefined>();
    const [customCloseDate, setCustomCloseDate] = useState<Date | undefined>();

    return (
      <GuideProp
        isWide
        name="getDefaultMonth | shouldCloseOnSelect"
        typeLabel='({ selected }) => Date | undefined | ({ closeOnSelect, nextSelected }) => boolean'
        description="getDefaultMonth는 선택값이 없을 때 처음 보여줄 월을 계산하고, shouldCloseOnSelect는 날짜 선택 후 캘린더를 닫을지 직접 결정합니다."
      >
        <Datepicker
          selected={defaultMonthDate}
          onSelectedChange={setDefaultMonthDate}
          defaultCalendarOpen
          getDefaultMonth={({ selected }) => selected ?? new Date(2026, 6, 1)}
          calendarButtonTitle="기본 월 커스텀 예시"
          infoMsg="selected가 없으면 2026년 7월부터 시작하도록 기본 월을 커스터마이징한 예시입니다."
        />
        <Datepicker
          selected={customCloseDate}
          onSelectedChange={setCustomCloseDate}
          shouldCloseOnSelect={({ nextSelected }) =>
            Boolean(nextSelected && nextSelected.getDate() >= 15)
          }
          calendarButtonTitle="15일 이후 선택 시 닫힘"
          infoMsg="15일 미만 날짜를 선택하면 캘린더를 유지하고, 15일 이후 날짜를 선택하면 닫히도록 제어한 예시입니다."
        />
      </GuideProp>
    );
  },
);

const DatepickerStateGuideProp = memo(function DatepickerStateGuideProp() {
  const [readOnlyDate] = useState<Date | undefined>(new Date(2026, 2, 5));
  const [disabledDate] = useState<Date | undefined>(new Date(2026, 2, 28));

  return (
    <GuideProp
      name="readOnly | disabled"
      typeLabel="boolean"
      defaultValue="false"
      description="Datepicker는 기본적으로 직접 타이핑 입력이 막혀 있고, readOnly일 때는 캘린더 열기, 날짜 변경, clear 버튼까지 모두 막힙니다. disabled는 전체 상호작용을 비활성화합니다."
      isWide
    >
      <Datepicker
        selected={readOnlyDate}
        readOnly
        isClearable
        infoMsg="readOnly 상태에서는 표시만 유지되고 캘린더 선택과 clear가 막힙니다."
      />
      <Datepicker
        selected={disabledDate}
        disabled
        infoMsg="disabled 상태 예시"
      />
    </GuideProp>
  );
});

export default function DatepickerControlledSection() {
  return (
    <GuideSection
      label="Datepicker"
      title="Datepicker / controlled usage"
      description="Datepicker는 단일 날짜 선택에 맞춘 Textfield 기반 캘린더 입력 컴포넌트입니다."
    >
      <DatepickerPropsGuideProp />
      <DatepickerValueGuideProp />
      <DatepickerClearGuideProp />
      <DatepickerDisplayGuideProp />
      <DatepickerDayPickerPropsGuideProp />
      <DatepickerCalendarStateGuideProp />
      <DatepickerAdvancedCalendarGuideProp />
      <DatepickerStateGuideProp />
    </GuideSection>
  );
}
