import cn from "classnames";
import AccordionButton from "./AccordionButton";

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
  const hasToggleButton =
    typeof buttonIndex === "number" && !Number.isNaN(buttonIndex);

  return (
    <div
      {...rest}
      className={cn(
        `${nameBlock}__head`,
        className,
        hasToggleButton && `${nameBlock}__head--withButton`,
      )}
    >
      <div className={cn(`${nameBlock}__titleBox`)}>
        {children ? (
          <div className={cn(`${nameBlock}__title`)}>{children}</div>
        ) : null}
      </div>

      <span className={cn(`${nameBlock}__arrow`)}>
        {hasToggleButton ? (
          <AccordionButton
            index={buttonIndex}
            className={cn(`${nameBlock}__button--icon`)}
            aria-label="아코디언 패널 토글"
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
