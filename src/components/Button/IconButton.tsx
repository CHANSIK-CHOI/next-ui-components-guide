import React from "react";
import {
  ButtonClassNameParams,
  ButtonProps,
  getButtonClassName,
} from "./Button";
import cn from "classnames";

const nameBlock = "button";

type IconButtonVariant = "solid" | "line";
type IconButtonProps = Omit<ButtonProps, "icon" | "variant"> & {
  variant?: IconButtonVariant;
};

export default function IconButton({
  children,
  className,
  size = "large",
  color = "black",
  variant = "solid",
  shape,
  ...rest
}: IconButtonProps) {
  const buttonClassNameParams: ButtonClassNameParams = {
    className: cn(className, `${nameBlock}--icon`),
    size,
    color,
    variant,
    shape,
  };
  const buttonClassName = getButtonClassName(buttonClassNameParams);

  return (
    <button type="button" {...rest} className={buttonClassName}>
      <span className={cn(`${nameBlock}__wrap`)}>
        <span className={cn(`${nameBlock}__icon`)}>{children}</span>
      </span>
    </button>
  );
}
