import { type ChangeEvent } from "react";
import {
  type FieldPath,
  type FieldValues,
  useController,
} from "react-hook-form";
import {
  type RHFCheckedInputManagedProps,
  type RHFComponentProps,
} from "@/types/rhf";
import Checkbox, { type CheckboxProps } from "./Checkbox";

export type RHFCheckboxProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = RHFComponentProps<
  TFormValues,
  TFieldName,
  CheckboxProps,
  RHFCheckedInputManagedProps
>;

export default function RHFCheckbox<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
>({
  name,
  control,
  rules,
  defaultValue,
  shouldUnregister,
  disabled = false,
  isError = false,
  ...restCheckboxProps
}: RHFCheckboxProps<TFormValues, TFieldName>) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
    shouldUnregister,
    disabled,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    field.onChange(event.target.checked);
  };

  return (
    <Checkbox
      {...restCheckboxProps}
      ref={field.ref}
      name={field.name}
      checked={Boolean(field.value)}
      disabled={disabled}
      isError={Boolean(fieldState.error) || isError}
      onBlur={field.onBlur}
      onChange={handleChange}
    />
  );
}
