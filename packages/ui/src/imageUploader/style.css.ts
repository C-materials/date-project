import { style } from "@vanilla-extract/css";

export const previewList = style({
  display: "flex",
  gap: "8px",
  justifyContent: "start",
  position: "relative",
});

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});
