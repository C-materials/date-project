import { style } from "@vanilla-extract/css";

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
});

export const inputLabel = style({
  fontSize: "14px",
  lineHeight: "17px",
  fontWeight: 500,
  paddingBottom: "10px",
  display: "inline-block",
});

export const birthWrapper = style({
  display: "flex",
  gap: "8px",
  width: "100%",
});

export const genderWrapper = style({
  display: "flex",
  gap: "20px",
});
