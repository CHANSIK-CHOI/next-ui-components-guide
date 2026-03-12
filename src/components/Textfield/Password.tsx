import { forwardRef, useState } from "react";
import Textfield, { type TextfieldProps } from "./Textfield";
import TextfieldBtn from "./TextfieldBtn";

type PasswordProps = Omit<TextfieldProps, "children" | "type"> & {
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

    return (
      <Textfield
        {...restTextfieldProps}
        ref={ref}
        type={isPasswordVisible ? "text" : "password"}
        disabled={disabled}
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
