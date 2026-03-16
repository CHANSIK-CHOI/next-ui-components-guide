import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import type { ToastProps } from "./Toast.types";

const nameBlock = "toast";
const DEFAULT_TOAST_DURATION = 2400;

export default function Toast({
  className,
  message,
  tone = "default",
  duration = DEFAULT_TOAST_DURATION,
  open,
  onRequestClose,
  onExited,
  onOpenComplete,
}: ToastProps) {
  const hasOpenedRef = useRef(false);

  useEffect(() => {
    hasOpenedRef.current = false;
  }, [open]);

  useEffect(() => {
    if (!open || duration <= 0) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      onRequestClose?.();
    }, duration);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [duration, onRequestClose, open]);

  const handleAnimationComplete = () => {
    if (!open || hasOpenedRef.current) {
      return;
    }

    hasOpenedRef.current = true;
    onOpenComplete?.();
  };

  return (
    <AnimatePresence onExitComplete={onExited}>
      {open ? (
        <motion.article
          role={tone === "error" ? "alert" : "status"}
          aria-live={tone === "error" ? "assertive" : "polite"}
          aria-atomic="true"
          className={cn(
            nameBlock,
            tone !== "default" && `${nameBlock}--${tone}`,
            className,
          )}
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{
            duration: 0.22,
            ease: "easeOut",
          }}
          onAnimationComplete={handleAnimationComplete}
          layout="position"
        >
          <span className={cn(`${nameBlock}__indicator`)} aria-hidden="true" />
          <div className={cn(`${nameBlock}__content`)}>
            <div className={cn(`${nameBlock}__message`)}>{message}</div>
          </div>
        </motion.article>
      ) : null}
    </AnimatePresence>
  );
}
