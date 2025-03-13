import { style, styleVariants } from "@vanilla-extract/css";
import { sprinkles } from "../globalStyle/sprinkles.css";
import { Color } from "../globalStyle/theme.css";

const base = style([
  sprinkles({
    paddingX: 12,
    paddingY: 8,
    placeItems: "center",
  }),
  {
    height: 40,
    borderRadius: 8,
  },
]);

export const buttonVariant = styleVariants({
  primary: [
    base,
    {
      backgroundColor: Color.primary.default,
      color: Color.text.inverse,
      ":hover": { backgroundColor: Color.primary.hover },
      ":active": { backgroundColor: Color.primary.active },
      ":disabled": { color: Color.text.light },
    },
  ],
  secondary: [
    base,
    {
      backgroundColor: Color.secondary.default,
      ":hover": { backgroundColor: Color.secondary.hover },
      ":active": { backgroundColor: Color.secondary.active },
      ":disabled": { color: Color.text.sub },
    },
  ],
  outline: [
    base,
    {
      border: "1px solid",
      borderColor: Color.border,
      backgroundColor: "transparent",
      ":hover": { borderColor: Color.outline.hover },
      ":active": { borderColor: Color.outline.active },
      ":disabled": {
        borderColor: Color.outline.disabled,
        color: Color.text.sub,
      },
    },
  ],
  accent: [
    base,
    {
      backgroundColor: Color.accent.default,
      ":hover": { backgroundColor: Color.accent.hover },
      ":active": { backgroundColor: Color.accent.active },
      ":disabled": {
        backgroundColor: Color.accent.disabled,
        color: Color.text.sub,
      },
    },
  ],
});
