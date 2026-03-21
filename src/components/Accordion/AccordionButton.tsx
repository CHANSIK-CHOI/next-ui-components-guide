import cn from "classnames";
import { type MouseEvent } from "react";
import { useAccordionContext } from "./Accordion.context";

const nameBlock = "accordion";

export type AccordionButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "onClick" | "id"
> & {
  children: React.ReactNode;
  index: number;
  onClick?: (index: number, event: MouseEvent<HTMLButtonElement>) => void;
};

export default function AccordionButton({
  children,
  index,
  className,
  onClick,
  "aria-controls": ariaControls,
  "aria-expanded": ariaExpanded,
  ...rest
}: AccordionButtonProps) {
  const { accordionId, activeIndices, shouldKeepMounted, handleToggleItem } =
    useAccordionContext();
  const isItemOpen = activeIndices.includes(index);
  const panelId = `${accordionId}-panel-${index}`;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    handleToggleItem(index);
    onClick?.(index, event);
  };

  return (
    <button
      {...rest}
      type="button"
      id={`${accordionId}-button-${index}`}
      className={cn(`${nameBlock}__button`, className)}
      aria-controls={
        ariaControls ?? (shouldKeepMounted || isItemOpen ? panelId : undefined)
      }
      aria-expanded={ariaExpanded ?? isItemOpen}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
