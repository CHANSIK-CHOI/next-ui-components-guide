import { forwardRef, useState } from "react";
import Textfield, { type TextfieldProps } from "./Textfield";
import TextfieldBtn from "./TextfieldBtn";

export type PasswordProps = Omit<TextfieldProps, "children" | "type"> & {
  defaultPasswordVisible?: boolean;
  hidePasswordTitle?: string;
  showPasswordTitle?: string;
};

const Password = forwardRef<HTMLInputElement, PasswordProps>(
  (
    {
      defaultPasswordVisible = false,
      hidePasswordTitle = "비밀번호 숨기기",
      showPasswordTitle = "비밀번호 보기",
      onClear,
      disabled = false,
      ...restTextfieldProps
    },
    ref,
  ) => {
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
      <Textfield
        {...restTextfieldProps}
        ref={ref}
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
      </Textfield>
    );
  },
);

Password.displayName = "Password";

export default Password;
