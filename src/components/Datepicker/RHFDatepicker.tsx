import {
  type FieldPath,
  type FieldValues,
  useController,
} from "react-hook-form";
import { type RHFComponentProps } from "@/types/rhf";
import Datepicker, { type DatepickerProps } from "./Datepicker";

export type RHFDatepickerProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = RHFComponentProps<TFormValues, TFieldName, DatepickerProps, "selected">;

export default function RHFDatepicker<
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
}: RHFDatepickerProps<TFormValues, TFieldName>) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
    shouldUnregister,
    disabled,
  });

  const handleSelectedChange = (nextSelected: DatepickerProps["selected"]) => {
    field.onChange(nextSelected);
    onSelectedChange?.(nextSelected);
  };

  return (
    <Datepicker
      {...restDatepickerProps}
      ref={field.ref}
      name={field.name}
      onBlur={field.onBlur}
      selected={field.value as DatepickerProps["selected"]}
      onSelectedChange={handleSelectedChange}
      disabled={disabled}
      errorMessage={fieldState.error?.message ?? errorMessage}
    />
  );
}
