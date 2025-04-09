import { style } from "@vanilla-extract/css";
import { Color } from "../../styles/theme.css";

export const header = style({
  position: "fixed",
  top: 0,
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
  alignItems: "center",
  gap: "12px",
});

export const logoWrapper = style({
  display: "flex",
  gap: "40px",
  justifyContent: "space-between",
  alignItems: "center",
});

export const menuItem = style({
  padding: "8px",
  fontSize: "16px",
  lineHeight: "19px",
  fontWeight: 400,
});

export const userProfile = style({
  width: "36px",
  height: "36px",
  borderRadius: "999px",
  backgroundColor: Color.primary.default,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

// ---- ProfileMenu ----
export const menuWrapper = style({
  position: "absolute",
  top: "79px",
  right: "44px",

  display: "flex",
  flexDirection: "column",

  width: "200px",
  borderRadius: "8px",
  backgroundColor: Color.secondary.default,
});

export const infoWrapper = style({
  padding: "16px",
  display: "flex",
  gap: "10px",
});

export const info = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const infoName = style({
  fontSize: "14px",
  lineHeight: "17px",
  fontWeight: 500,
  color: Color.text.default,
});

export const infoTel = style({
  fontSize: "10px",
  lineHeight: "12px",
  fontWeight: 400,
  color: Color.text.light,
});

export const listWrapper = style({
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",

  fontSize: "14px",
  lineHeight: "17px",
  fontWeight: 500,
});

export const listItem = style({
  padding: "8px",
  borderRadius: "4px",
  backgroundColor: "transparent",
  transition: "background 0.1s ease",
  cursor: "pointer",
  ":hover": {
    backgroundColor: Color.secondary.hover,
  },
});
