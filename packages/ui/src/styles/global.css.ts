import { globalStyle } from "@vanilla-extract/css";
import { font } from "./font.css";
import "./layers.css";
import "./reset.css";
import { Color } from "./theme.css";

globalStyle("body", {
  backgroundColor: Color.bg,
  color: Color.text.default,
  fontFamily: font,
  fontWeight: 400,
  lineHeight: 1.5,
});
