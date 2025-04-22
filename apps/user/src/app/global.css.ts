import { globalStyle } from "@vanilla-extract/css";

globalStyle("main", {
  paddingTop: "72px",
});

/* input type="number" 화살표 제거; */
/* Chrome, Safari, Edge, Opera */

globalStyle("input::-webkit-outer-spin-button", {
  WebkitAppearance: "none",
  margin: 0,
});

globalStyle("input::-webkit-inner-spin-button", {
  WebkitAppearance: "none",
  margin: 0,
});

/* Firefox  */
globalStyle('input[type="number"]', {
  MozAppearance: "textfield",
});
