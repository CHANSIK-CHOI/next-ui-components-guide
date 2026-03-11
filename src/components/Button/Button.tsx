import cn from "classnames";
import React from "react";

const nameBlock = "button";

// type ButtonAsLinkProps = ButtonBaseProps &
//   ButtonDesignProps &
//   React.AnchorHTMLAttributes<HTMLAnchorElement> & {
//     as: "link";
//     href: LinkProps["href"];
//   };

// type ButtonLinkRestProps = Omit<
//   ButtonAsLinkProps,
//   "children" | "className" | "size" | "color" | "variant" | "shape" | "as"
// >;

// type ButtonNativeRestProps = Omit<
//   ButtonAsButtonProps,
//   "children" | "className" | "size" | "color" | "variant" | "shape" | "as"
// >;

type ButtonDesignProps =
  | {
      variant?: "solid" | "line";
      shape?: "round" | "square";
      size?: "large" | "medium" | "small";
    }
  | {
      variant: "text";
      shape?: never;
      size?: never;
    };

type ButtonBaseProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  color?: "black" | "primary" | "secondary" | "point";
};

type ButtonProps = ButtonBaseProps &
  ButtonDesignProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonClassNameParams = {
  className?: string;
  size?: "large" | "medium" | "small";
  color?: "black" | "primary" | "secondary" | "point";
  variant?: "solid" | "line" | "text";
  shape?: "round" | "square";
};

function getButtonClassName({
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
    variant !== "text" && shape === "round" && `${nameBlock}--${shape}`,
    size !== "large" && `${nameBlock}--${size}`,
    className,
  );
}

export default function Button({
  children,
  icon,
  className,
  size = "large",
  color = "black",
  variant = "solid",
  shape,
  ...rest
}: ButtonProps) {
  const buttonClassName = getButtonClassName({
    className,
    size,
    color,
    variant,
    shape,
  });

  const contentEl = (
    <span className={cn(`${nameBlock}__wrap`)}>
      {icon && <span className={cn(`${nameBlock}__icon`)}>{icon}</span>}

      {children}
    </span>
  );

  return (
    <button type="button" {...rest} className={buttonClassName}>
      {contentEl}
    </button>
  );
}
