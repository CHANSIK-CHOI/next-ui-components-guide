import {
  type FieldPath,
  type FieldValues,
  useController,
} from "react-hook-form";
import { type RHFComponentProps } from "@/types/rhf";
import DateMultiplePicker, {
  type DateMultiplePickerProps,
} from "./DateMultiplePicker";

export type RHFDateMultiplePickerProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = RHFComponentProps<
  TFormValues,
  TFieldName,
  DateMultiplePickerProps,
  "selected"
>;

export default function RHFDateMultiplePicker<
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
}: RHFDateMultiplePickerProps<TFormValues, TFieldName>) {
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
      errorMessage={fieldState.error?.message ?? errorMessage}
    />
  );
}
