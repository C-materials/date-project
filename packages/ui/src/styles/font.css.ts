import { globalFontFace, style } from "@vanilla-extract/css";

const pretendard = "Pretendard";
globalFontFace(pretendard, {
  src: "@repo/ui/node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  fontStyle: "normal",
  fontWeight: "100 900",
  fontDisplay: "swap",
});

export const font = style({
  fontFamily: pretendard,
});
