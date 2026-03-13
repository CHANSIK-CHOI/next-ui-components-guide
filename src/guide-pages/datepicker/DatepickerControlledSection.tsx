import { Button, Datepicker } from "@/components";
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
          <br /> - placeholder, infoMsg, errorMsg, isClearable, readOnly,
          disabled 같은 Textfield props를 그대로 사용할 수 있습니다.
          <br /> - selected와 onSelectedChange로 날짜를 제어하고,
          dayPickerProps로 react-day-picker 옵션을 전달합니다.
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
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    return (
      <GuideProp
        isWide
        name="defaultCalendarOpen | isCalendarOpen | onCalendarOpenChange | closeOnSelect | calendarButtonTitle"
        typeLabel="boolean | (isOpen: boolean) => void | string"
        description="캘린더 열림 상태와 닫힘 시점, 버튼 title을 제어합니다. closeOnSelect를 false로 두면 단일 날짜 선택 후에도 캘린더를 유지할 수 있습니다."
      >
        <Datepicker
          selected={selected}
          onSelectedChange={setSelected}
          defaultCalendarOpen
          calendarButtonTitle="기본 열림 예시"
          infoMsg="defaultCalendarOpen으로 초기 렌더에서 캘린더를 열어둘 수 있습니다."
        />
        <Button
          color="primary"
          type="button"
          onClick={() => setIsCalendarOpen((prev) => !prev)}
        >
          {isCalendarOpen ? "캘린더 닫기" : "캘린더 열기"}
        </Button>
        <Datepicker
          selected={selected}
          onSelectedChange={setSelected}
          isCalendarOpen={isCalendarOpen}
          onCalendarOpenChange={setIsCalendarOpen}
          closeOnSelect={false}
          calendarButtonTitle="외부 제어 캘린더"
          infoMsg="isCalendarOpen과 onCalendarOpenChange로 열림 상태를 외부에서 제어합니다."
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
      name="readOnly | disabled | dropdownClassName"
      typeLabel="boolean | string"
      defaultValue="false"
      description="readOnly일 때는 텍스트 입력과 캘린더 날짜 선택이 모두 막히고, disabled는 전체 상호작용을 비활성화합니다. dropdownClassName으로 캘린더 래퍼 class를 추가할 수 있습니다."
      isWide
    >
      <Datepicker
        selected={readOnlyDate}
        readOnly
        isClearable
        infoMsg="readOnly 상태에서는 캘린더 선택도 막힙니다."
      />
      <Datepicker
        selected={disabledDate}
        disabled
        dropdownClassName="datepicker__dropdown--preview"
        infoMsg="disabled 상태 예시"
      />
    </GuideProp>
  );
});

export default function DatepickerControlledSection() {
  return (
    <GuideSection
      label="Datepicker"
      title="Datepicker / 상태 제어 사용"
      description="Datepicker는 단일 날짜 선택에 맞춘 Textfield 기반 캘린더 입력 컴포넌트입니다."
    >
      <DatepickerPropsGuideProp />
      <DatepickerValueGuideProp />
      <DatepickerDisplayGuideProp />
      <DatepickerDayPickerPropsGuideProp />
      <DatepickerCalendarStateGuideProp />
      <DatepickerStateGuideProp />
    </GuideSection>
  );
}
