import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { Color, ColorVar, textSprinkles, Zindex } from "../../styles";

// background
export const dialogBackground = style({
  background: ColorVar.greyBlue[10],
  opacity: "0.5",
  width: "100vw",
  height: "100vh",
  padding: "24px",
  zIndex: Zindex.modalBackground,
  display: "block",
  content: '""',

  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
});

// wrapper
export const dialogWrapper = recipe({
  base: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
