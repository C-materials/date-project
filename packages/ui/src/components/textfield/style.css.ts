import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { Color, ColorVar } from "../../styles";

export const common = recipe({
  base: {
    display: "flex",
    alignItems: "center",

    borderRadius: "8px",
    padding: "8px 12px",
    transition: "background-color 0.1s ease, outline-color 0.1s ease",
    outlineOffset: "-1px",

    backgroundColor: ColorVar.greyBlue[8],
    color: Color.text.default,
    fontSize: "14px",
    lineHeight: "17px",
    fontWeight: 400,
    outline: "1px solid transparent",
    "::placeholder": {
      color: Color.text.sub,
    },
  },
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        backgroundColor: ColorVar.greyBlue[7],
        color: Color.text.sub,
      },
    },
    invalid: {
      true: {
        outlineColor: Color.critical,
      },
    },
  },
  compoundVariants: [
    {
      variants: { disabled: true, invalid: false },
      style: {
        ":hover": {
          outlineColor: "transparent",
        },
      },
    },
    {
      variants: { disabled: true, invalid: true },
      style: {
        ":hover": {
          outlineColor: Color.critical,
        },
      },
    },
    {
      variants: { disabled: false, invalid: true },
      style: {
        ":hover": {
          outlineColor: Color.critical,
        },
        ":focus": {
          outlineColor: Color.primary.active,
        },
      },
    },
    {
      variants: { disabled: false, invalid: false },
      style: {
        ":hover": {
          outlineColor: Color.border,
        },
        ":focus": {
          outlineColor: Color.primary.active,
        },
      },
    },
  ],
});

export const error = style({
  color: Color.critical,
  lineHeight: "12px",
  fontSize: "10px",
  fontWeight: 400,
  minHeight: "12px",
  marginLeft: "2px",
  cursor: "default",
  display: "block",
  width: "fit-content",
});

export const textarea = style({
  height: "100px",
});

export const input = style({
  height: "40px",
  width: "100%",
});

export const textfieldWrapper = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const innerInput = style({});
