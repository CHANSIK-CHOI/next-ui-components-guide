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
];
