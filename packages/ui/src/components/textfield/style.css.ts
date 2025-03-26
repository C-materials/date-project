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
    outline: "1px solid transparent",
    "::placeholder": {
      color: Color.text.sub,
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
        ":focus": {
          outlineColor: Color.primary.active,
        },
      },
      false: {
        ":hover": {
          outlineColor: Color.border,
        },
        ":focus": {
          outlineColor: Color.primary.active,
        },
      },
    },
  },
  compoundVariants: [
    {
      variants: { disabled: false, invalid: false },
      style: {},
    },
    {
      variants: { disabled: false, invalid: true },
      style: {},
    },
    {
      variants: { disabled: true, invalid: true },
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
  marginLeft: "2px",
  cursor: "default",
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
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  width: "fit-content",
});

// show true이면 뒤집기
export const icon = recipe({
  base: {
    position: "absolute",
    top: "14px",
    right: "12px",
    transition: "transform 0.3s ease",
  },
  variants: {
    show: {
      true: {
        transform: "rotate(180deg)",
      },
      false: {
        transform: "rotate(0deg)",
      },
    },
  },
});
