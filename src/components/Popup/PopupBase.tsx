import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useId } from "react";
import { CloseIcon } from "@/components/Icon";
import { motionTransition } from "@/utils/motion";
import type { PopupBaseProps, PopupVariant } from "./PopupBase.types";
import usePopupPanelA11y from "./usePopupPanelA11y";

const nameBlock = "popup";

function getPanelMotion(variant: PopupVariant) {
  if (variant === "bottomSheet") {
    return {
      initial: { opacity: 1, y: "100%" },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 1, y: "100%" },
    };
  }

  if (variant === "full") {
    return {
      initial: { opacity: 1, x: "100%" },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 1, x: "100%" },
    };
  }

  return {
    initial: { opacity: 0, y: 24, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 24, scale: 0.98 },
  };
}

export default function PopupBase({
  children,
  id,
  className,
  panelClassName,
  bodyClassName,
  footerClassName,
  open,
  variant = "dialog",
  size = "regular",
  contentAlign = "center",
  title,
  icon,
  description,
  footer,
  hasCloseButton = true,
  closeButtonLabel = "팝업 닫기",
  shouldCloseOnBackdrop = true,
  shouldCloseOnEscape = true,
  dialogLabel,
  onRequestClose,
  onClickClose,
  onExited,
  isTopmost = false,
}: PopupBaseProps) {
  const generatedTitleId = useId();
  const generatedDescriptionId = useId();
  const panelMotion = getPanelMotion(variant);
  const hasHeader = Boolean(title) || hasCloseButton;
  const { panelRef } = usePopupPanelA11y({
    open,
    isTopmost,
    shouldCloseOnEscape,
    onRequestClose,
  });

  const titleId = title ? generatedTitleId : undefined;
  const descriptionId = description ? generatedDescriptionId : undefined;

  const handleBackdropClick = () => {
    if (!shouldCloseOnBackdrop) {
      return;
    }

    onRequestClose?.();
  };

  const handleCloseButtonClick = () => {
    onClickClose?.();
    onRequestClose?.();
  };

  const headerContent = hasHeader ? (
    <div
      className={cn(`${nameBlock}__head`, {
        [`${nameBlock}__head--noTitle`]: !title,
      })}
    >
      {title && (
        <div className={cn(`${nameBlock}__headerContent`)}>
          <span id={titleId} className={cn(`${nameBlock}__title`)}>
            {title}
          </span>
        </div>
      )}

      {hasCloseButton && (
        <button
          type="button"
          className={cn(`${nameBlock}__close`)}
          aria-label={closeButtonLabel}
          onClick={handleCloseButtonClick}
        >
          <CloseIcon width={20} height={20} />
        </button>
      )}
    </div>
  ) : null;

  return (
    <AnimatePresence onExitComplete={onExited}>
      {open ? (
        <div
          id={id}
          className={cn(
            nameBlock,
            `${nameBlock}--${variant}`,
            size !== "regular" && `${nameBlock}--${size}`,
            contentAlign === "center" && `${nameBlock}--align-center`,
            !hasHeader && `${nameBlock}--noHeader`,
            !footer && `${nameBlock}--noFooter`,
            className,
          )}
        >
          <motion.div
            className={cn(`${nameBlock}__dim`)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={motionTransition.overlay}
            onClick={handleBackdropClick}
          />

          <div className={cn(`${nameBlock}__positioner`)}>
            <motion.section
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label={titleId ? undefined : (dialogLabel ?? "팝업")}
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              className={cn(`${nameBlock}__panel`, panelClassName)}
              tabIndex={-1}
              initial={panelMotion.initial}
              animate={panelMotion.animate}
              exit={panelMotion.exit}
              transition={motionTransition.panel}
            >
              {headerContent}

              <div className={cn(`${nameBlock}__body`, bodyClassName)}>
                {icon !== null && icon !== undefined && (
                  <div className={cn(`${nameBlock}__icon`)}>{icon}</div>
                )}
                {description && (
                  <p
                    id={descriptionId}
                    className={cn(`${nameBlock}__description`)}
                  >
                    {description}
                  </p>
                )}
                {children}
              </div>

              {footer && (
                <div className={cn(`${nameBlock}__foot`, footerClassName)}>
                  {footer}
                </div>
              )}
            </motion.section>
          </div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
