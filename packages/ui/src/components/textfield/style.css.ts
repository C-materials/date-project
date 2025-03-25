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
    ":disabled": {
      cursor: "not-allowed",
    },
  },
  variants: {
    disabled: {
      true: {
        backgroundColor: ColorVar.greyBlue[8],
        color: Color.text.sub,
      },
    },
    invalid: {
      true: {
        outline: "1px solid",
        outlineColor: Color.critical,
      },
    },
  },
  compoundVariants: [
    {
      variants: { disabled: false, invalid: false },
      style: {
        ":hover": {
          outlineColor: Color.border,
        },
      },
    },
    {
      variants: { disabled: true, invalid: false },
      style: {},
    },
  ],
});

export const error = style({
  color: Color.critical,
  lineHeight: "12px",
  fontSize: "10px",
  fontWeight: 400,
  maxWidth: "160px",
  minHeight: "12px",
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
