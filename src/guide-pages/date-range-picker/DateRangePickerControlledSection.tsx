import { Button, DateRangePicker } from "@/components";
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
            <br /> - placeholder, infoMsg, errorMsg, readOnly, disabled,
            isClearable 같은 Textfield props를 그대로 사용할 수 있습니다.
            <br /> - selected와 onSelectedChange는 DateRange 형태로 동작하고,
            dayPickerProps는 기간 선택 모드에 맞는 옵션을 전달합니다.
          </>
        }
      >
        <DateRangePicker
          selected={selected}
          onSelectedChange={setSelected}
          isClearable
          infoMsg="입실/퇴실, 시작일/종료일처럼 범위를 선택할 때 사용합니다."
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
          infoMsg={infoMessage}
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
          infoMsg="2일 이상 5일 이하, 주말 제외 범위 선택 예시입니다."
        />
        <DateRangePicker
          selected={requiredRange}
          onSelectedChange={setRequiredRange}
          isClearable
          dayPickerProps={{
            required: true,
            resetOnSelect: true,
          }}
          infoMsg="required 범위는 clear 버튼이 숨겨지고, resetOnSelect로 새 범위를 다시 시작할 수 있습니다."
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
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    return (
      <GuideProp
        isWide
        name="defaultCalendarOpen | isCalendarOpen | onCalendarOpenChange | closeOnSelect"
        typeLabel="boolean | (isOpen: boolean) => void"
        description="기간 선택은 기본적으로 시작일과 종료일이 모두 선택되면 닫히고, 중간 선택 상태에서 닫으면 값이 초기화됩니다. closeOnSelect를 false로 두면 완료 후에도 캘린더를 유지할 수 있습니다."
      >
        <DateRangePicker
          selected={selected}
          onSelectedChange={setSelected}
          defaultCalendarOpen
          infoMsg="초기 렌더에서 캘린더를 열어둔 기간 선택 예시"
        />
        <Button
          color="primary"
          type="button"
          onClick={() => setIsCalendarOpen((prev) => !prev)}
        >
          {isCalendarOpen ? "범위 캘린더 닫기" : "범위 캘린더 열기"}
        </Button>
        <DateRangePicker
          selected={selected}
          onSelectedChange={setSelected}
          isCalendarOpen={isCalendarOpen}
          onCalendarOpenChange={setIsCalendarOpen}
          closeOnSelect={false}
          infoMsg="외부 열림 상태 제어 예시"
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
        name="readOnly | disabled"
        typeLabel="boolean"
        defaultValue="false"
        description="readOnly는 표시 전용 상태로 두고, disabled는 전체 상호작용을 비활성화합니다."
        isWide
      >
        <DateRangePicker
          selected={readOnlyRange}
          readOnly
          isClearable
          infoMsg="readOnly일 때는 캘린더 선택도 막힙니다."
        />
        <DateRangePicker selected={disabledRange} disabled />
      </GuideProp>
    );
  },
);

export default function DateRangePickerControlledSection() {
  return (
    <GuideSection
      label="DateRangePicker"
      title="DateRangePicker / 상태 제어 사용"
      description="DateRangePicker는 시작일과 종료일을 함께 선택하는 기간 선택 전용 컴포넌트입니다. 종료일까지 선택되어야 최종 값이 반영됩니다."
    >
      <DateRangePickerPropsGuideProp />
      <DateRangePickerValueGuideProp />
      <DateRangePickerDayPickerPropsGuideProp />
      <DateRangePickerDisplayGuideProp />
      <DateRangePickerCalendarStateGuideProp />
      <DateRangePickerStateGuideProp />
    </GuideSection>
  );
}
