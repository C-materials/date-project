import { style } from "@vanilla-extract/css";
import { Color } from "../../styles";

export const header = style({
  height: "72px",
  width: "100%",
  padding: "0 40px",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  background: Color.bg,
  color: Color.text.default,
  borderBottom: "1px solid",
  borderColor: Color.border,
});

export const itemWrapper = style({
  display: "flex",
  gap: "12px",
});

export const logoWrapper = style({
  display: "flex",
  gap: "40px",
  justifyContent: "space-between",
  alignItems: "center",
});
