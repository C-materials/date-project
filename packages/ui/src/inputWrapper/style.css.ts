import {
  style,
  globalStyle,
  createVar,
  createTheme,
  createThemeContract,
  styleVariants,
} from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapper = style({
  border: "1px solid",
  borderRadius: 8,
});
