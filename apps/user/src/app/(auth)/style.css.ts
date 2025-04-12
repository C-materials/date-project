import { Color, ColorVar } from "@repo/ui";
import { style } from "@vanilla-extract/css";
// ---------layout----------
export const bg = style({
  background: `linear-gradient(${ColorVar.greyBlue[9]} 0%, ${ColorVar.blue.dark[8]} 100%)`,
  height: "100dvh",
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const contentWrapper = style({
  backgroundColor: Color.bg,
  borderRadius: "12px",
  padding: "80px 90px",
  margin: "0 auto",
  width: "420px",
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

export const signupButton = style({
  padding: "8px",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "17px",
});
// ------------signup------------

export const logoSignup = style({
  display: "flex",
  width: "180px",
  height: "43px",
});

export const inputLabel = style({
  fontSize: "14px",
  lineHeight: "17px",
  fontWeight: 500,
  paddingBottom: "10px",
  display: "inline-block",
});

export const pagination = style({
  display: "flex",
  justifyContent: "space-between",
});

export const pageButton = style({
  width: "80px",
  height: "40px",
});

//------------ infoSection ------------
export const birthWrapper = style({
  display: "flex",
  gap: "8px",
  width: "100%",
});

export const genderWrapper = style({
  display: "flex",
  gap: "20px",
});
