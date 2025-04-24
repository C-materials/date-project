import { keyframes, style } from "@vanilla-extract/css";

export const toastWrapper = style({
  display: "flex",
  flexDirection: "column",
});

export const pop = keyframes({
  "0%": { transform: "translate(-50%,-100%)" },
  "80%": { transform: "translate(-50%,0)" },
});

export const toastItem = style({
  animation: `${pop} 1s`,
});
