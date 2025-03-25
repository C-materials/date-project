import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { Color, ColorVar } from "../../styles";

export const common = recipe({
  base: {
    borderRadius: "8px",
    padding: "8px 12px",
    transition: "background-color 0.1s ease, outline-color 0.1s ease",
    outlineOffset: "-1px",

    backgroundColor: ColorVar.greyBlue[9],
    color: Color.text.default,
    fontSize: "14px",
    lineHeight: "17px",
    fontWeight: 400,
    "::placeholder": {
      color: Color.text.sub,
    },
    ":focus": {
      outline: "1px solid",
      outlineColor: Color.primary.active,
    },
    selectors: {
      "&:not(:active):hover": {
        outlineColor: Color.border,
      },
    },
  },
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        backgroundColor: ColorVar.greyBlue[8],
        color: Color.text.sub,
      },
    },
    invalid: {
      true: {
        outline: "1px solid",
        outlineColor: Color.critical,
        // ":focus": {
        //   outlineColor: Color.primary.active,
        // },
        // ":hover": {
        //   outlineColor: Color.border,
        // },
      },
    },
  },
  compoundVariants: [
    {
      variants: { disabled: false },
      style: {
        // hover, focus
      },
    },
  ],
});

export const error = style({
  display: "block",
  color: Color.critical,
  lineHeight: "12px",
  fontSize: "10px",
  fontWeight: 400,
  width: "200px",
  // marginTop: "4px",
});

export const textarea = style({
  width: "200px",
  height: "100px",
});

export const input = style({
  width: "160px",
  height: "40px",
});

export const textfieldWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});
