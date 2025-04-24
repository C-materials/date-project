import { Color, textSprinkles } from "@repo/ui";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

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

  position: "relative",
});

export const logoWrapper = style({
  display: "flex",
  gap: "40px",
  justifyContent: "space-between",
  alignItems: "center",
});

export const logo = style({
  width: "81px",
  height: "26px",
  display: "flex",
});

export const menuItem = style([
  {
    padding: "8px",
    paddingBottom: "3px",
  },
  textSprinkles({
    text: "large",
  }),
]);

export const userIcon = style({
  width: "28px",
  height: "28px",
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
export const relative = style({
  position: "relative",
});
// ---- ProfileMenu ----
export const menuWrapper = style({
  position: "absolute",
  right: 0,
  top: calc.add("100%", "28px").toString(),
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

export const infoName = style([
  {
    color: Color.text.default,
  },
  textSprinkles({ text: "medium" }),
]);

export const infoTel = style([
  {
    color: Color.text.light,
  },
  textSprinkles({ text: "2xsmall" }),
]);

export const listWrapper = style([
  {
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  textSprinkles({ text: "medium" }),
]);

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
