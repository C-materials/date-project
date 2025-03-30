import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { Color, ColorVar } from "../../styles";

export const common = recipe({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

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
  width: "fit-content",
});

export const textfieldWrapper = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  width: "fit-content",
});

/**
 * 아이콘 클릭 안됨
 */
export const icon = recipe({
  base: {
    position: "absolute",
    top: "14px",
    right: "12px",
    transition: "transform 0.3s ease",
  },
  variants: {
    isOpen: {
      true: {
        transform: "rotate(180deg)",
      },
      false: {
        transform: "rotate(0deg)",
      },
    },
    disabled: {
      true: {
        ":hover": {
          cursor: "not-allowed",
        },
      },
      false: {},
    },
  },
});

export const innerInput = style({});
