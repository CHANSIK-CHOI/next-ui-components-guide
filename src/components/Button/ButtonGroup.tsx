import cn from "classnames";

const nameBlock = "buttonGroup";

type ButtonGroupProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonGroupItemProps = {
  children: React.ReactNode;
  className?: string;
  shouldAutoWidth?: boolean;
};

type ButtonGroupComponent = ((props: ButtonGroupProps) => React.ReactNode) & {
  Item: typeof ButtonGroupItem;
};

function ButtonGroupItem({
  children,
  className,
  shouldAutoWidth = false,
}: ButtonGroupItemProps) {
  return (
    <div
      className={cn(`${nameBlock}__item`, className, {
        [`${nameBlock}__item--wAuto`]: shouldAutoWidth,
      })}
    >
      {children}
    </div>
  );
}

const ButtonGroup: ButtonGroupComponent = function ButtonGroup({
  children,
  className,
}: ButtonGroupProps) {
  return (
    <div className={cn(nameBlock, className)}>
      <div className={cn(`${nameBlock}__wrap`)}>{children}</div>
    </div>
  );
};

ButtonGroup.Item = ButtonGroupItem;

export default ButtonGroup;
