import { style } from "@vanilla-extract/css";

// --------------- required -----------------
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

export const fieldWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const imageWrapper = style({
  display: "flex",
  gap: "10px",
});

export const countWrapper = style({
  display: "flex",
  justifyContent: "space-between",
});
// --------------- optional -----------------

export const sectionWide = style({
  width: "266px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const checkBoxWrapper = style({
  width: "200px",
  display: "flex",
  flexWrap: "wrap",
  gap: "10px 20px",
});
export const tagWrapper = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
});

// --------------- account -----------------
export const inputsWrapper = style({
  display: "flex",
  gap: "8px",
});

export const pwChange = style({
  height: "40px",
  whiteSpace: "nowrap",
});
