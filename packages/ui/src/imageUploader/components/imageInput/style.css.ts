import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { Color } from "../../../globalStyle/theme.css";

export const basicInput = style({
  display: "none",
});

export const base = style({
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
  borderColor: "transparent",
  borderRadius: "8px",
});

export const label = styleVariants({
  active: [
    base,
    {
      borderColor: Color.accent.active,
    },
  ],
  none: [base],
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
