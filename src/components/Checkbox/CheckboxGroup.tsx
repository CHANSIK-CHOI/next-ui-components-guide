import cn from "classnames";
import CheckboxGroupContext from "./CheckboxGroup.context";

const nameBlock = "checkbox-group";

export type CheckboxGroupProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "role"
> & {
  children: React.ReactNode;
  name?: string;
  direction?: "row" | "column";
  disabled?: boolean;
  readOnly?: boolean;
  isError?: boolean;
};

export default function CheckboxGroup({
  children,
  className,
  name,
  direction = "column",
  disabled,
  readOnly,
  isError,
  ...rest
}: CheckboxGroupProps) {
  return (
    <CheckboxGroupContext.Provider
      value={{ name, disabled, readOnly, isError }}
    >
      <div
        {...rest}
        role="group"
        className={cn(nameBlock, `${nameBlock}--${direction}`, className)}
      >
        {children}
      </div>
    </CheckboxGroupContext.Provider>
  );
}
