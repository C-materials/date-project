import { style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  justifyContent: "space-between",
});

export const section = style({
  width: "240px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const radioWrapper = style({
  display: "flex",
  gap: "20px",
});

export const buttonWrapper = style({
  display: "flex",
  gap: "8px",
  height: "40px",

  position: "absolute",
  top: 0,
  right: 0,
});

export const imageInputWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const imageWrapper = style({
  display: "flex",
  gap: "10px",
});
