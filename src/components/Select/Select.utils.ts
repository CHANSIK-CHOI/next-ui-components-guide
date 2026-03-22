import type {
  GroupBase,
  OptionsOrGroups,
  SelectComponentsConfig,
  StylesConfig,
} from "react-select";
import type {
  MultiSelectValue,
  SelectOption,
  SingleSelectValue,
} from "./Select.types";

const MENU_PORTAL_Z_INDEX = 20;

function isOptionGroup(
  item: SelectOption | GroupBase<SelectOption>,
): item is GroupBase<SelectOption> {
  return Array.isArray((item as GroupBase<SelectOption>).options);
}

function flattenOptions(
  options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>,
) {
  return options.flatMap((item) =>
    isOptionGroup(item) ? [...item.options] : [item],
  );
}

export function getResolvedSingleValue(
  options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>,
  value: SingleSelectValue | undefined,
) {
  const flatOptions = flattenOptions(options);

  return flatOptions.find((option) => option.value === value) ?? null;
}

export function getResolvedMultiValue(
  options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>,
  value: MultiSelectValue | undefined,
) {
  const flatOptions = flattenOptions(options);
  const selectedValues = Array.isArray(value) ? value : [];

  return flatOptions.filter((option) => selectedValues.includes(option.value));
}

export function getResolvedSelectComponents<IsMulti extends boolean>(
  components?: SelectComponentsConfig<SelectOption, IsMulti, GroupBase<SelectOption>>,
): SelectComponentsConfig<SelectOption, IsMulti, GroupBase<SelectOption>> {
  return {
    IndicatorSeparator: null,
    ...components,
  };
}

export function getResolvedSelectStyles<IsMulti extends boolean>(
  styles?: StylesConfig<SelectOption, IsMulti, GroupBase<SelectOption>>,
): StylesConfig<SelectOption, IsMulti, GroupBase<SelectOption>> {
  return {
    ...styles,
    menuPortal: (base, props) => {
      const nextBase = {
        ...base,
        zIndex: MENU_PORTAL_Z_INDEX,
      };

      return styles?.menuPortal ? styles.menuPortal(nextBase, props) : nextBase;
    },
  };
}
