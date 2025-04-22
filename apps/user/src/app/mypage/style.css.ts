import { Color, textSprinkles } from "@repo/ui";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const layoutMain = style({
  width: "560px",
  margin: "0 auto",
});

export const mypage = style({
  paddingTop: "80px",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});

export const titleWrapper = style({
  display: "flex",
  justifyContent: "space-between",
});

export const title = style([
  textSprinkles({
    heading: "xlarge",
  }),
]);
export const buttonWrapper = style({
  display: "flex",
  gap: "8px",
  height: "40px",
});

export const description = style([
  {
    color: Color.text.light,
    paddingTop: "12px",
  },
  textSprinkles({
    text: "medium",
  }),
]);

export const tabMenuWrapper = style({
  display: "flex",
  borderBottom: "1px solid",
  borderColor: Color.border,
});

export const tabMenuItem = recipe({
  base: [
    {
      padding: "8px",
      width: "80px",
      borderBottom: "1px solid transparent",
      textAlign: "center",
    },
    textSprinkles({
      text: "medium",
    }),
  ],
  variants: {
    isSelected: {
      true: {
        borderBottom: "2px solid",
        borderColor: Color.primary.default,
      },
      false: {},
    },
  },
});
