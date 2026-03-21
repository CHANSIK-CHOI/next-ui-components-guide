export const DATEPICKER_BASE_PROPS_CODE = `type DatepickerMode = "single" | "multiple" | "range";

type DayPickerSelectionShape = {
  className?: string;
  defaultMonth?: Date;
  disabled?: DayPickerProps["disabled"];
  locale?: DayPickerProps["locale"];
  navLayout?: DayPickerProps["navLayout"];
  onSelect?: unknown;
  required?: boolean;
  showOutsideDays?: boolean;
};

type DayPickerBasePassThroughProps = Omit<
  DayPickerProps,
  "mode" | "onSelect" | "required" | "selected"
>;

export type DatepickerDayPickerProps<TProps extends DayPickerSelectionShape> =
  TProps extends unknown
    ? DayPickerBasePassThroughProps &
        Omit<TProps, "mode" | "onSelect" | "selected"> & {
          onSelect?: TProps["onSelect"];
        }
    : never;

export type DatepickerBaseProps<
  TSelected,
  TDayPickerProps extends DayPickerSelectionShape,
> = Omit<
  TextfieldProps,
  "children" | "isTextInputBlocked" | "onChange" | "type" | "value"
> & {
  mode: DatepickerMode;
  selected?: TSelected | undefined;
  onSelectedChange?: (selected: TSelected | undefined) => void;
  dayPickerProps?: DatepickerDayPickerProps<TDayPickerProps>;
  displayFormat?: string;
  formatDisplayValue: (options: {
    displayFormat: string;
    locale: Locale;
    selected: TSelected | undefined;
  }) => string;
  getDefaultMonth: (options: {
    selected: TSelected | undefined;
  }) => Date | undefined;
  getShouldCloseOnSelect: (options: {
    shouldCloseOnSelect: boolean | undefined;
    nextSelected: TSelected | undefined;
  }) => boolean;
  calendarButtonTitle?: string;
  shouldCloseOnSelect?: boolean;
  defaultIsCalendarOpen?: boolean;
  dropdownClassName?: string;
  inputRef?: Ref<HTMLInputElement>;
};`;

export const DATEPICKER_PROPS_CODE = `export type DatepickerProps = Omit<
  DatepickerBaseProps<Date, PropsSingle | PropsSingleRequired>,
  "formatDisplayValue" | "getDefaultMonth" | "mode" | "getShouldCloseOnSelect"
> & {
  formatDisplayValue?: DatepickerBaseProps<
    Date,
    PropsSingle | PropsSingleRequired
  >["formatDisplayValue"];
  getDefaultMonth?: DatepickerBaseProps<
    Date,
    PropsSingle | PropsSingleRequired
  >["getDefaultMonth"];
  getShouldCloseOnSelect?: DatepickerBaseProps<
    Date,
    PropsSingle | PropsSingleRequired
  >["getShouldCloseOnSelect"];
};`;

export const DATE_RANGE_PICKER_PROPS_CODE = `export type DateRangePickerProps = Omit<
  DatepickerBaseProps<DateRange, PropsRange | PropsRangeRequired>,
  "formatDisplayValue" | "getDefaultMonth" | "mode" | "getShouldCloseOnSelect"
> & {
  formatDisplayValue?: DatepickerBaseProps<
    DateRange,
    PropsRange | PropsRangeRequired
  >["formatDisplayValue"];
  getDefaultMonth?: DatepickerBaseProps<
    DateRange,
    PropsRange | PropsRangeRequired
  >["getDefaultMonth"];
  getShouldCloseOnSelect?: DatepickerBaseProps<
    DateRange,
    PropsRange | PropsRangeRequired
  >["getShouldCloseOnSelect"];
};`;

export const DATE_MULTIPLE_PICKER_PROPS_CODE = `export type DateMultiplePickerProps = Omit<
  DatepickerBaseProps<Date[], PropsMulti | PropsMultiRequired>,
  "formatDisplayValue" | "getDefaultMonth" | "mode" | "getShouldCloseOnSelect"
> & {
  formatDisplayValue?: DatepickerBaseProps<
    Date[],
    PropsMulti | PropsMultiRequired
  >["formatDisplayValue"];
  getDefaultMonth?: DatepickerBaseProps<
    Date[],
    PropsMulti | PropsMultiRequired
  >["getDefaultMonth"];
  getShouldCloseOnSelect?: DatepickerBaseProps<
    Date[],
    PropsMulti | PropsMultiRequired
  >["getShouldCloseOnSelect"];
};`;

export const RHF_DATEPICKER_PROPS_CODE = `export type RHFDatepickerProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = RHFComponentProps<TFormValues, TFieldName, DatepickerProps, "selected">;`;

export const RHF_DATE_RANGE_PICKER_PROPS_CODE = `export type RHFDateRangePickerProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = RHFComponentProps<
  TFormValues,
  TFieldName,
  DateRangePickerProps,
  "selected"
>;`;

export const RHF_DATE_MULTIPLE_PICKER_PROPS_CODE = `export type RHFDateMultiplePickerProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = RHFComponentProps<
  TFormValues,
  TFieldName,
  DateMultiplePickerProps,
  "selected"
>;`;
