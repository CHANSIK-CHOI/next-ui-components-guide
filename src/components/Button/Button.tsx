import cn from "classnames";
import React from "react";

const nameBlock = "button";

export type ButtonSize = "large" | "medium" | "small";
export type ButtonColor = "black" | "primary" | "secondary" | "point";
export type ButtonVariant = "solid" | "line" | "text";
export type ButtonShape = "round" | "square";

export type ButtonDesignProps =
  | {
      variant?: Exclude<ButtonVariant, "text">;
      shape?: ButtonShape;
      size?: ButtonSize;
    }
  | {
      variant: "text";
      shape?: never;
      size?: never;
    };

export type ButtonBaseProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  color?: ButtonColor;
};

export type ButtonProps = ButtonBaseProps &
  ButtonDesignProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonClassNameParams = {
  className?: string;
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  shape?: ButtonShape;
};

export function getButtonClassName({
  className,
  size = "large",
  color = "black",
  variant = "solid",
  shape = "square",
}: ButtonClassNameParams) {
  return cn(
    nameBlock,
    color !== "black" && `${nameBlock}--${color}`,
    variant !== "solid" && `${nameBlock}--${variant}`,
    variant !== "text" && shape !== "square" && `${nameBlock}--${shape}`,
    size !== "large" && `${nameBlock}--${size}`,
    className,
  );
}

type ButtonContentElementParams = {
  icon: ButtonBaseProps["icon"];
  children: ButtonBaseProps["children"];
};

export function getButtonContentElement({
  icon,
  children,
}: ButtonContentElementParams) {
  return (
    <span className={cn(`${nameBlock}__wrap`)}>
      {icon && <span className={cn(`${nameBlock}__icon`)}>{icon}</span>}

      {children}
    </span>
  );
}

export default function Button({
  children,
  icon,
  className,
  size = "large",
  color = "black",
  variant = "solid",
  shape = "square",
  ...rest
}: ButtonProps) {
  const buttonClassNameParams: ButtonClassNameParams = {
    className,
    size,
    color,
    variant,
    shape,
  };
  const buttonClassName = getButtonClassName(buttonClassNameParams);
  const buttonContentElement = getButtonContentElement({ icon, children });

  return (
    <button type="button" {...rest} className={buttonClassName}>
      {buttonContentElement}
    </button>
  );
}
