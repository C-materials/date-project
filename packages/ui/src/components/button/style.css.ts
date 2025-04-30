import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { Color, ColorVar } from "../../styles/theme.css";
import { textSprinkles } from "../../styles/typography.css";

export const button = recipe({
  base: [
    {
      padding: "8px 12px",
      minHeight: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "8px",
      gap: "4px",
      ":disabled": { cursor: "not-allowed" },
      transition: "background-color 0.1s ease, outline-color 0.1s ease",
      outline: "1px solid",
      outlineColor: "transparent",
      outlineOffset: "-1px",
    },
    textSprinkles({ text: "mediumBold" }),
  ],
  variants: {
    variant: {
      primary: {
        backgroundColor: Color.primary.default,
        color: Color.text.inverse,
      },
      secondary: {
        backgroundColor: Color.secondary.default,
        color: Color.text.default,
      },
      outline: {
        backgroundColor: Color.bg,
        color: Color.text.default,
        outlineWidth: "1px",
        outlineStyle: "solid",
        outlineColor: Color.border,
      },
      accent: {
        backgroundColor: Color.accent.default,
        color: Color.text.default,
      },
    },
    disabled: {
      true: {
        cursor: "not-allowed",
      },
    },
    isLoading: {
      true: {},
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
          outlineColor: Color.outline.hover,
        },
        ":active": {
          outlineColor: Color.outline.active,
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
    // disabled 스타일 정의
    {
      variants: { variant: "primary", disabled: true },
      style: {
        backgroundColor: Color.primary.disabled,
        color: Color.text.disabled,
      },
    },
    {
      variants: { variant: "secondary", disabled: true },
      style: {
        backgroundColor: Color.secondary.default,
        color: Color.text.sub,
      },
    },
    {
      variants: { variant: "outline", disabled: true },
      style: {
        outlineColor: ColorVar.greyBlue[8],
        color: Color.text.sub,
      },
    },
    {
      variants: { variant: "accent", disabled: true },
      style: {
        backgroundColor: Color.accent.disabled,
        color: Color.text.sub,
      },
    },
    // isLoading 스타일 정의
    {
      variants: { variant: "primary", isLoading: true },
      style: {
        backgroundColor: Color.primary.active,
        color: Color.text.disabled,
      },
    },
    {
      variants: { variant: "secondary", isLoading: true },
      style: {
        backgroundColor: Color.secondary.default,
        color: Color.text.disabled,
      },
    },
    {
      variants: { variant: "outline", isLoading: true },
      style: { outlineColor: ColorVar.greyBlue[8], color: Color.text.sub },
    },
    {
      variants: { variant: "accent", isLoading: true },
      style: { backgroundColor: Color.accent.disabled, color: Color.text.sub },
    },
  ],
});

export const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});
export const loadingSpinner = style({
  width: "20px",
  height: "20px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  animation: `${rotate} 1s`,
  animationIterationCount: "infinite",
  animationTimingFunction: "ease-out",
});

export const icon = recipe({
  base: { color: Color.text.sub },
  variants: {
    variant: {
      primary: { color: Color.text.disabled },
      secondary: {},
      outline: {},
      accent: {},
    },
  },
});
