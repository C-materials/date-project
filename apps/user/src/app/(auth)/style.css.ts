import { style } from "@vanilla-extract/css";
import { Color, ColorVar } from "../styles/theme.css";
// ---------layout----------
export const bg = style({
  background: `linear-gradient(${ColorVar.greyBlue[9]} 0%, ${ColorVar.blue.dark[8]} 100%)`,
  height: "100dvh",
  margin: 0,
});

export const contentWrapper = style({
  backgroundColor: Color.bg,
  borderRadius: "12px",
  padding: "80px 90px",
  margin: "0 auto",
  width: "420px",
});
// ------------login------------
export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
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

export const signupButton = style({
  padding: "8px",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "17px",
});
// ------------logout------------
