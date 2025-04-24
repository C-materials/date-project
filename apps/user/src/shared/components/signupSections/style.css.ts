import { textSprinkles } from "@repo/ui";
import { style } from "@vanilla-extract/css";

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
});

export const inputLabel = style([
  {
    paddingBottom: "10px",
    display: "inline-block",
    cursor: "default",
  },
  textSprinkles({
    text: "medium",
  }),
]);

export const inputsWrapper = style({
  display: "flex",
  gap: "8px",
  width: "100%",
});

export const genderWrapper = style({
  display: "flex",
  gap: "20px",
});
