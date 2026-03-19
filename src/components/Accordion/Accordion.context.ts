import { createContext, useContext } from "react";

export type AccordionContextValue = {
  accordionId: string;
  activeIndices: number[];
  shouldKeepMounted: boolean;
  handleToggleItem: (targetIndex: number) => void;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

export function useAccordionContext() {
  const accordionContext = useContext(AccordionContext);

  if (!accordionContext) {
    throw new Error("Accordion compound components must be used within Accordion.");
  }

  return accordionContext;
}

export default AccordionContext;
