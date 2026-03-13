import {
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
  useController,
} from "react-hook-form";
import DateMultiplePicker, {
  type DateMultiplePickerProps,
} from "./DateMultiplePicker";

export type RHFDateMultiplePickerProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<DateMultiplePickerProps, "selected"> &
  UseControllerProps<TFieldValues, TName>;

export default function RHFDateMultiplePicker<
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
}: RHFDateMultiplePickerProps<TFieldValues, TName>) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
    shouldUnregister,
    disabled,
  });

  const handleSelectedChange = (
    nextSelected: DateMultiplePickerProps["selected"],
  ) => {
    field.onChange(nextSelected);
    onSelectedChange?.(nextSelected);
  };

  return (
    <DateMultiplePicker
      {...restDatepickerProps}
      ref={field.ref}
      name={field.name}
      onBlur={field.onBlur}
      selected={field.value as DateMultiplePickerProps["selected"]}
      onSelectedChange={handleSelectedChange}
      disabled={disabled}
      errorMsg={fieldState.error?.message ?? errorMsg}
    />
  );
}
