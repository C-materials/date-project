import { style } from "@vanilla-extract/css";
import { Color } from "../../styles";

export const radioInput = style({
  borderRadius: "50%",
});

export const icon = style({
  borderRadius: "50%",
  backgroundColor: Color.bg,
  width: "10px",
  height: "10px",
  transition: "0.1s ease",
});
