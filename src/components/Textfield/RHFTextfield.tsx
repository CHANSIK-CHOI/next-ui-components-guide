import {
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
  useController,
} from "react-hook-form";
import Textfield, { type TextfieldProps } from "./Textfield";

export type RHFTextfieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<
  TextfieldProps,
  "name" | "value" | "defaultValue" | "onChange" | "onBlur"
> &
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

  const handleClear = () => {
    field.onChange("");
    onClear?.();
  };

  return (
    <Textfield
      {...restTextfieldProps}
      {...fieldProps}
      ref={ref}
      value={field.value ?? ""}
      disabled={disabled}
      onClear={handleClear}
      errorMsg={fieldState.error?.message ?? errorMsg}
    />
  );
}
