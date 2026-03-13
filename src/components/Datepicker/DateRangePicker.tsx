import { forwardRef, useCallback, useEffect, useState } from "react";
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
      isCalendarOpen,
      defaultCalendarOpen = false,
      onCalendarOpenChange,
      formatDisplayValue = formatRangeDateValue,
      getDefaultMonth = getRangeDefaultMonth,
      shouldCloseOnSelect = shouldCloseRangeOnSelect,
      ...restProps
    },
    ref,
  ) => {
    const [draftRange, setDraftRange] = useState<DateRange | undefined>();
    const [uncontrolledIsCalendarOpen, setUncontrolledIsCalendarOpen] =
      useState(defaultCalendarOpen);

    const resolvedIsCalendarOpen =
      isCalendarOpen ?? uncontrolledIsCalendarOpen;

    const resolvedSelected =
      resolvedIsCalendarOpen && draftRange ? draftRange : selected;

    const resolvedDayPickerProps: NonNullable<
      DateRangePickerProps["dayPickerProps"]
    > = {
      ...dayPickerProps,
      min: dayPickerProps?.min ?? 1,
      resetOnSelect: dayPickerProps?.resetOnSelect ?? true,
    };

    const setCalendarOpen = useCallback(
      (nextIsOpen: boolean) => {
        if (isCalendarOpen === undefined) {
          setUncontrolledIsCalendarOpen(nextIsOpen);
        }

        onCalendarOpenChange?.(nextIsOpen);
      },
      [isCalendarOpen, onCalendarOpenChange],
    );

    const handleCalendarOpenChange = useCallback(
      (nextIsOpen: boolean) => {
        if (!nextIsOpen) {
          setDraftRange(undefined);
        }

        setCalendarOpen(nextIsOpen);
      },
      [setCalendarOpen],
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

    useEffect(() => {
      if (!resolvedIsCalendarOpen) {
        setDraftRange(undefined);
      }
    }, [resolvedIsCalendarOpen]);

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
        isCalendarOpen={resolvedIsCalendarOpen}
        onCalendarOpenChange={handleCalendarOpenChange}
      />
    );
  },
);

DateRangePicker.displayName = "DateRangePicker";

export default DateRangePicker;
