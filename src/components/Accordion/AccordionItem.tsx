import cn from "classnames";
import { motion, type HTMLMotionProps } from "framer-motion";
import { motionTransition } from "@/utils/motion";
import { useAccordionContext } from "./Accordion.context";

const nameBlock = "accordion";

export type AccordionItemProps = HTMLMotionProps<"div"> & {
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
    <motion.div
      {...rest}
      transition={{ layout: motionTransition.panel }}
      className={cn(`${nameBlock}__item`, className, isItemOpen && "is-active")}
    >
      {children}
    </motion.div>
  );
}
