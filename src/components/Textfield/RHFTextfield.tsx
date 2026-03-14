import { type ChangeEvent } from "react";
import {
  type FieldPath,
  type FieldValues,
  useController,
} from "react-hook-form";
import {
  type RHFComponentProps,
  type RHFValueInputManagedProps,
} from "@/types/rhf";
import Textfield, { type TextfieldProps } from "./Textfield";

type RHFTextfieldBaseProps = {
  formatValue?: (value: string) => string;
};

export type RHFTextfieldProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = RHFComponentProps<
  TFormValues,
  TFieldName,
  TextfieldProps,
  RHFValueInputManagedProps
> &
  RHFTextfieldBaseProps &
  {};

export default function RHFTextfield<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
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
}: RHFTextfieldProps<TFormValues, TFieldName>) {
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
