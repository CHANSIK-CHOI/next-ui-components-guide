import type { Transition } from "framer-motion";

export const motionDuration = {
  quick: 0.12,
  fast: 0.18,
  base: 0.2,
  slow: 0.24,
  deliberate: 0.32,
} as const;

export const motionEase = {
  linear: "linear",
  standard: [0.2, 0, 0, 1],
  emphasized: [0.16, 1, 0.3, 1],
  exit: [0.4, 0, 1, 1],
} as const;

export const motionTransition = {
  collapse: {
    duration: motionDuration.quick,
    ease: motionEase.linear,
  } satisfies Transition,
  overlay: {
    duration: motionDuration.fast,
    ease: motionEase.standard,
  } satisfies Transition,
  popover: {
    duration: motionDuration.fast,
    ease: motionEase.standard,
  } satisfies Transition,
  panel: {
    duration: motionDuration.slow,
    ease: motionEase.emphasized,
  } satisfies Transition,
  toast: {
    duration: motionDuration.slow,
    ease: motionEase.emphasized,
  } satisfies Transition,
} as const;
