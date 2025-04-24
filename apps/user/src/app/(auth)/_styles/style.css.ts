import { Color, ColorVar, textSprinkles } from "@repo/ui";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
// ---------layout----------
export const bg = style({
  background: `linear-gradient(${ColorVar.greyBlue[9]} 0%, ${ColorVar.blue.dark[8]} 100%)`,
  height: "100dvh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const contentWrapper = recipe({
  base: {
    backgroundColor: Color.bg,
    borderRadius: "12px",
    margin: "0 auto",
    width: "420px",
  },
  variants: {
    isLoginPage: {
      true: {
        padding: "80px 90px",
      },
      false: {
        padding: "40px 90px",
      },
    },
  },
});
// ------------login------------
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
// ------------signup------------

export const logoSignup = style({
  display: "flex",
  width: "180px",
  height: "40px",
  margin: "0 auto 52px",
});

export const inputLabel = style([
  {
    paddingBottom: "10px",
    display: "inline-block",
  },
  textSprinkles({ text: "medium" }),
]);

export const pagination = style({
  display: "flex",
  justifyContent: "space-between",
});

export const pageButton = style({
  width: "80px",
  height: "40px",
});

export const loginText = style([
  {
    fontWeight: 400,
    color: Color.text.default,

    display: "inline-block",
    paddingTop: "40px",
  },
  textSprinkles({ text: "medium" }),
]);

export const loginLink = style([
  {
    color: Color.accent.default,
  },
  textSprinkles({ text: "mediumBold" }),
]);
