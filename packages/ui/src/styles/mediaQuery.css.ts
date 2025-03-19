import { createGlobalTheme } from "@vanilla-extract/css";

//반응형 미디어쿼리
export const Media = createGlobalTheme(":root", {
  SCREEN_SM: "screen and (min-width: 600px)",
  SCREEN_MD: "screen and (min-width: 768px)",
  SCREEN_LG: "screen and (min-width: 1024px)",
  SCREEN_XL: "screen and (min-width: 1440px)",
});

export type MEDIA = typeof Media;
