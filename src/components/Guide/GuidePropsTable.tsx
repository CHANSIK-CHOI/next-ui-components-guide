import cn from "classnames";
import React from "react";

const nameBlock = "guidePropsTable";

export type GuidePropsTableRow = {
  name: string;
  typeLabel: React.ReactNode;
  defaultValue?: React.ReactNode;
  required?: boolean;
  description: React.ReactNode;
};

type GuidePropsTableProps = {
  rows: GuidePropsTableRow[];
  title?: React.ReactNode;
  description?: React.ReactNode;
  note?: React.ReactNode;
  className?: string;
};

function renderCodeCell(content?: React.ReactNode) {
  if (content === undefined || content === null || content === "") {
    return <span className={cn(`${nameBlock}__muted`)}>-</span>;
  }

  return typeof content === "string" ? (
    <code className={cn(`${nameBlock}__code`)}>{content}</code>
  ) : (
    content
  );
}

export default function GuidePropsTable({
  rows,
  title,
  description,
  note,
  className,
}: GuidePropsTableProps) {
  return (
    <div className={cn(nameBlock, className)}>
      {(title || description) && (
        <div className={cn(`${nameBlock}__header`)}>
          {title && <h3 className={cn(`${nameBlock}__title`)}>{title}</h3>}
          {description && (
            <p className={cn(`${nameBlock}__summary`)}>{description}</p>
          )}
        </div>
      )}

      <div className={cn(`${nameBlock}__scroll`)}>
        <table
          className={cn(`${nameBlock}__table`)}
          aria-label="Component props reference table"
        >
          <thead>
            <tr className={cn(`${nameBlock}__headRow`)}>
              <th scope="col" className={cn(`${nameBlock}__headCell`)}>
                Prop
              </th>
              <th scope="col" className={cn(`${nameBlock}__headCell`)}>
                Type
              </th>
              <th scope="col" className={cn(`${nameBlock}__headCell`)}>
                Default
              </th>
              <th scope="col" className={cn(`${nameBlock}__headCell`)}>
                Required
              </th>
              <th scope="col" className={cn(`${nameBlock}__headCell`)}>
                Description
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className={cn(`${nameBlock}__bodyRow`)}>
                <td className={cn(`${nameBlock}__cell`)}>
                  <code className={cn(`${nameBlock}__code`)}>{row.name}</code>
                </td>
                <td className={cn(`${nameBlock}__cell`)}>
                  {renderCodeCell(row.typeLabel)}
                </td>
                <td className={cn(`${nameBlock}__cell`)}>
                  {renderCodeCell(row.defaultValue)}
                </td>
                <td className={cn(`${nameBlock}__cell`)}>
                  <span
                    className={cn(
                      `${nameBlock}__required`,
                      row.required
                        ? `${nameBlock}__required--yes`
                        : `${nameBlock}__required--no`,
                    )}
                  >
                    {row.required ? "Required" : "Optional"}
                  </span>
                </td>
                <td
                  className={cn(
                    `${nameBlock}__cell`,
                    `${nameBlock}__description`,
                  )}
                >
                  {row.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {note && <div className={cn(`${nameBlock}__note`)}>{note}</div>}
    </div>
  );
}
