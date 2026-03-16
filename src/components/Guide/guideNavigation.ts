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
    href: "/switch",
    label: "Switch",
    description: "Switch / RHFSwitch",
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
    href: "/textarea",
    label: "Textarea",
    description: "Textarea / RHFTextarea",
  },
  {
    href: "/select",
    label: "Select",
    description: "Select / MultiSelect / RHFSelect / RHFMultiSelect",
  },
  {
    href: "/tooltip",
    label: "Tooltip",
    description: "Tooltip",
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
  {
    href: "/layer-popup",
    label: "LayerPopup",
    description: "LayerPopup / useLayerPopup",
  },
  {
    href: "/bottom-sheet",
    label: "BottomSheet",
    description: "BottomSheet / useBottomSheet",
  },
  {
    href: "/full-popup",
    label: "FullPopup",
    description: "FullPopup / useFullPopup",
  },
  {
    href: "/toast",
    label: "Toast",
    description: "Toast / useToast",
  },
];
