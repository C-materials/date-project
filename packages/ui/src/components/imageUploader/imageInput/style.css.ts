import { Color } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const basicInput = style({
  display: "none",
});

export const labelStyle = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    gap: "10px",
    width: "100%",
    color: Color.text.inverse,
    fontSize: "10px",
    border: "2px dashed",
    borderRadius: "8px",
  },
  variants: {
    border: {
      active: { borderColor: Color.accent.active },
      none: { borderColor: "transparent" },
    },
  },
});
