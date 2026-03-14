import cn from "classnames";
import RadioGroupContext from "./RadioGroup.context";

const nameBlock = "radio-group";

export type RadioGroupProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "role"
> & {
  children: React.ReactNode;
  name?: string;
  direction?: "row" | "column";
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
};

export default function RadioGroup({
  children,
  className,
  name,
  direction = "column",
  disabled,
  readOnly,
  error,
  ...rest
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider
      value={{ name, disabled, readOnly, error }}
    >
      <div
        {...rest}
        role="radiogroup"
        className={cn(nameBlock, `${nameBlock}--${direction}`, className)}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}
