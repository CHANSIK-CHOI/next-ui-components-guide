import {
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
  useController,
} from "react-hook-form";
import Datepicker, { type DatepickerProps } from "./Datepicker";

export type RHFDatepickerProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<DatepickerProps, "selected"> &
  UseControllerProps<TFieldValues, TName>;

export default function RHFDatepicker<
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
}: RHFDatepickerProps<TFieldValues, TName>) {
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
      errorMsg={fieldState.error?.message ?? errorMsg}
    />
  );
}
