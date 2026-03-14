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
import Textfield, { type TextfieldProps } from "../Textfield/Textfield";
import TextfieldBtn from "../Textfield/TextfieldBtn";

const nameBlock = "datepicker";

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
  shouldCloseOnSelect: (options: {
    closeOnSelect: boolean | undefined;
    nextSelected: TSelected | undefined;
  }) => boolean;
  calendarButtonTitle?: string;
  closeOnSelect?: boolean;
  defaultCalendarOpen?: boolean;
  dropdownClassName?: string;
  inputRef?: Ref<HTMLInputElement>;
};

type DatepickerBaseInternalProps = {
  onOpenStateChange?: (isOpen: boolean) => void;
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
  shouldCloseOnSelect,
  calendarButtonTitle,
  closeOnSelect,
  defaultCalendarOpen = false,
  onOpenStateChange,
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
}: DatepickerBaseProps<TSelected, TDayPickerProps> & DatepickerBaseInternalProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const dropdownId = useId();
  const [isDropdownOpen, setIsDropdownOpen] = useState(defaultCalendarOpen);

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
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const resolvedStartMonth =
    dayPickerProps?.startMonth ?? new Date(currentYear - 100, 0, 1);
  const resolvedEndMonth =
    dayPickerProps?.endMonth ?? new Date(currentYear + 20, 11, 1);
  const resolvedCalendarButtonTitle =
    calendarButtonTitle ??
    (isDropdownOpen ? "캘린더 닫기" : "날짜 선택하기");
  const resolvedDayPickerDisabled = readOnly ? true : dayPickerProps?.disabled;
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

  const setCalendarOpen = useCallback(
    (nextIsOpen: boolean) => {
      setIsDropdownOpen(nextIsOpen);
      onOpenStateChange?.(nextIsOpen);
    },
    [onOpenStateChange],
  );

  const handleCalendarToggle = () => {
    if (disabled || readOnly) return;

    setCalendarOpen(!isDropdownOpen);
  };

  const handleInputClick: MouseEventHandler<HTMLInputElement> = (event) => {
    if (!disabled && !readOnly) {
      setCalendarOpen(true);
    }

    onClick?.(event);
  };

  const handleInputFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    if (!disabled && !readOnly) {
      setCalendarOpen(true);
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
        setCalendarOpen(true);
      }

      if (event.key === "Escape") {
        setCalendarOpen(false);
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

    if (shouldCloseOnSelect({ closeOnSelect, nextSelected })) {
      setCalendarOpen(false);
    }
  };

  const handleClear = () => {
    onSelectedChange?.(undefined);
    onClear?.();
  };

  useEffect(() => {
    if (!isDropdownOpen) return;

    // Use pointerdown so an external button click that opens the calendar
    // is not treated as an immediate outside click in the same interaction.
    const handleDocumentPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setCalendarOpen(false);
      }
    };

    const handleDocumentKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCalendarOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleDocumentPointerDown);
    document.addEventListener("keydown", handleDocumentKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handleDocumentPointerDown);
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, [isDropdownOpen, setCalendarOpen]);

  useEffect(() => {
    if ((disabled || readOnly) && isDropdownOpen) {
      setCalendarOpen(false);
    }
  }, [disabled, readOnly, isDropdownOpen, setCalendarOpen]);

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
        aria-controls={dropdownId}
        aria-expanded={isDropdownOpen}
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
        {isDropdownOpen && !disabled && (
          <motion.div
            id={dropdownId}
            className={cn(`${nameBlock}__dropdown`, dropdownClassName)}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
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
              disabled={resolvedDayPickerDisabled}
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
