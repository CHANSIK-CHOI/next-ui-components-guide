import cn from "classnames";
import { useAccordionContext } from "./Accordion.context";

const nameBlock = "accordion";

export type AccordionItemProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  index: number;
};

export default function AccordionItem({
  children,
  index,
  className,
  ...rest
}: AccordionItemProps) {
  const { activeIndices } = useAccordionContext();
  const isItemOpen = activeIndices.includes(index);

  return (
    <div
      {...rest}
      className={cn(`${nameBlock}__item`, className, isItemOpen && "is-active")}
    >
      {children}
    </div>
  );
}
