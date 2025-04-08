import { style } from "@vanilla-extract/css";

// imageUploader
export const previewList = style({
  display: "flex",
  gap: "8px",
  justifyContent: "flex-start",
  position: "relative",
});

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});
