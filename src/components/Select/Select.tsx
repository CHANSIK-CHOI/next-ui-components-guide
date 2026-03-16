import { forwardRef, useId } from "react";
import type {
  ActionMeta,
  GroupBase,
  SelectInstance,
  SingleValue,
} from "react-select";
import ReactSelect from "react-select";
import { useFieldContext } from "../Field/Field.context";
import SelectBase, { SELECT_CLASS_NAME } from "./SelectBase";
import {
  getResolvedSelectComponents,
  getResolvedSelectStyles,
  getResolvedSingleValue,
} from "./Select.utils";
import type {
  SelectOption,
  SelectOptionValue,
  SelectSharedProps,
  SingleSelectValue,
} from "./Select.types";

export type {
  SelectOption,
  SelectOptionValue,
  SingleSelectValue as SelectValue,
};

export type SelectProps = SelectSharedProps<false> & {
  value?: SingleSelectValue;
  onChange?: (
    nextValue: SingleSelectValue,
    selectedOption: SingleValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>,
  ) => void;
};

// 단일 선택은 value가 primitive 하나라는 사실만 이해하면 되도록 유지합니다.
const Select = forwardRef<
  SelectInstance<SelectOption, false, GroupBase<SelectOption>>,
  SelectProps
>(
  (
    {
      id,
      className,
      name,
      value = null,
      options,
      placeholder = "항목을 선택해주세요",
      disabled = false,
      readOnly = false,
      isError = false,
      infoMessage = "",
      errorMessage = "",
      onChange,
      components,
      styles,
      isSearchable = false,
      isClearable = false,
      noOptionsMessage = () => "선택 가능한 항목이 없습니다.",
      menuIsOpen,
      menuPosition,
      openMenuOnClick,
      openMenuOnFocus,
      backspaceRemovesValue,
      escapeClearsValue,
      tabSelectsValue,
      ...rest
    },
    ref,
  ) => {
    const { inputId: fieldContextId } = useFieldContext();
    const generatedId = useId();
    const resolvedId = id ?? fieldContextId ?? generatedId;
    const resolvedValue = getResolvedSingleValue(options, value);
    const resolvedIsError = isError || Boolean(errorMessage);

    const handleChange = (
      nextOption: SingleValue<SelectOption>,
      actionMeta: ActionMeta<SelectOption>,
    ) => {
      if (readOnly) {
        return;
      }

      onChange?.(nextOption?.value ?? null, nextOption, actionMeta);
    };

    return (
      <SelectBase
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        isError={resolvedIsError}
        infoMessage={infoMessage}
        errorMessage={errorMessage}
      >
        <ReactSelect<SelectOption, false, GroupBase<SelectOption>>
          {...rest}
          ref={ref}
          inputId={resolvedId}
          instanceId={resolvedId}
          className={`${SELECT_CLASS_NAME}__container`}
          classNamePrefix={SELECT_CLASS_NAME}
          unstyled
          name={name}
          value={resolvedValue}
          options={options}
          placeholder={placeholder}
          isDisabled={disabled}
          isSearchable={!readOnly && !disabled && isSearchable}
          isClearable={!readOnly && !disabled && isClearable}
          isMulti={false}
          onChange={handleChange}
          components={getResolvedSelectComponents(components)}
          styles={getResolvedSelectStyles(styles)}
          noOptionsMessage={noOptionsMessage}
          menuIsOpen={readOnly ? false : menuIsOpen}
          menuPosition={menuPosition}
          openMenuOnClick={readOnly ? false : openMenuOnClick}
          openMenuOnFocus={readOnly ? false : openMenuOnFocus}
          backspaceRemovesValue={readOnly ? false : backspaceRemovesValue}
          escapeClearsValue={readOnly ? false : escapeClearsValue}
          tabSelectsValue={readOnly ? false : tabSelectsValue}
          aria-invalid={resolvedIsError ? true : undefined}
        />
      </SelectBase>
    );
  },
);

Select.displayName = "Select";

export default Select;
