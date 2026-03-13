import {
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
  useController,
} from "react-hook-form";
import DateRangePicker, {
  type DateRangePickerProps,
} from "./DateRangePicker";

export type RHFDateRangePickerProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<DateRangePickerProps, "selected"> &
  UseControllerProps<TFieldValues, TName>;

export default function RHFDateRangePicker<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  name,
  control,
  rules,
  defaultValue,
  shouldUnregister,
  disabled = false,
  errorMsg,
  onSelectedChange,
  ...restDatepickerProps
}: RHFDateRangePickerProps<TFieldValues, TName>) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
    shouldUnregister,
    disabled,
  });

  const handleSelectedChange = (
    nextSelected: DateRangePickerProps["selected"],
  ) => {
    field.onChange(nextSelected);
    onSelectedChange?.(nextSelected);
  };

  return (
    <DateRangePicker
      {...restDatepickerProps}
      ref={field.ref}
      name={field.name}
      onBlur={field.onBlur}
      selected={field.value as DateRangePickerProps["selected"]}
      onSelectedChange={handleSelectedChange}
      disabled={disabled}
      errorMsg={fieldState.error?.message ?? errorMsg}
    />
  );
}
