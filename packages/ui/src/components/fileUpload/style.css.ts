import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { Color } from "../../styles";

//imageInput
export const itemWrapper = style({});

export const basicInput = style({
  display: "none",
});

export const labelStyle = recipe({
  base: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    outline: "1px dashed",
    outlineColor: Color.border,
    outlineOffset: "-1px",
    borderRadius: "4px",
    padding: "10px",

    width: "300px",
    height: "120px",
    color: Color.text.default,
    backgroundColor: "transparent",

    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: 400,
  },
  variants: {
    border: {
      active: { borderColor: Color.accent.active },
      none: { borderColor: "transparent" },
    },
    disabled: {
      true: { cursor: "not-allowed" },
      false: { cursor: "pointer" },
    },
  },
  compoundVariants: [
    { variants: { disabled: true, border: "none" }, style: {} },
  ],
});
