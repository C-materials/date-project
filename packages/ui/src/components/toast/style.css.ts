import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { Color, textSprinkles } from "../../styles";

export const toast = recipe({
  base: [
    {
      outline: "1px solid",
      outlineOffset: "-1px",
      borderRadius: "8px",
      minWidth: "240px",
      minHeight: "44px",
      color: Color.text.default,
      padding: "12px 32px",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "4px",
      lineHeight: "20px",

      transition: "opacity 0.3s ease",

      position: "fixed",
    },
    textSprinkles({ text: "medium" }),
  ],
  variants: {
    type: {
      success: {
        outlineColor: Color.success,
        backgroundColor: "rgba(19, 88, 23, 0.7)",
      },
      warning: {
        outlineColor: Color.warning,
        backgroundColor: "rgba(127, 95, 7, 0.7)",
      },
      critical: {
        outlineColor: Color.critical,
        backgroundColor: "rgba(146, 25, 25, 0.7)",
      },
    },
    isOpen: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
});

export const iconStyle = style({
  width: "20px",
  height: "20px",
});
