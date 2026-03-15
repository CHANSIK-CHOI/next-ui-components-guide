import { createContext, useContext } from "react";

type CheckboxGroupContextValue = {
  name?: string;
  disabled?: boolean;
  readOnly?: boolean;
  isError?: boolean;
};

const CheckboxGroupContext = createContext<CheckboxGroupContextValue>({});

export function useCheckboxGroupContext() {
  return useContext(CheckboxGroupContext);
}

export default CheckboxGroupContext;
