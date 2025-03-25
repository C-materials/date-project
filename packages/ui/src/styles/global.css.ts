import { globalStyle } from "@vanilla-extract/css";
import "./layers.css";
import "./reset.css";
import { Color } from "./theme.css";

globalStyle("body", {
  backgroundColor: Color.bg,
  color: Color.text.default,
  fontFamily: "Pretendard",
  fontWeight: 400,
  lineHeight: 1.5,
});
