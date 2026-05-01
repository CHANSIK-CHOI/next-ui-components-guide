import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { motionTransition } from "@/utils/motion";
import {
  cloneElement,
  isValidElement,
  useEffect,
  useId,
  useState,
  type FocusEventHandler,
  type KeyboardEventHandler,
  type MouseEventHandler,
  type ReactNode,
} from "react";

const nameBlock = "tooltip";

export type TooltipPlacement =
  | "topCenter"
  | "topLeft"
  | "topRight"
  | "bottomCenter"
  | "bottomLeft"
  | "bottomRight";

type TooltipChildProps = {
  "aria-describedby"?: string;
};

export type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  className?: string;
  placement?: TooltipPlacement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (nextOpen: boolean) => void;
  disabled?: boolean;
};

function getTooltipAnimationOffset(placement: TooltipPlacement) {
  return placement.startsWith("top") ? 6 : -6;
}

function getMergedAriaDescribedBy({
  currentAriaDescribedBy,
  tooltipId,
}: {
  currentAriaDescribedBy?: string;
  tooltipId?: string;
}) {
  const mergedAriaDescribedBy = [currentAriaDescribedBy, tooltipId]
    .filter(Boolean)
    .join(" ");

  return mergedAriaDescribedBy || undefined;
}

export default function Tooltip({
  children,
  content,
  className,
  placement = "topCenter",
  open,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
}: TooltipProps) {
  const tooltipId = useId();
  const [isTooltipOpen, setIsTooltipOpen] = useState(defaultOpen);

  const isControlled = typeof open === "boolean";
  const resolvedOpen = disabled ? false : (isControlled ? open : isTooltipOpen);
  const animationOffset = getTooltipAnimationOffset(placement);

  const setTooltipOpenState = (nextOpen: boolean) => {
    if (!isControlled) {
      setIsTooltipOpen(nextOpen);
    }

    onOpenChange?.(nextOpen);
  };

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
    if (disabled) {
      return;
    }

    setTooltipOpenState(true);
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setTooltipOpenState(false);
  };

  const handleFocus: FocusEventHandler<HTMLDivElement> = () => {
    if (disabled) {
      return;
    }

    setTooltipOpenState(true);
  };

  const handleBlur: FocusEventHandler<HTMLDivElement> = (event) => {
    if (event.currentTarget.contains(event.relatedTarget as Node | null)) {
      return;
    }

    setTooltipOpenState(false);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Escape") {
      setTooltipOpenState(false);
    }
  };

  useEffect(() => {
    if (disabled) {
      setIsTooltipOpen(false);
    }
  }, [disabled]);

  const resolvedChildren = isValidElement<TooltipChildProps>(children)
    ? cloneElement(children, {
        "aria-describedby": getMergedAriaDescribedBy({
          currentAriaDescribedBy: children.props["aria-describedby"],
          tooltipId: resolvedOpen ? tooltipId : undefined,
        }),
      })
    : children;

  return (
    <div
      className={cn(
        nameBlock,
        `${nameBlock}--${placement}`,
        disabled && "is-disabled",
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <div className={cn(`${nameBlock}__trigger`)}>{resolvedChildren}</div>

      <AnimatePresence initial={false}>
        {resolvedOpen ? (
          <motion.div
            key="tooltip-panel"
            className={cn(`${nameBlock}__panel`)}
            initial={{ opacity: 0, y: animationOffset, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: animationOffset, scale: 0.98, transition: motionTransition.popoverExit }}
            transition={motionTransition.popover}
          >
            <div
              id={tooltipId}
              role="tooltip"
              className={cn(`${nameBlock}__bubble`)}
            >
              <div className={cn(`${nameBlock}__content`)}>{content}</div>
              <span className={cn(`${nameBlock}__arrow`)} aria-hidden="true" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
