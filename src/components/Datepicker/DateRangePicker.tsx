import { forwardRef, useCallback, useState } from "react";
import {
  type DateRange,
  type PropsRange,
  type PropsRangeRequired,
} from "react-day-picker";
import DatepickerBase, {
  type DatepickerBaseProps,
} from "./DatepickerBase";
import {
  formatRangeDateValue,
  getRangeDefaultMonth,
  shouldCloseRangeOnSelect,
} from "./Datepicker.utils";

type DateRangePickerDayPickerProps = PropsRange | PropsRangeRequired;

type DateRangePickerBaseProps = DatepickerBaseProps<
  DateRange,
  DateRangePickerDayPickerProps
>;

export type DateRangePickerProps = Omit<
  DateRangePickerBaseProps,
  "formatDisplayValue" | "getDefaultMonth" | "mode" | "shouldCloseOnSelect"
> & {
  formatDisplayValue?: DateRangePickerBaseProps["formatDisplayValue"];
  getDefaultMonth?: DateRangePickerBaseProps["getDefaultMonth"];
  shouldCloseOnSelect?: DateRangePickerBaseProps["shouldCloseOnSelect"];
};

function isCompleteDateRange(
  value: DateRange | undefined,
): value is DateRange & { from: Date; to: Date } {
  return Boolean(value?.from && value?.to);
}

const DateRangePicker = forwardRef<HTMLInputElement, DateRangePickerProps>(
  (
    {
      selected,
      onSelectedChange,
      dayPickerProps,
      defaultCalendarOpen = false,
      formatDisplayValue = formatRangeDateValue,
      getDefaultMonth = getRangeDefaultMonth,
      shouldCloseOnSelect = shouldCloseRangeOnSelect,
      ...restProps
    },
    ref,
  ) => {
    // 캘린더가 열려 있는 동안에는 아직 확정되지 않은 기간 선택 상태를 로컬에
    // 보관해서, { from, to }가 모두 정해지기 전의 중간 선택도 UI에 보여줍니다.
    const [draftRange, setDraftRange] = useState<DateRange | undefined>();
    const [isDropdownOpen, setIsDropdownOpen] = useState(defaultCalendarOpen);

    const resolvedSelected = isDropdownOpen && draftRange ? draftRange : selected;

    const resolvedDayPickerProps: NonNullable<
      DateRangePickerProps["dayPickerProps"]
    > = {
      ...dayPickerProps,
      min: dayPickerProps?.min ?? 1,
      resetOnSelect: dayPickerProps?.resetOnSelect ?? true,
    };

    const handleOpenStateChange = useCallback(
      (nextIsOpen: boolean) => {
        if (!nextIsOpen) {
          setDraftRange(undefined);
        }

        setIsDropdownOpen(nextIsOpen);
      },
      [],
    );

    const handleSelectedChange = useCallback(
      (nextSelected: DateRange | undefined) => {
        if (!nextSelected) {
          setDraftRange(undefined);
          onSelectedChange?.(undefined);
          return;
        }

        setDraftRange(nextSelected);

        if (isCompleteDateRange(nextSelected)) {
          onSelectedChange?.(nextSelected);
          return;
        }

        onSelectedChange?.(undefined);
      },
      [onSelectedChange],
    );

    return (
      <DatepickerBase
        {...restProps}
        inputRef={ref}
        mode="range"
        selected={resolvedSelected}
        onSelectedChange={handleSelectedChange}
        dayPickerProps={resolvedDayPickerProps}
        formatDisplayValue={formatDisplayValue}
        getDefaultMonth={getDefaultMonth}
        shouldCloseOnSelect={shouldCloseOnSelect}
        defaultCalendarOpen={defaultCalendarOpen}
        onOpenStateChange={handleOpenStateChange}
      />
    );
  },
);

DateRangePicker.displayName = "DateRangePicker";

export default DateRangePicker;
