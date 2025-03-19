import { spacingSprinkles } from "@styles/sprinkles.css";
import { Color } from "@styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

const base = style([
  spacingSprinkles({
    paddingX: 12,
    paddingY: 8,
    placeItems: "flexCenter",
  }),
  {
    height: 40,
    borderRadius: 8,
    gap: 4,
  },
]);
// recipe로 바꿔보기
export const buttonStyle = styleVariants({
  primary: [
    base,
    {
      backgroundColor: Color.primary.default,
      color: Color.text.inverse,
      ":active": { backgroundColor: Color.primary.active },
      ":disabled": { color: Color.text.light },
      selectors: {
        "&:not(:disabled):hover": {
          backgroundColor: Color.primary.hover,
        },
      },
    },
  ],
  secondary: [
    base,
    {
      backgroundColor: Color.secondary.default,
      ":active": { backgroundColor: Color.secondary.active },
      ":disabled": { color: Color.text.sub },
      selectors: {
        "&:not(:disabled):hover": {
          backgroundColor: Color.secondary.hover,
        },
      },
    },
  ],
  outline: [
    base,
    {
      border: "1px solid",
      borderColor: Color.border,
      backgroundColor: "transparent",
      ":active": { borderColor: Color.outline.active },
      ":disabled": {
        borderColor: Color.outline.disabled,
        color: Color.text.sub,
      },
      selectors: {
        "&:not(:disabled):hover": {
          backgroundColor: Color.outline.hover,
        },
      },
    },
  ],
  accent: [
    base,
    {
      backgroundColor: Color.accent.default,
      ":active": { backgroundColor: Color.accent.active },
      ":disabled": {
        backgroundColor: Color.accent.disabled,
        color: Color.text.sub,
      },
      selectors: {
        "&:not(:disabled):hover": {
          backgroundColor: Color.accent.hover,
        },
      },
    },
  ],
});
