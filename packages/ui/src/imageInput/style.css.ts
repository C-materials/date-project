import { style } from "@vanilla-extract/css";
import { Color } from "../globalStyle/theme.css";

export const label = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  gap: 10,
  width: "100%",
  color: Color.text.inverse,
});

export const basicInput = style({
  display: "none",
});
