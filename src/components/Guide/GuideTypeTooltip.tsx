import cn from "classnames";
import { Tooltip } from "@/components";
import type { TooltipPlacement } from "@/components/Tooltip/Tooltip";
import type { ReactNode } from "react";

const nameBlock = "guideTypeTooltip";

type GuideTypeTooltipProps = {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  code: string;
  placement?: TooltipPlacement;
  className?: string;
};

export default function GuideTypeTooltip({
  label,
  title,
  description,
  code,
  placement = "bottomLeft",
  className,
}: GuideTypeTooltipProps) {
  return (
    <Tooltip
      className={cn(nameBlock, `${nameBlock}__popover`, className)}
      placement={placement}
      content={
        <div className={cn(`${nameBlock}__content`)}>
          <strong className={cn(`${nameBlock}__title`)}>{title}</strong>
          {description && (
            <p className={cn(`${nameBlock}__description`)}>{description}</p>
          )}
          <pre className={cn(`${nameBlock}__code`)}>
            <code>{code}</code>
          </pre>
        </div>
      }
    >
      <button type="button" className={cn(`${nameBlock}__button`)}>
        {label}
      </button>
    </Tooltip>
  );
}
