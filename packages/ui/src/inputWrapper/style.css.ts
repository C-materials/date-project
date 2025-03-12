import { style } from "@vanilla-extract/css";
import { Color } from "../globalStyle/theme.css";

export const wrapper = style({
  position: "relative",
  border: "1px solid",
  borderColor: Color.border,
  borderRadius: 8,
  padding: 8,
  display: "flex",
  backgroundColor: Color.primary.default,
});
