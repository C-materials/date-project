import { style } from "@vanilla-extract/css";
import { Color } from "../../../globalStyle/theme.css";

export const deleteButton = style({
  position: "absolute",
  top: "-4px",
  right: "-4px",
  color: Color.bg,
});
