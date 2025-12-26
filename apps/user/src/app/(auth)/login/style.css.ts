import { textSprinkles } from "@repo/ui";
import { style } from "@vanilla-extract/css";

export const logo = style({
  display: "flex",
  margin: "0 auto 52px",
  width: "200px",
  height: "64px",
});

export const form = style({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: "40px",
});

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
});
export const buttonWrapper = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
});

export const loginButton = style({
  width: "100%",
  height: "40px",
});

export const signupButton = style([
  {
    padding: "8px",
  },
  textSprinkles({
    text: "medium",
  }),
]);
