import type React from "react";
import Link from "next/link";

import {
  type ButtonBaseProps,
  type ButtonClassNameParams,
  type ButtonDesignProps,
  getButtonClassName,
  setButtonWrapEl,
} from "./Button";

type ButtonLinkNativeProps = Omit<
  React.ComponentProps<typeof Link>,
  "children" | "className"
>;

type ButtonLinkProps = ButtonBaseProps &
  ButtonDesignProps &
  ButtonLinkNativeProps;

export default function ButtonLink({
  children,
  icon,
  className,
  size = "large",
  color = "black",
  variant = "solid",
  shape,
  ...rest
}: ButtonLinkProps) {
  const buttonClassNameParams: ButtonClassNameParams = {
    className,
    size,
    color,
    variant,
    shape,
  };

  const buttonClassName = getButtonClassName(buttonClassNameParams);
  const buttonWrapEl = setButtonWrapEl({ icon, children });
  return (
    <Link {...rest} className={buttonClassName}>
      {buttonWrapEl}
    </Link>
  );
}
