import {
  type FieldPath,
  type FieldValues,
  useController,
} from "react-hook-form";
import { type RHFComponentProps } from "@/types/rhf";
import DateRangePicker, {
  type DateRangePickerProps,
} from "./DateRangePicker";

export type RHFDateRangePickerProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = RHFComponentProps<
  TFormValues,
  TFieldName,
  DateRangePickerProps,
  "selected"
>;

export default function RHFDateRangePicker<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
>({
  name,
  control,
  rules,
  defaultValue,
  shouldUnregister,
  disabled = false,
  errorMessage,
  onSelectedChange,
  ...restDatepickerProps
}: RHFDateRangePickerProps<TFormValues, TFieldName>) {
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
      errorMessage={fieldState.error?.message ?? errorMessage}
    />
  );
}
