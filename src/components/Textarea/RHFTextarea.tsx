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
import Textarea, { type TextareaProps } from "./Textarea";

type RHFTextareaBaseProps = {
  formatValue?: (value: string) => string;
};

export type RHFTextareaProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = RHFComponentProps<
  TFormValues,
  TFieldName,
  TextareaProps,
  RHFValueInputManagedProps
> &
  RHFTextareaBaseProps;

export default function RHFTextarea<
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
  formatValue,
  onClear,
  ...restTextareaProps
}: RHFTextareaProps<TFormValues, TFieldName>) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
    shouldUnregister,
    disabled,
  });
  const { ref, ...fieldProps } = field;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
    <Textarea
      {...restTextareaProps}
      {...fieldProps}
      ref={ref}
      value={field.value ?? ""}
      disabled={disabled}
      onChange={handleChange}
      onClear={handleClear}
      errorMessage={fieldState.error?.message ?? errorMessage}
    />
  );
}
