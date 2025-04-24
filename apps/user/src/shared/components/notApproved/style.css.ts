import { textSprinkles } from "@repo/ui";
import { style } from "@vanilla-extract/css";

export const section = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  paddingTop: "150px",
  gap: "100px",
});

export const logo = style({
  width: "200px",
  height: "64px",
});

export const description = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  gap: "60px",
});
export const text = style([
  textSprinkles({
    heading: "medium",
  }),
]);
export const subtext = style([
  {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  textSprinkles({
    text: "2xlarge",
  }),
]);
export const buttonWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "12px",
  width: "240px",
});

export const button = style({
  height: "40px",
});
