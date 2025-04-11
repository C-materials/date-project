import { style } from "@vanilla-extract/css";

export const section = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  paddingTop: "190px",
  gap: "100px",
});

export const description = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  gap: "60px",
});
export const text = style({
  fontSize: "24px",
  fontWeight: 500,
  lineHeight: "29px",
});
export const subtext = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",

  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "24px",
});
export const buttonWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "12px",
  width: "240px",
});

export const button = style({
  height: "40px",
});
