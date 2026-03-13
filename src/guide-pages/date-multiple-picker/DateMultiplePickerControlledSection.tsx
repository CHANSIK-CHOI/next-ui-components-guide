import { Button, DateMultiplePicker } from "@/components";
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
            <br /> - Textfield props를 그대로 사용할 수 있고, selected는 Date[]
            형태로 제어합니다.
            <br /> - dayPickerProps에는 복수 선택 모드에 맞는 min, max, required
            같은 옵션을 전달할 수 있습니다.
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
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    return (
      <GuideProp
        isWide
        name="defaultCalendarOpen | isCalendarOpen | onCalendarOpenChange | closeOnSelect"
        typeLabel="boolean | (isOpen: boolean) => void"
        description="복수 선택 모드는 기본적으로 선택 후 닫히지 않습니다. closeOnSelect를 true로 넘기면 선택할 때마다 캘린더를 닫도록 바꿀 수 있습니다."
      >
        <DateMultiplePicker
          selected={selected}
          onSelectedChange={setSelected}
          defaultCalendarOpen
          infoMsg="복수 선택 모드의 기본 닫힘 동작은 false입니다."
        />
        <Button
          color="primary"
          type="button"
          onClick={() => setIsCalendarOpen((prev) => !prev)}
        >
          {isCalendarOpen
            ? "복수 선택 캘린더 닫기"
            : "복수 선택 캘린더 열기"}
        </Button>
        <DateMultiplePicker
          selected={selected}
          onSelectedChange={setSelected}
          isCalendarOpen={isCalendarOpen}
          onCalendarOpenChange={setIsCalendarOpen}
          closeOnSelect
          infoMsg="외부 열림 상태 + closeOnSelect=true 예시"
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
        description="readOnly는 선택값 표시만 유지하고, disabled는 전체 상호작용을 막습니다."
        isWide
      >
        <DateMultiplePicker
          selected={readOnlyDates}
          readOnly
          isClearable
          infoMsg="readOnly일 때는 복수 선택도 막힙니다."
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
      title="DateMultiplePicker / 상태 제어 사용"
      description="DateMultiplePicker는 여러 날짜를 배열 형태로 선택하는 복수 선택 전용 컴포넌트입니다."
    >
      <DateMultiplePickerPropsGuideProp />
      <DateMultiplePickerValueGuideProp />
      <DateMultiplePickerDayPickerPropsGuideProp />
      <DateMultiplePickerDisplayGuideProp />
      <DateMultiplePickerCalendarStateGuideProp />
      <DateMultiplePickerStateGuideProp />
    </GuideSection>
  );
}
