import { globalStyle } from "@vanilla-extract/css";
import { Color } from "./theme.css";

globalStyle("body", {
  backgroundColor: Color.bg,
  color: Color.text.default,
});
