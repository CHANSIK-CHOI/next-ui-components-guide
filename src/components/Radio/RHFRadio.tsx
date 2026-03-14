import {
  type FieldPath,
  type FieldValues,
  useController,
} from "react-hook-form";
import {
  type RHFCheckedInputManagedProps,
  type RHFComponentProps,
} from "@/types/rhf";
import Radio, { type RadioProps } from "./Radio";

type RHFRadioValue = NonNullable<RadioProps["value"]>;
type RHFRadioManagedProps = RHFCheckedInputManagedProps | "value";

export type RHFRadioProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = RHFComponentProps<
  TFormValues,
  TFieldName,
  RadioProps,
  RHFRadioManagedProps
> & {
  value: RHFRadioValue;
};

export default function RHFRadio<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
>({
  name,
  control,
  rules,
  defaultValue,
  shouldUnregister,
  disabled = false,
  error = false,
  value,
  ...restRadioProps
}: RHFRadioProps<TFormValues, TFieldName>) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
    shouldUnregister,
    disabled,
  });

  return (
    <Radio
      {...restRadioProps}
      ref={field.ref}
      name={field.name}
      value={value}
      checked={field.value === value}
      disabled={disabled}
      error={Boolean(fieldState.error) || error}
      onBlur={field.onBlur}
      onChange={() => field.onChange(value)}
    />
  );
}
