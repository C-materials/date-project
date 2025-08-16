import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { Color, ColorVar, textSprinkles, Zindex } from "../../styles";

// background
export const dialogBackground = style({
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  background: ColorVar.greyBlue["10alpha50"],
  width: "100dvw",
  height: "100dvh",
  padding: "24px",
  zIndex: Zindex.modalBackground,
  inset: 0,
});

// wrapper
export const dialogWrapper = recipe({
  base: {
    position: "relative",
    backgroundColor: Color.bg,
    borderRadius: "8px",
    outline: "1px solid",
    outlineOffset: "-1px",
    outlineColor: Color.border,
    padding: "24px",
    zIndex: Zindex.modal,
  },
  variants: {
    isMobile: {
      true: {
        width: "100%",
      },
      false: {
        width: "420px",
      },
    },
  },
});

export const dialogChildren = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const closeButtonStyle = style({
  position: "absolute",
  top: "12px",
  right: "12px",
  zIndex: Zindex.overlay,
  width: "16px",
  height: "16px",
});

// header
export const dialogHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const dialogTitle = style([
  {
    color: Color.text.default,
  },
  textSprinkles({ heading: "medium" }),
]);

export const dialogDescription = style([
  {
    color: Color.text.light,
  },
  textSprinkles({ text: "medium" }),
]);

// content
export const bodyContent = style([
  {
    color: Color.text.default,
  },
  textSprinkles({ text: "large" }),
]);

// footer
export const dialogFooter = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "8px",
});
