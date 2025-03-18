import { style } from "@vanilla-extract/css";
import { Color } from "../../../globalStyle/theme.css";

export const deleteButton = style({
  position: "absolute",
  top: 0,
  right: 0,
  transform: "translateY(-30%) translateX(30%)",
  color: Color.bg,
});
