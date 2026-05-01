import cn from "classnames";
import { getDay, type Locale } from "date-fns";
import { ko } from "date-fns/locale";
import { AnimatePresence, motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type FocusEventHandler,
  type KeyboardEventHandler,
  type MouseEventHandler,
  type Ref,
} from "react";
import {
  DayPicker,
  type DayPickerProps,
  type OnSelectHandler,
} from "react-day-picker";
import { motionTransition } from "@/utils/motion";
import Textfield, { type TextfieldProps } from "../Textfield/Textfield";
import TextfieldBtn from "../Textfield/TextfieldBtn";

const nameBlock = "datepicker";
const CURRENT_YEAR = new Date().getFullYear();

type DatepickerMode = "single" | "multiple" | "range";

type DayPickerSelectionShape = {
  className?: string;
  defaultMonth?: Date;
  disabled?: DayPickerProps["disabled"];
  locale?: DayPickerProps["locale"];
  navLayout?: DayPickerProps["navLayout"];
  onSelect?: unknown;
  required?: boolean;
  showOutsideDays?: boolean;
};

type DayPickerBasePassThroughProps = Omit<
  DayPickerProps,
  "mode" | "onSelect" | "required" | "selected"
>;

export type DatepickerDayPickerProps<TProps extends DayPickerSelectionShape> =
  TProps extends unknown
    ? DayPickerBasePassThroughProps &
        Omit<TProps, "mode" | "onSelect" | "selected"> & {
          onSelect?: TProps["onSelect"];
        }
    : never;

export type DatepickerBaseProps<
  TSelected,
  TDayPickerProps extends DayPickerSelectionShape,
> = Omit<
  TextfieldProps,
  "children" | "isTextInputBlocked" | "onChange" | "type" | "value"
> & {
  mode: DatepickerMode;
  selected?: TSelected | undefined;
  onSelectedChange?: (selected: TSelected | undefined) => void;
  dayPickerProps?: DatepickerDayPickerProps<TDayPickerProps>;
  displayFormat?: string;
  formatDisplayValue: (options: {
    displayFormat: string;
    locale: Locale;
    selected: TSelected | undefined;
  }) => string;
  getDefaultMonth: (options: {
    selected: TSelected | undefined;
  }) => Date | undefined;
  getShouldCloseOnSelect: (options: {
    shouldCloseOnSelect: boolean | undefined;
    nextSelected: TSelected | undefined;
  }) => boolean;
  calendarButtonTitle?: string;
  shouldCloseOnSelect?: boolean;
  defaultIsCalendarOpen?: boolean;
  dropdownClassName?: string;
  inputRef?: Ref<HTMLInputElement>;
};

type DatepickerBaseInternalProps = {
  onCalendarOpenChange?: (isOpen: boolean) => void;
};

export default function DatepickerBase<
  TSelected,
  TDayPickerProps extends DayPickerSelectionShape,
>({
  mode,
  selected,
  onSelectedChange,
  dayPickerProps,
  displayFormat = "yyyy.MM.dd",
  formatDisplayValue,
  getDefaultMonth,
  getShouldCloseOnSelect,
  calendarButtonTitle,
  shouldCloseOnSelect,
  defaultIsCalendarOpen = false,
  onCalendarOpenChange,
  dropdownClassName,
  inputRef,
  className,
  placeholder = "날짜를 선택해주세요",
  readOnly = false,
  disabled = false,
  isClearable = false,
  onClear,
  onClick,
  onFocus,
  onKeyDown,
  ...restTextfieldProps
}: DatepickerBaseProps<TSelected, TDayPickerProps> &
  DatepickerBaseInternalProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const calendarDropdownId = useId();
  const [isCalendarOpen, setIsCalendarOpen] = useState(defaultIsCalendarOpen);

  const resolvedLocale = (dayPickerProps?.locale as Locale | undefined) ?? ko;
  const resolvedDisplayValue = useMemo(
    () =>
      formatDisplayValue({
        displayFormat,
        locale: resolvedLocale,
        selected,
      }),
    [displayFormat, formatDisplayValue, resolvedLocale, selected],
  );
  const resolvedDefaultMonth =
    dayPickerProps?.defaultMonth ?? getDefaultMonth({ selected });
  const resolvedStartMonth =
    dayPickerProps?.startMonth ?? new Date(CURRENT_YEAR - 100, 0, 1);
  const resolvedEndMonth =
    dayPickerProps?.endMonth ?? new Date(CURRENT_YEAR + 20, 11, 1);
  const resolvedCalendarButtonTitle =
    calendarButtonTitle ?? (isCalendarOpen ? "캘린더 닫기" : "날짜 선택하기");
  const isDayPickerDisabled = readOnly ? true : dayPickerProps?.disabled;
  const resolvedIsClearable = isClearable && !dayPickerProps?.required;
  const resolvedCaptionLayout = dayPickerProps?.captionLayout ?? "dropdown";
  const resolvedModifiers = useMemo(
    () => ({
      saturday: (date: Date) => getDay(date) === 6,
      sunday: (date: Date) => getDay(date) === 0,
      ...dayPickerProps?.modifiers,
    }),
    [dayPickerProps?.modifiers],
  );
  const resolvedModifiersClassNames = useMemo(
    () => ({
      saturday: `${nameBlock}__day--saturday`,
      sunday: `${nameBlock}__day--sunday`,
      ...dayPickerProps?.modifiersClassNames,
    }),
    [dayPickerProps?.modifiersClassNames],
  );

  const setIsCalendarOpenState = useCallback(
    (nextIsOpen: boolean) => {
      setIsCalendarOpen(nextIsOpen);
      onCalendarOpenChange?.(nextIsOpen);
    },
    [onCalendarOpenChange],
  );

  const handleCalendarToggle = () => {
    if (disabled || readOnly) return;

    setIsCalendarOpenState(!isCalendarOpen);
  };

  const handleInputClick: MouseEventHandler<HTMLInputElement> = (event) => {
    if (!disabled && !readOnly) {
      setIsCalendarOpenState(true);
    }

    onClick?.(event);
  };

  const handleInputFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    if (!disabled && !readOnly) {
      setIsCalendarOpenState(true);
    }

    onFocus?.(event);
  };

  const handleInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (
    event,
  ) => {
    if (!disabled && !readOnly) {
      if (
        event.key === "ArrowDown" ||
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();
        setIsCalendarOpenState(true);
      }

      if (event.key === "Escape") {
        setIsCalendarOpenState(false);
      }
    }

    onKeyDown?.(event);
  };

  const handleDayPickerSelect: OnSelectHandler<TSelected | undefined> = (
    nextSelected,
    triggerDate,
    modifiers,
    event,
  ) => {
    if (readOnly || disabled) {
      return;
    }

    onSelectedChange?.(nextSelected);
    (
      dayPickerProps?.onSelect as
        | OnSelectHandler<TSelected | undefined>
        | undefined
    )?.(nextSelected, triggerDate, modifiers, event);

    if (getShouldCloseOnSelect({ shouldCloseOnSelect, nextSelected })) {
      setIsCalendarOpenState(false);
    }
  };

  const handleClear = () => {
    onSelectedChange?.(undefined);
    onClear?.();
  };

  useEffect(() => {
    if (!isCalendarOpen) return;

    // Use pointerdown so an external button click that opens the calendar
    // is not treated as an immediate outside click in the same interaction.
    const handleDocumentPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsCalendarOpenState(false);
      }
    };

    const handleDocumentKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCalendarOpenState(false);
      }
    };

    document.addEventListener("pointerdown", handleDocumentPointerDown);
    document.addEventListener("keydown", handleDocumentKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handleDocumentPointerDown);
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, [isCalendarOpen, setIsCalendarOpenState]);

  useEffect(() => {
    if ((disabled || readOnly) && isCalendarOpen) {
      setIsCalendarOpenState(false);
    }
  }, [disabled, readOnly, isCalendarOpen, setIsCalendarOpenState]);

  return (
    <div ref={rootRef} className={cn(nameBlock)}>
      <Textfield
        {...restTextfieldProps}
        ref={inputRef}
        className={cn(className, `${nameBlock}__textfield`)}
        value={resolvedDisplayValue}
        placeholder={placeholder}
        readOnly={readOnly}
        isTextInputBlocked
        disabled={disabled}
        isClearable={resolvedIsClearable}
        onClear={handleClear}
        onClick={handleInputClick}
        onFocus={handleInputFocus}
        onKeyDown={handleInputKeyDown}
        aria-controls={calendarDropdownId}
        aria-expanded={isCalendarOpen}
        aria-haspopup="dialog"
      >
        <TextfieldBtn
          icon="date"
          title={resolvedCalendarButtonTitle}
          onClick={handleCalendarToggle}
          disabled={disabled}
        />
      </Textfield>

      <AnimatePresence initial={false}>
        {isCalendarOpen && !disabled && (
          <motion.div
            id={calendarDropdownId}
            className={cn(`${nameBlock}__dropdown`, dropdownClassName)}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={motionTransition.popover}
            role="dialog"
            aria-label="날짜 선택 캘린더"
          >
            <DayPicker
              {...dayPickerProps}
              mode={mode}
              required={dayPickerProps?.required}
              selected={selected as never}
              onSelect={handleDayPickerSelect as never}
              modifiers={resolvedModifiers}
              modifiersClassNames={resolvedModifiersClassNames}
              defaultMonth={resolvedDefaultMonth}
              startMonth={resolvedStartMonth}
              endMonth={resolvedEndMonth}
              disabled={isDayPickerDisabled}
              showOutsideDays={dayPickerProps?.showOutsideDays ?? true}
              captionLayout={resolvedCaptionLayout}
              navLayout={dayPickerProps?.navLayout ?? "after"}
              locale={resolvedLocale}
              className={cn(
                `${nameBlock}__daypicker`,
                dayPickerProps?.className,
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
