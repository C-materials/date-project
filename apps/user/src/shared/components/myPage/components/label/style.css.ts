import { Color, textSprinkles } from "@repo/ui";
import { style } from "@vanilla-extract/css";

export const label = style([
  {
    color: Color.primary.default,
    cursor: "default",
    paddingBottom: "10px",
    display: "inline-block",
  },
  textSprinkles({ text: "medium" }),
]);
