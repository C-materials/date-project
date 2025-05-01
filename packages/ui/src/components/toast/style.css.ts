import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { Color, textSprinkles, Zindex } from "../../styles";

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

      transition: "opacity 0.3s ease",

      position: "fixed",
      left: "50%",
      transform: "translate(-50%, 0)",

      zIndex: Zindex.highest,
      backdropFilter: `blur(1px)`,
    },
    textSprinkles({ text: "medium" }),
  ],
  variants: {
    type: {
      success: {
        outlineColor: Color.success.default,
        backgroundColor: Color.success.toast,
      },
      warning: {
        outlineColor: Color.warning.default,
        backgroundColor: Color.warning.toast,
      },
      critical: {
        outlineColor: Color.critical.default,
        backgroundColor: Color.critical.toast,
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
