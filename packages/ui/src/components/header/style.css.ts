import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { Color } from "../../styles";

export const header = style({
  height: "72px",
  width: "100%",
  padding: "0 40px",

  display: "flex",
  justifyContent: "space-between",

  background: Color.bg,
  color: Color.text.default,
});

export const menuItem = recipe({
  base: {},
  variants: {
    selected: {
      true: {},
    },
  },
});
