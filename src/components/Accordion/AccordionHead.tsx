import cn from "classnames";
import AccordionButton from "./AccordionButton";
import { useAccordionContext } from "./Accordion.context";

const nameBlock = "accordion";

export type AccordionHeadProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  buttonIndex?: number;
};

export default function AccordionHead({
  children,
  buttonIndex,
  className,
  ...rest
}: AccordionHeadProps) {
  const { accordionId } = useAccordionContext();
  const hasToggleButton =
    typeof buttonIndex === "number" && !Number.isNaN(buttonIndex);
  const titleId =
    hasToggleButton && children ? `${accordionId}-title-${buttonIndex}` : undefined;

  return (
    <div
      {...rest}
      className={cn(
        `${nameBlock}__head`,
        className,
        hasToggleButton && `${nameBlock}__head--withButton`,
      )}
    >
      <div id={titleId} className={cn(`${nameBlock}__titleBox`)}>
        {children ? (
          <div className={cn(`${nameBlock}__title`)}>{children}</div>
        ) : null}
      </div>

      <span className={cn(`${nameBlock}__arrow`)}>
        {hasToggleButton ? (
          <AccordionButton
            index={buttonIndex}
            className={cn(`${nameBlock}__button--icon`)}
            aria-label={titleId ? undefined : "아코디언 패널 토글"}
            aria-labelledby={titleId}
          >
            <span
              className={cn(`${nameBlock}__arrowIcon`)}
              aria-hidden="true"
            />
          </AccordionButton>
        ) : (
          <span
            className={cn(`${nameBlock}__arrowIcon`)}
            aria-hidden="true"
          />
        )}
      </span>
    </div>
  );
}
