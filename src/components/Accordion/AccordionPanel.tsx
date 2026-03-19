import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useAccordionContext } from "./Accordion.context";

const nameBlock = "accordion";

const panelVariants = {
  closed: {
    height: 0,
    transitionEnd: {
      visibility: "hidden" as const,
    },
  },
  open: {
    height: "auto",
    visibility: "visible" as const,
  },
};

export type AccordionPanelProps = {
  children: React.ReactNode;
  index: number;
  className?: string;
};

export default function AccordionPanel({
  children,
  index,
  className,
}: AccordionPanelProps) {
  const { accordionId, activeIndices, shouldKeepMounted } =
    useAccordionContext();
  const isItemOpen = activeIndices.includes(index);
  const panelId = `${accordionId}-panel-${index}`;
  const buttonId = `${accordionId}-button-${index}`;

  if (shouldKeepMounted) {
    return (
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isItemOpen}
        className={cn(`${nameBlock}__panel`, className)}
        variants={panelVariants}
        transition={{ duration: 0.05, ease: "linear" }}
        initial={isItemOpen ? "open" : "closed"}
        animate={isItemOpen ? "open" : "closed"}
        style={{
          overflow: "hidden",
          pointerEvents: isItemOpen ? "auto" : "none",
        }}
      >
        <div className={cn(`${nameBlock}__panelBox`)}>{children}</div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence initial={false}>
      {isItemOpen ? (
        <motion.div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className={cn(`${nameBlock}__panel`, className)}
          variants={panelVariants}
          initial="closed"
          animate="open"
          transition={{ duration: 0.05, ease: "linear" }}
          exit="closed"
          style={{ overflow: "hidden" }}
        >
          <div className={cn(`${nameBlock}__panelBox`)}>{children}</div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
