import { globalStyle } from "@vanilla-extract/css";
import { Color } from "./theme.css";
import "./layers.css";
import "./reset.css";

globalStyle("body", {
  backgroundColor: Color.bg,
  color: Color.text.default,
  // font 설정 추가
});
