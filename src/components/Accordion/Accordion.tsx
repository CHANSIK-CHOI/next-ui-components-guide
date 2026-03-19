import cn from "classnames";
import { useId, useState } from "react";
import AccordionButton from "./AccordionButton";
import AccordionContext from "./Accordion.context";
import AccordionHead from "./AccordionHead";
import AccordionItem from "./AccordionItem";
import AccordionPanel from "./AccordionPanel";

const nameBlock = "accordion";

export type AccordionType = "single" | "multiple";
export type AccordionVariant = "box" | "line";

export type AccordionProps = {
  children: React.ReactNode;
  type?: AccordionType;
  className?: string;
  activeIndices?: number[];
  defaultActiveIndices?: number[];
  variant?: AccordionVariant;
  onChange?: (nextActiveIndices: number[]) => void;
  shouldKeepMounted?: boolean;
};

function getResolvedActiveIndices({
  type,
  activeIndices = [],
}: {
  type: AccordionType;
  activeIndices?: number[];
}) {
  const uniqueActiveIndices = Array.from(
    new Set(activeIndices.filter(Number.isInteger)),
  );

  return type === "single"
    ? uniqueActiveIndices.slice(0, 1)
    : uniqueActiveIndices;
}

function AccordionRoot({
  children,
  type = "multiple",
  className,
  activeIndices,
  defaultActiveIndices = [],
  variant = "box",
  onChange,
  shouldKeepMounted = false,
}: AccordionProps) {
  const accordionId = useId();
  const isControlled = activeIndices !== undefined;
  const [uncontrolledActiveIndices, setUncontrolledActiveIndices] = useState(
    () =>
      getResolvedActiveIndices({
        type,
        activeIndices: defaultActiveIndices,
      }),
  );

  const resolvedActiveIndices = getResolvedActiveIndices({
    type,
    activeIndices: isControlled ? activeIndices : uncontrolledActiveIndices,
  });

  const handleToggleItem = (targetIndex: number) => {
    const isItemOpen = resolvedActiveIndices.includes(targetIndex);
    let nextActiveIndices: number[];

    if (type === "single") {
      nextActiveIndices = isItemOpen ? [] : [targetIndex];
    } else {
      nextActiveIndices = isItemOpen
        ? resolvedActiveIndices.filter((index) => index !== targetIndex)
        : [...resolvedActiveIndices, targetIndex];
    }

    if (!isControlled) {
      setUncontrolledActiveIndices(nextActiveIndices);
    }

    onChange?.(nextActiveIndices);
  };

  return (
    <AccordionContext.Provider
      value={{
        accordionId,
        activeIndices: resolvedActiveIndices,
        shouldKeepMounted,
        handleToggleItem,
      }}
    >
      <div
        className={cn(nameBlock, className, {
          [`${nameBlock}--box`]: variant === "box",
          [`${nameBlock}--line`]: variant === "line",
        })}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

type AccordionComponent = typeof AccordionRoot & {
  Item: typeof AccordionItem;
  Button: typeof AccordionButton;
  Panel: typeof AccordionPanel;
  Head: typeof AccordionHead;
};

const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Button: AccordionButton,
  Panel: AccordionPanel,
  Head: AccordionHead,
}) as AccordionComponent;

export default Accordion;
