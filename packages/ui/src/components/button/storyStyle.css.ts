import { style } from "@vanilla-extract/css";
import { Color } from "../../styles";

export const story = style({
  backgroundColor: Color.bg,
  display: "flex",
  gap: "8px",
  padding: "12px",
});
