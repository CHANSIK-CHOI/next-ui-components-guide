import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId } from "react";
import { CloseIcon } from "@/components/Icon";
import type { Transition } from "framer-motion";
import type { PopupBaseProps, PopupVariant } from "./PopupBase.types";

const nameBlock = "popup";

const overlayTransition: Transition = {
  duration: 0.18,
  ease: "easeOut",
};

const panelTransition: Transition = {
  duration: 0.22,
  ease: "easeOut",
};

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
  description,
  footer,
  showCloseButton = true,
  closeButtonLabel = "팝업 닫기",
  closeOnBackdrop = true,
  closeOnEscape = true,
  dialogLabel,
  onRequestClose,
  onClickClose,
  onExited,
}: PopupBaseProps) {
  const generatedTitleId = useId();
  const generatedDescriptionId = useId();
  const panelMotion = getPanelMotion(variant);
  const hasHeader = Boolean(title) || showCloseButton;

  const titleId = title ? generatedTitleId : undefined;
  const descriptionId = description ? generatedDescriptionId : undefined;

  useEffect(() => {
    if (!open || !closeOnEscape) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      onRequestClose?.();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeOnEscape, onRequestClose, open]);

  const handleBackdropClick = () => {
    if (!closeOnBackdrop) {
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

      {showCloseButton && (
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
    <AnimatePresence initial={false} onExitComplete={onExited}>
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
            transition={overlayTransition}
            onClick={handleBackdropClick}
          />

          <div className={cn(`${nameBlock}__positioner`)}>
            <motion.section
              role="dialog"
              aria-modal="true"
              aria-label={titleId ? undefined : (dialogLabel ?? "팝업")}
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              className={cn(`${nameBlock}__panel`, panelClassName)}
              initial={panelMotion.initial}
              animate={panelMotion.animate}
              exit={panelMotion.exit}
              transition={panelTransition}
            >
              {headerContent}

              <div className={cn(`${nameBlock}__body`, bodyClassName)}>
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
