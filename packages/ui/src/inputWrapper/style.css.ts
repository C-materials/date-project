import {
  style,
  globalStyle,
  createVar,
  createTheme,
  createThemeContract,
  styleVariants,
} from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapper = recipe({
  base: {
    borderRadius: 8,
    paddingTop: 24,
    paddingBottom: 24,
    color: "white",
  },
  variants: {
    size: {
      mobile: { width: 200 },
      desktop: { width: 400 },
    },
  },
});
