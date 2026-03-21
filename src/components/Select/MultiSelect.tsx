import { forwardRef, useId } from "react";
import type {
  ActionMeta,
  GroupBase,
  MultiValue,
  SelectInstance,
} from "react-select";
import ReactSelect from "react-select";
import {
  getMergedAriaIds,
  useFieldContext,
} from "../Field/Field.context";
import SelectBase, { SELECT_CLASS_NAME } from "./SelectBase";
import {
  getResolvedMultiValue,
  getResolvedSelectComponents,
  getResolvedSelectStyles,
} from "./Select.utils";
import type {
  MultiSelectValue,
  SelectOption,
  SelectSharedProps,
} from "./Select.types";

export type MultiSelectProps = SelectSharedProps<true> & {
  value?: MultiSelectValue;
  onChange?: (
    nextValue: MultiSelectValue,
    selectedOption: MultiValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>,
  ) => void;
};

// 멀티 선택은 value가 배열이라는 사실만 유지하면 됩니다.
const MultiSelect = forwardRef<
  SelectInstance<SelectOption, true, GroupBase<SelectOption>>,
  MultiSelectProps
>(
  (
    {
      id,
      className,
      name,
      value = [],
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
      "aria-describedby": ariaDescribedBy,
      ...rest
    },
    ref,
  ) => {
    const {
      inputId: fieldContextId,
      describedByIds: fieldDescribedByIds,
      isError: isFieldError,
    } = useFieldContext();
    const generatedId = useId();
    const generatedMessageId = useId();
    const resolvedId = id ?? fieldContextId ?? generatedId;
    const resolvedValue = getResolvedMultiValue(options, value);
    const hasOwnMessage = Boolean(infoMessage || errorMessage);
    const resolvedIsError =
      isFieldError || isError || Boolean(errorMessage);
    const resolvedAriaDescribedBy = getMergedAriaIds(
      ariaDescribedBy,
      ...fieldDescribedByIds,
      hasOwnMessage ? generatedMessageId : null,
    );

    const handleChange = (
      nextOption: MultiValue<SelectOption>,
      actionMeta: ActionMeta<SelectOption>,
    ) => {
      if (readOnly) {
        return;
      }

      onChange?.(
        nextOption.map((option) => option.value),
        nextOption,
        actionMeta,
      );
    };

    return (
      <SelectBase
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        isError={resolvedIsError}
        infoMessage={infoMessage}
        errorMessage={errorMessage}
        messageId={hasOwnMessage ? generatedMessageId : undefined}
      >
        <ReactSelect<SelectOption, true, GroupBase<SelectOption>>
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
          isMulti
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
          aria-describedby={resolvedAriaDescribedBy}
          aria-invalid={resolvedIsError ? true : undefined}
        />
      </SelectBase>
    );
  },
);

MultiSelect.displayName = "MultiSelect";

export default MultiSelect;
