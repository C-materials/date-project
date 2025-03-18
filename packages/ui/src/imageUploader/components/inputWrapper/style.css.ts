import { style } from "@vanilla-extract/css";
import { Color } from "../../../globalStyle/theme.css";

export const wrapper = style({
  position: "relative",
  border: "1px solid",
  borderColor: Color.border,
  borderRadius: "8px",
  padding: "8px",
  display: "flex",
  backgroundColor: Color.primary.default,
  cursor: "pointer",
});
