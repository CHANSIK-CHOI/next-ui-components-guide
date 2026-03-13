import { forwardRef } from "react";
import {
  type PropsSingle,
  type PropsSingleRequired,
} from "react-day-picker";
import DatepickerBase, {
  type DatepickerBaseProps,
} from "./DatepickerBase";
import {
  formatSingleDateValue,
  getSingleDefaultMonth,
  shouldCloseSingleOnSelect,
} from "./Datepicker.utils";

type DatepickerDayPickerProps = PropsSingle | PropsSingleRequired;

type DatepickerBaseSingleProps = DatepickerBaseProps<
  Date,
  DatepickerDayPickerProps
>;

export type DatepickerProps = Omit<
  DatepickerBaseSingleProps,
  "formatDisplayValue" | "getDefaultMonth" | "mode" | "shouldCloseOnSelect"
> & {
  formatDisplayValue?: DatepickerBaseSingleProps["formatDisplayValue"];
  getDefaultMonth?: DatepickerBaseSingleProps["getDefaultMonth"];
  shouldCloseOnSelect?: DatepickerBaseSingleProps["shouldCloseOnSelect"];
};

const Datepicker = forwardRef<HTMLInputElement, DatepickerProps>(
  (
    {
      formatDisplayValue = formatSingleDateValue,
      getDefaultMonth = getSingleDefaultMonth,
      shouldCloseOnSelect = shouldCloseSingleOnSelect,
      ...restProps
    },
    ref,
  ) => {
    return (
      <DatepickerBase
        {...restProps}
        inputRef={ref}
        mode="single"
        formatDisplayValue={formatDisplayValue}
        getDefaultMonth={getDefaultMonth}
        shouldCloseOnSelect={shouldCloseOnSelect}
      />
    );
  },
);

Datepicker.displayName = "Datepicker";

export default Datepicker;
