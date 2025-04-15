import { recipe } from "@vanilla-extract/recipes";
import { Color, ColorVar } from "../../styles/theme.css";

export const button = recipe({
  base: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    borderRadius: "8px",
    minHeight: "40px",
    padding: "0 12px",
    transition: "background-color 0.1s ease, outline-color 0.1s ease",

    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "17px",

    outlineOffset: "-1px",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: Color.primary.default,
        color: Color.text.inverse,
        ":disabled": {
          backgroundColor: Color.primary.disabled,
          color: Color.text.disabled,
        },
      },
      secondary: {
        backgroundColor: Color.secondary.default,
        color: Color.text.default,
        ":disabled": {
          backgroundColor: Color.secondary.default,
          color: Color.text.sub,
        },
      },
      outline: {
        backgroundColor: Color.bg,
        color: Color.text.default,
        outlineWidth: "1px",
        outlineStyle: "solid",
        outlineColor: Color.border,
        ":disabled": {
          outlineColor: ColorVar.greyBlue[8],
          color: Color.text.sub,
        },
      },
      accent: {
        backgroundColor: Color.accent.default,
        color: Color.text.default,
        ":disabled": {
          backgroundColor: Color.accent.disabled,
          color: Color.text.sub,
        },
      },
    },
    disabled: {
      true: {
        cursor: "not-allowed",
      },
    },
  },
  compoundVariants: [
    {
      variants: { variant: "primary", disabled: false },
      style: {
        ":hover": {
          backgroundColor: Color.primary.hover,
        },
        ":active": {
          backgroundColor: Color.primary.active,
        },
      },
    },
    {
      variants: { variant: "secondary", disabled: false },
      style: {
        ":hover": {
          backgroundColor: Color.secondary.hover,
        },
        ":active": {
          backgroundColor: Color.secondary.active,
        },
      },
    },
    {
      variants: { variant: "outline", disabled: false },
      style: {
        ":hover": {
          outlineColor: ColorVar.greyBlue[4],
        },
        ":active": {
          outlineColor: ColorVar.greyBlue[2],
        },
      },
    },
    {
      variants: { variant: "accent", disabled: false },
      style: {
        ":hover": {
          backgroundColor: Color.accent.hover,
        },
        ":active": {
          backgroundColor: Color.accent.active,
        },
      },
    },
  ],
});
