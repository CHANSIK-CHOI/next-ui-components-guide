export type GuideNavigationItem = {
  href: string;
  label: string;
  description: string;
};

export const guideNavigation: GuideNavigationItem[] = [
  {
    href: "/button",
    label: "Button",
    description: "Button / ButtonLink / IconButton / ButtonGroup",
  },
  {
    href: "/checkbox",
    label: "Checkbox",
    description: "Checkbox / RHFCheckbox / CheckboxGroup",
  },
  {
    href: "/radio",
    label: "Radio",
    description: "Radio / RHFRadio / RadioGroup",
  },
  {
    href: "/textfield",
    label: "Textfield",
    description: "Textfield / RHFTextfield",
  },
  {
    href: "/search",
    label: "Search",
    description: "Search / RHFSearch",
  },
  {
    href: "/password",
    label: "Password",
    description: "Password / RHFPassword",
  },
  {
    href: "/datepicker",
    label: "Datepicker",
    description: "Datepicker / RHFDatepicker",
  },
  {
    href: "/date-range-picker",
    label: "DateRangePicker",
    description: "DateRangePicker / RHFDateRangePicker",
  },
  {
    href: "/date-multiple-picker",
    label: "DateMultiplePicker",
    description: "DateMultiplePicker / RHFDateMultiplePicker",
  },
  {
    href: "/alert",
    label: "Alert",
    description: "Alert / useAlert",
  },
  {
    href: "/confirm",
    label: "Confirm",
    description: "Confirm / useConfirm",
  },
];
