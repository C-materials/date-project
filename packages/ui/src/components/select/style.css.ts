import { style } from "@vanilla-extract/css";
import { ColorVar } from "../../styles";

export const selectWrapper = style({
  position: "relative",
  width: "fit-content",
  cursor: "pointer",
});

export const listWrapper = style({
  width: "100%",
  maxHeight: "200px",
  backgroundColor: ColorVar.greyBlue[9],
  color: ColorVar.white,
  borderRadius: "8px",
  padding: "4px",
  position: "absolute",
  top: "44px",
  zIndex: 10,
  overflow: "scroll",
});

export const listItem = style({
  borderRadius: "4px",
  padding: "8px",
  cursor: "pointer",
  width: "100%",
  height: "32px",
  ":hover": {
    backgroundColor: ColorVar.greyBlue[8],
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "14px",
  lineHeight: "17px",
});
