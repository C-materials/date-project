import { Color, ColorVar, textSprinkles } from "@repo/ui";
import { style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: "40px",
});

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
  textSprinkles({ text: "small" }),
]);

export const loginLink = style([
  {
    color: ColorVar.blue.light[8],
    textDecoration: "underline",
  },
  textSprinkles({ text: "smallBold" }),
]);
