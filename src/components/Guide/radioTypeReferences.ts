export const RADIO_BASE_PROPS_CODE = `type RadioBaseProps = {
  id?: string;
  className?: string;
  isError?: boolean;
  readOnly?: boolean;
};`;

export const RHF_RADIO_MANAGED_PROPS_CODE = `type RHFRadioValue = NonNullable<RadioProps["value"]>;
type RHFRadioManagedProps = RHFCheckedInputManagedProps | "value";`;
