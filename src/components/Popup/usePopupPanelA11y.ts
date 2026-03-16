import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
  ).filter(
    (element) =>
      !element.hasAttribute("disabled") &&
      element.getAttribute("aria-hidden") !== "true",
  );
}

type UsePopupPanelA11yParams = {
  open: boolean;
  isTopmost: boolean;
  shouldCloseOnEscape: boolean;
  onRequestClose?: () => void;
};

export default function usePopupPanelA11y({
  open,
  isTopmost,
  shouldCloseOnEscape,
  onRequestClose,
}: UsePopupPanelA11yParams) {
  const panelRef = useRef<HTMLElement | null>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const activeElement = document.activeElement;

    if (activeElement instanceof HTMLElement) {
      lastFocusedElementRef.current = activeElement;
    }

    return () => {
      const lastFocusedElement = lastFocusedElementRef.current;

      if (lastFocusedElement?.isConnected) {
        window.requestAnimationFrame(() => {
          if (lastFocusedElement.isConnected) {
            lastFocusedElement.focus();
          }
        });
      }
    };
  }, []);

  useEffect(() => {
    if (!open || !isTopmost) {
      return;
    }

    const focusFrame = window.requestAnimationFrame(() => {
      const panelElement = panelRef.current;

      if (!panelElement) {
        return;
      }

      const focusableElements = getFocusableElements(panelElement);
      const initialFocusTarget = focusableElements[0] ?? panelElement;

      initialFocusTarget.focus();
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
    };
  }, [isTopmost, open]);

  useEffect(() => {
    if (!open || !isTopmost) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const panelElement = panelRef.current;

      if (!panelElement) {
        return;
      }

      if (event.key === "Escape") {
        if (!shouldCloseOnEscape) {
          return;
        }

        event.preventDefault();
        onRequestClose?.();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = getFocusableElements(panelElement);

      if (focusableElements.length === 0) {
        event.preventDefault();
        panelElement.focus();
        return;
      }

      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement =
        focusableElements[focusableElements.length - 1];
      const activeElement =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      const isFocusInsidePanel = activeElement
        ? panelElement.contains(activeElement)
        : false;

      if (!isFocusInsidePanel) {
        event.preventDefault();
        (event.shiftKey ? lastFocusableElement : firstFocusableElement).focus();
        return;
      }

      if (
        event.shiftKey &&
        (activeElement === firstFocusableElement || activeElement === panelElement)
      ) {
        event.preventDefault();
        lastFocusableElement.focus();
        return;
      }

      if (!event.shiftKey && activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isTopmost, onRequestClose, open, shouldCloseOnEscape]);

  return {
    panelRef,
  };
}
