import { recipe } from "@vanilla-extract/recipes";
import { Color } from "../../styles";
import { textSprinkles } from "../../styles/typography.css";

export const tag = recipe({
  base: [
    {
      padding: "8px 12px",
      borderRadius: "1000px",
      height: "32px",
      width: "fit-content",

      listStyle: "none",
    },
    textSprinkles({
      text: "medium",
    }),
  ],
  variants: {
    tagStyle: {
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
      variants: { tagStyle: "default", disabled: false },
      style: {
        ":hover": {
          backgroundColor: Color.secondary.hover,
        },
      },
    },
    {
      variants: { tagStyle: "active", disabled: false },
      style: {
        ":hover": {
          backgroundColor: Color.primary.hover,
        },
      },
    },
    {
      variants: { tagStyle: "accent", disabled: false },
      style: {
        ":hover": {
          backgroundColor: Color.accent.hover,
        },
      },
    },
    {
      variants: { tagStyle: "default", disabled: true },
      style: {
        color: Color.text.sub,
      },
    },
    {
      variants: { tagStyle: "active", disabled: true },
      style: {
        color: Color.text.light,
      },
    },
    {
      variants: { tagStyle: "accent", disabled: true },
      style: {
        color: Color.text.sub,
        backgroundColor: Color.accent.disabled,
      },
    },
  ],
});
