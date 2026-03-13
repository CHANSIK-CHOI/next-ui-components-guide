import { format, type Locale } from "date-fns";
import type { DateRange } from "react-day-picker";

type DatepickerFormatOptions<TSelected> = {
  displayFormat: string;
  locale: Locale;
  selected: TSelected | undefined;
};

type DatepickerCloseOptions<TSelected> = {
  closeOnSelect: boolean | undefined;
  nextSelected: TSelected | undefined;
};

type DatepickerDefaultMonthOptions<TSelected> = {
  selected: TSelected | undefined;
};

export function formatSingleDateValue({
  displayFormat,
  locale,
  selected,
}: DatepickerFormatOptions<Date>) {
  if (!selected) return "";

  return format(selected, displayFormat, { locale });
}

export function formatMultipleDateValue({
  displayFormat,
  locale,
  selected,
}: DatepickerFormatOptions<Date[]>) {
  if (!selected?.length) return "";

  return selected
    .map((date) => format(date, displayFormat, { locale }))
    .join(", ");
}

export function formatRangeDateValue({
  displayFormat,
  locale,
  selected,
}: DatepickerFormatOptions<DateRange>) {
  if (!selected?.from) return "";

  const from = format(selected.from, displayFormat, { locale });

  if (!selected.to) {
    return `${from} -`;
  }

  return `${from} - ${format(selected.to, displayFormat, { locale })}`;
}

export function getSingleDefaultMonth({
  selected,
}: DatepickerDefaultMonthOptions<Date>) {
  return selected;
}

export function getMultipleDefaultMonth({
  selected,
}: DatepickerDefaultMonthOptions<Date[]>) {
  return selected?.[0];
}

export function getRangeDefaultMonth({
  selected,
}: DatepickerDefaultMonthOptions<DateRange>) {
  return selected?.from ?? selected?.to;
}

export function shouldCloseSingleOnSelect({
  closeOnSelect,
  nextSelected,
}: DatepickerCloseOptions<Date>) {
  if (typeof closeOnSelect === "boolean") {
    return closeOnSelect;
  }

  return Boolean(nextSelected);
}

export function shouldCloseMultipleOnSelect({
  closeOnSelect,
}: DatepickerCloseOptions<Date[]>) {
  if (typeof closeOnSelect === "boolean") {
    return closeOnSelect;
  }

  return false;
}

export function shouldCloseRangeOnSelect({
  closeOnSelect,
  nextSelected,
}: DatepickerCloseOptions<DateRange>) {
  if (typeof closeOnSelect === "boolean") {
    return closeOnSelect;
  }

  return Boolean(nextSelected?.from && nextSelected?.to);
}
