import { Color, ColorVar } from "@repo/ui";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const bg = style({
  background: `linear-gradient(${ColorVar.greyBlue[9]} 0%, ${ColorVar.blue.dark[8]} 100%)`,
  height: "100dvh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const contentWrapper = recipe({
  base: {
    backgroundColor: Color.bg,
    borderRadius: "12px",
    margin: "0 auto",
    width: "420px",
  },
  variants: {
    isLoginPage: {
      true: {
        padding: "80px 90px",
      },
      false: {
        padding: "40px 90px",
      },
    },
  },
});
