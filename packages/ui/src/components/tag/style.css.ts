import { recipe } from "@vanilla-extract/recipes";
import { Color } from "../../styles";

export const tag = recipe({
  base: {
    padding: "8px 12px",
    borderRadius: "1000px",
    height: "32px",
    width: "fit-content",

    fontSize: "14px",
    lineHeight: "17px",
    fontWeight: 500,

    listStyle: "none",
  },
  variants: {
    variant: {
      default: {
        backgroundColor: Color.secondary.default,
        color: Color.text.default,
      },
      active: {
        backgroundColor: Color.primary.default,
        color: Color.text.inverse,
      },
      accent: {
        backgroundColor: Color.accent.default,
        color: Color.text.default,
      },
    },
    disabled: {
      true: {
        ":hover": { cursor: "not-allowed" },
      },
      false: {
        ":hover": { cursor: "pointer" },
      },
    },
  },
  compoundVariants: [
    {
      variants: { variant: "default", disabled: false },
      style: {
        ":hover": {
          backgroundColor: Color.secondary.hover,
        },
      },
    },
    {
      variants: { variant: "active", disabled: false },
      style: {
        ":hover": {
          backgroundColor: Color.primary.hover,
        },
      },
    },
    {
      variants: { variant: "accent", disabled: false },
      style: {
        ":hover": {
          backgroundColor: Color.accent.hover,
        },
      },
    },
    {
      variants: { variant: "default", disabled: true },
      style: {
        color: Color.text.sub,
      },
    },
    {
      variants: { variant: "active", disabled: true },
      style: {
        color: Color.text.light,
      },
    },
    {
      variants: { variant: "accent", disabled: true },
      style: {
        color: Color.text.sub,
        backgroundColor: Color.accent.disabled,
      },
    },
  ],
});
