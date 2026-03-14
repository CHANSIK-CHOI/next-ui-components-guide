import { createContext, useContext } from "react";

type RadioGroupContextValue = {
  name?: string;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
};

const RadioGroupContext = createContext<RadioGroupContextValue>({});

export function useRadioGroupContext() {
  return useContext(RadioGroupContext);
}

export default RadioGroupContext;
