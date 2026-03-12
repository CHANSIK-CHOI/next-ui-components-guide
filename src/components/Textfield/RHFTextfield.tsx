import { type ChangeEvent } from "react";
import {
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
  useController,
} from "react-hook-form";
import Textfield, { type TextfieldProps } from "./Textfield";

type RHFTextfieldBaseProps = {
  formatValue?: (value: string) => string;
};

export type RHFTextfieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<
  TextfieldProps,
  "name" | "value" | "defaultValue" | "onChange" | "onBlur"
> &
  RHFTextfieldBaseProps &
  UseControllerProps<TFieldValues, TName>;

export default function RHFTextfield<
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
  formatValue,
  onClear,
  ...restTextfieldProps
}: RHFTextfieldProps<TFieldValues, TName>) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
    shouldUnregister,
    disabled,
  });
  const { ref, ...fieldProps } = field;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = formatValue
      ? formatValue(event.target.value)
      : event.target.value;
    field.onChange(nextValue);
  };

  const handleClear = () => {
    const nextValue = formatValue ? formatValue("") : "";
    field.onChange(nextValue);
    onClear?.();
  };

  return (
    <Textfield
      {...restTextfieldProps}
      {...fieldProps}
      ref={ref}
      value={field.value ?? ""}
      disabled={disabled}
      onChange={handleChange}
      onClear={handleClear}
      errorMsg={fieldState.error?.message ?? errorMsg}
    />
  );
}
