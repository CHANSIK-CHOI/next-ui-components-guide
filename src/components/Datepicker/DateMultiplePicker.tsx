import { forwardRef } from "react";
import {
  type PropsMulti,
  type PropsMultiRequired,
} from "react-day-picker";
import DatepickerBase, {
  type DatepickerBaseProps,
} from "./DatepickerBase";
import {
  formatMultipleDateValue,
  getMultipleDefaultMonth,
  shouldCloseMultipleOnSelect,
} from "./Datepicker.utils";

type DateMultiplePickerDayPickerProps = PropsMulti | PropsMultiRequired;

type DateMultiplePickerBaseProps = DatepickerBaseProps<
  Date[],
  DateMultiplePickerDayPickerProps
>;

export type DateMultiplePickerProps = Omit<
  DateMultiplePickerBaseProps,
  "formatDisplayValue" | "getDefaultMonth" | "mode" | "shouldCloseOnSelect"
> & {
  formatDisplayValue?: DateMultiplePickerBaseProps["formatDisplayValue"];
  getDefaultMonth?: DateMultiplePickerBaseProps["getDefaultMonth"];
  shouldCloseOnSelect?: DateMultiplePickerBaseProps["shouldCloseOnSelect"];
};

const DateMultiplePicker = forwardRef<
  HTMLInputElement,
  DateMultiplePickerProps
>(
  (
    {
      formatDisplayValue = formatMultipleDateValue,
      getDefaultMonth = getMultipleDefaultMonth,
      shouldCloseOnSelect = shouldCloseMultipleOnSelect,
      ...restProps
    },
    ref,
  ) => {
    return (
      <DatepickerBase
        {...restProps}
        inputRef={ref}
        mode="multiple"
        formatDisplayValue={formatDisplayValue}
        getDefaultMonth={getDefaultMonth}
        shouldCloseOnSelect={shouldCloseOnSelect}
      />
    );
  },
);

DateMultiplePicker.displayName = "DateMultiplePicker";

export default DateMultiplePicker;
