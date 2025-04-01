import { style } from "@vanilla-extract/css";
import { Color } from "../../styles";

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

export const itemWrapper = style({
  position: "relative",
  border: "1px solid",
  borderColor: Color.border,
  borderRadius: "8px",
  padding: "8px",
  display: "flex",
  backgroundColor: Color.primary.default,
  cursor: "pointer",
});
