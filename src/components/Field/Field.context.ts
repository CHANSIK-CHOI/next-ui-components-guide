import { createContext, useContext } from "react";

type FieldContextValue = {
  inputId: string | null;
};

const FieldContext = createContext<FieldContextValue>({
  inputId: null,
});

export function useFieldContext() {
  return useContext(FieldContext);
}

export default FieldContext;
