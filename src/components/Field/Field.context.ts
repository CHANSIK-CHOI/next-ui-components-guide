import { createContext, useContext } from "react";

type FieldContextValue = {
  inputId: string | null;
  labelId: string | null;
  describedByIds: string[];
  isError: boolean;
  registerDescription?: (id: string) => () => void;
  registerMessage?: (id: string) => () => void;
};

const FieldContext = createContext<FieldContextValue>({
  inputId: null,
  labelId: null,
  describedByIds: [],
  isError: false,
});

export function useFieldContext() {
  return useContext(FieldContext);
}

export function getMergedAriaIds(
  ...ids: Array<string | null | undefined>
) {
  const resolvedIds = Array.from(new Set(ids.filter(Boolean)));

  return resolvedIds.length > 0 ? resolvedIds.join(" ") : undefined;
}

export default FieldContext;
