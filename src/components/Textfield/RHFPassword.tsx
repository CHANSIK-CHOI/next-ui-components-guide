import { useState } from "react";
import { type FieldPath, type FieldValues } from "react-hook-form";
import RHFTextfield, { type RHFTextfieldProps } from "./RHFTextfield";
import TextfieldBtn from "./TextfieldBtn";

export type RHFPasswordProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<RHFTextfieldProps<TFieldValues, TName>, "children" | "type"> & {
  defaultPasswordVisible?: boolean;
  hidePasswordTitle?: string;
  showPasswordTitle?: string;
};

export default function RHFPassword<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  defaultPasswordVisible = false,
  hidePasswordTitle = "비밀번호 숨기기",
  showPasswordTitle = "비밀번호 보기",
  onClear,
  disabled = false,
  ...restTextfieldProps
}: RHFPasswordProps<TFieldValues, TName>) {
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
