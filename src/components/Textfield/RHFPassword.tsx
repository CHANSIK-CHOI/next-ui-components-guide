import { useState } from "react";
import { type FieldPath, type FieldValues } from "react-hook-form";
import RHFTextfield, { type RHFTextfieldProps } from "./RHFTextfield";
import TextfieldBtn from "./TextfieldBtn";

export type RHFPasswordProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> = Omit<RHFTextfieldProps<TFormValues, TFieldName>, "children" | "type"> & {
  defaultPasswordVisible?: boolean;
  hidePasswordTitle?: string;
  showPasswordTitle?: string;
};

export default function RHFPassword<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
>({
  defaultPasswordVisible = false,
  hidePasswordTitle = "비밀번호 숨기기",
  showPasswordTitle = "비밀번호 보기",
  onClear,
  disabled = false,
  ...restTextfieldProps
}: RHFPasswordProps<TFormValues, TFieldName>) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(
    defaultPasswordVisible,
  );

  const togglePasswordVisible = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleClear = () => {
    setIsPasswordVisible(false);
    onClear?.();
  };

  return (
    <RHFTextfield
      {...restTextfieldProps}
      type={isPasswordVisible ? "text" : "password"}
      disabled={disabled}
      onClear={handleClear}
    >
      <TextfieldBtn
        icon={isPasswordVisible ? "hidePw" : "showPw"}
        title={isPasswordVisible ? hidePasswordTitle : showPasswordTitle}
        onClick={togglePasswordVisible}
        disabled={disabled}
      />
    </RHFTextfield>
  );
}
