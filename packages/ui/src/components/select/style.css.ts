import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { ColorVar } from "../../styles";
import { Zindex } from "../../styles/zIndex.css";

export const selectWrapper = style({
  position: "relative",
  width: "fit-content",
  cursor: "pointer",
});

export const listWrapper = style({
  width: "100%",
  maxHeight: "200px",
  backgroundColor: ColorVar.greyBlue[8],
  color: ColorVar.white,
  borderRadius: "8px",
  padding: "4px",
  position: "absolute",
  top: "44px",
  zIndex: Zindex.dropdown,
  overflow: "scroll",
});

export const listItem = style({
  borderRadius: "4px",
  padding: "8px",
  cursor: "pointer",
  width: "100%",
  height: "32px",
  ":hover": {
    backgroundColor: ColorVar.greyBlue[7],
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "14px",
  lineHeight: "17px",
});

export const icon = recipe({
  base: {
    position: "absolute",
    top: "14px",
    right: "12px",
    transition: "transform 0.3s ease",

    width: "12px",
    height: "12px",

    color: ColorVar.grey[4],
  },
  variants: {
    isOpen: {
      true: {
        transform: "rotate(180deg)",
      },
      false: {
        transform: "rotate(0deg)",
      },
    },
    disabled: {
      true: {
        ":hover": {
          cursor: "not-allowed",
        },
      },
    },
  },
});
