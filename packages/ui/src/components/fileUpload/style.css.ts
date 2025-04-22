import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { Color, ColorVar } from "../../styles";
import { textSprinkles } from "../../styles/typography.css";

//imageInput
export const itemWrapper = style({});

export const labelStyle = recipe({
  base: [
    {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "12px",

      width: "100%",
      height: "120px",
      padding: "10px",

      outline: "1px dashed",
      outlineColor: Color.border,
      outlineOffset: "-1px",
      borderRadius: "4px",

      color: Color.text.default,
      backgroundColor: "transparent",

      transition: "background-color 0.1s ease",
    },
    textSprinkles({ text: "small" }),
  ],
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        backgroundColor: ColorVar.greyBlue[9],
        color: Color.text.sub,
      },
      false: { cursor: "pointer" },
    },
    isDropActive: {
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { disabled: false, isDropActive: false },
      style: {
        ":hover": {
          backgroundColor: ColorVar.greyBlue[9],
        },
      },
    },
    {
      variants: { disabled: false, isDropActive: true },
      style: {
        outlineColor: ColorVar.greyBlue[4],
      },
    },
  ],
});
export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "center",
});

export const button = recipe({
  base: [
    {
      fontSize: "12px",
      lineHeight: "14px",
      height: "28px",
      borderRadius: "4px",
    },
    textSprinkles({
      text: "small",
    }),
  ],
  variants: {
    disabled: {
      true: {
        backgroundColor: `${Color.secondary.default} !important`,
      },
    },
  },
});

export const icon = recipe({
  base: {
    width: "20px",
    height: "20px",
  },
  variants: {
    disabled: {
      true: {
        color: Color.text.sub,
      },
      false: {
        color: Color.text.light,
      },
    },
  },
});
