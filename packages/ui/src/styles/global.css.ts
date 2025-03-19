import { globalStyle } from "@vanilla-extract/css";
import "./layers.css";
import "./reset.css";
import { Color } from "./theme.css";

globalStyle("body", {
  backgroundColor: Color.bg,
  color: Color.text.default,
  // font 설정 추가
});
