import { Color, ColorVar } from "@repo/ui";
import { style } from "@vanilla-extract/css";

export const image = style({
  borderRadius: "4px",
  backgroundColor: ColorVar.greyBlue[8],

  position: "relative",

  content: "",
  display: "block",
  objectFit: "cover",
});
export const deleteButton = style({
  width: "12px",
  height: "12px",
  borderRadius: "1000px",
  backgroundColor: Color.secondary.default,
  padding: "2px",

  position: "absolute",
  top: "-3.5px",
  right: "-4px",

  display: "none",
  justifyContent: "center",
  alignItems: "center",

  cursor: "pointer",
  selectors: {
    [`${image}:hover &`]: {
      display: "flex",
    },
  },
});
