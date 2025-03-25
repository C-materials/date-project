import { style } from "@vanilla-extract/css";
import { Color } from "../../../styles/theme.css";

export const deleteButton = style({
  position: "absolute",
  top: "-4px",
  right: "-4px",
  color: Color.bg,
});
