import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

export type RHFComponentProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
  TComponentProps,
  TManagedProps extends PropertyKey = never,
> = Omit<TComponentProps, TManagedProps> &
  UseControllerProps<TFormValues, TFieldName>;

export type RHFCheckedInputManagedProps =
  | "checked"
  | "defaultChecked"
  | "defaultValue"
  | "name"
  | "onBlur"
  | "onChange";

export type RHFValueInputManagedProps =
  | "name"
  | "value"
  | "defaultValue"
  | "onBlur"
  | "onChange";
