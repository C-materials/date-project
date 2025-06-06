import { style, styleVariants } from "@vanilla-extract/css";
import { spacingSprinkles } from "../../styles/sprinkles.css";
import { Color } from "../../styles/theme.css";

const base = style([
  spacingSprinkles({
    paddingX: "12px",
    paddingY: "8px",
    placeItems: "flexCenter",
  }),
  {
    borderRadius: "8px",
    gap: "4px",
    ":disabled": { cursor: "not-allowed" },
    transition: "background-color 0.1s ease, border-color 0.1s ease",
    border: "1px solid",
    borderColor: "transparent",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "17px",
  },
]);
// recipe로 바꿔보기
export const buttonStyle = styleVariants({
  primary: [
    base,
    {
      backgroundColor: Color.primary.default,
      color: Color.text.inverse,
      ":disabled": { color: Color.text.light },
      selectors: {
        "&:not(:disabled):hover": {
          backgroundColor: Color.primary.hover,
        },
        "&:not(:disabled):active": {
          backgroundColor: Color.primary.active,
        },
      },
    },
  ],
  secondary: [
    base,
    {
      backgroundColor: Color.secondary.default,
      ":disabled": { color: Color.text.sub },
      selectors: {
        "&:not(:disabled):hover": {
          backgroundColor: Color.secondary.hover,
        },
        "&:not(:disabled):active": {
          backgroundColor: Color.secondary.active,
        },
      },
    },
  ],
  outline: [
    base,
    {
      borderColor: Color.border,
      backgroundColor: "transparent",
      ":disabled": {
        borderColor: Color.outline.disabled,
        color: Color.text.sub,
      },
      selectors: {
        "&:not(:disabled):hover": {
          backgroundColor: Color.outline.hover,
        },
        "&:not(:disabled):active": {
          backgroundColor: Color.outline.active,
        },
      },
    },
  ],
  accent: [
    base,
    {
      backgroundColor: Color.accent.default,
      ":disabled": {
        backgroundColor: Color.accent.disabled,
        color: Color.text.sub,
      },
      selectors: {
        "&:not(:disabled):hover": {
          backgroundColor: Color.accent.hover,
        },
        "&:not(:disabled):active": {
          backgroundColor: Color.accent.active,
        },
      },
    },
  ],
});
