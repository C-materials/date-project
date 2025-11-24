import { Color, textSprinkles } from "@repo/ui";
import { style } from "@vanilla-extract/css";

export const text = style([
  {
    color: Color.text.default,
  },
  textSprinkles({ text: "medium" }),
]);
