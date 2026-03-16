import { useCallback, useEffect, useRef } from "react";

const APP_ROOT_ID = "__next";

type UsePopupHostA11yParams = {
  hasPopup: boolean;
};

export default function usePopupHostA11y({
  hasPopup,
}: UsePopupHostA11yParams) {
  const scrollTopRef = useRef(0);
  const isScrollLockedRef = useRef(false);
  const previousAppRootAriaHiddenRef = useRef<string | null>(null);
  const isAppRootInertRef = useRef(false);
  const hasPopupRef = useRef(hasPopup);

  const unlockScroll = useCallback((force = false) => {
    if (!isScrollLockedRef.current) {
      return;
    }

    if (!force && hasPopupRef.current) {
      return;
    }

    document.body.classList.remove("is-prevent-scroll");
    document.body.style.removeProperty("--scroll-lock-top");
    window.scrollTo(0, scrollTopRef.current);
    scrollTopRef.current = 0;
    isScrollLockedRef.current = false;
  }, []);

  const setAppRootInert = useCallback((nextInert: boolean) => {
    const appRoot = document.getElementById(APP_ROOT_ID);

    if (!(appRoot instanceof HTMLElement)) {
      return;
    }

    const inertCapableAppRoot = appRoot as HTMLElement & { inert?: boolean };

    if (nextInert) {
      if (isAppRootInertRef.current) {
        return;
      }

      previousAppRootAriaHiddenRef.current = appRoot.getAttribute("aria-hidden");

      if ("inert" in inertCapableAppRoot) {
        inertCapableAppRoot.inert = true;
      } else {
        appRoot.setAttribute("inert", "");
      }

      appRoot.setAttribute("aria-hidden", "true");
      isAppRootInertRef.current = true;
      return;
    }

    if (!isAppRootInertRef.current) {
      return;
    }

    appRoot.removeAttribute("inert");

    if ("inert" in inertCapableAppRoot) {
      inertCapableAppRoot.inert = false;
    }

    if (previousAppRootAriaHiddenRef.current === null) {
      appRoot.removeAttribute("aria-hidden");
    } else {
      appRoot.setAttribute("aria-hidden", previousAppRootAriaHiddenRef.current);
    }

    previousAppRootAriaHiddenRef.current = null;
    isAppRootInertRef.current = false;
  }, []);

  useEffect(() => {
    hasPopupRef.current = hasPopup;

    if (hasPopup && !isScrollLockedRef.current) {
      scrollTopRef.current =
        window.scrollY || document.documentElement.scrollTop || 0;
      document.body.classList.add("is-prevent-scroll");
      document.body.style.setProperty(
        "--scroll-lock-top",
        `${scrollTopRef.current}px`,
      );
      isScrollLockedRef.current = true;
    }

    setAppRootInert(hasPopup);

    if (!hasPopup && isScrollLockedRef.current) {
      unlockScroll();
    }
  }, [hasPopup, setAppRootInert, unlockScroll]);

  useEffect(
    () => () => {
      unlockScroll(true);
      setAppRootInert(false);
    },
    [setAppRootInert, unlockScroll],
  );
}
