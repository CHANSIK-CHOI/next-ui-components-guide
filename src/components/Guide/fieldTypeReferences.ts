export const FIELD_PROPS_CODE = `export type FieldProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  inputId?: string;
  direction?: "row" | "column";
  align?: "start" | "center";
  infoMessage?: string;
  errorMessage?: string;
  isError?: boolean;
};`;

export const FIELD_ITEM_PROPS_CODE = `export type FieldItemProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  inputId?: string;
  direction?: "row" | "column";
  align?: "start" | "center";
  infoMessage?: string;
  errorMessage?: string;
  isError?: boolean;
};`;

export const FIELD_GRID_PROPS_CODE = `type FieldGridProps = {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
};`;

export const FIELD_LABEL_PROPS_CODE = `type FieldLabelAsLabel = React.LabelHTMLAttributes<HTMLLabelElement> & {
  as?: "label";
};

type FieldLabelAsSpan = React.HTMLAttributes<HTMLSpanElement> & {
  as?: "span";
  htmlFor?: never;
};

export type FieldLabelProps = FieldLabelAsLabel | FieldLabelAsSpan;`;

export const FIELD_DESCRIPTION_PROPS_CODE = `export type FieldDescriptionProps =
  React.HTMLAttributes<HTMLParagraphElement>;`;

export const FIELD_MESSAGE_PROPS_CODE = `export type FieldMessageProps = {
  id?: string;
  className?: string;
  infoMessage?: string;
  errorMessage?: string;
};`;
