import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { Color, ColorVar } from "../../styles";
import { textSprinkles } from "../../styles/typography.css";

export const checkboxWrapper = recipe({
  base: {
    display: "flex",
    gap: "8px",

    width: "fit-content",
  },
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
      },
      false: {
        cursor: "pointer",
      },
    },
  },
});
export const checkboxInput = recipe({
  base: {
    width: "16px",
    height: "16px",
    borderRadius: "4px",
    outline: "1px solid",
    outlineColor: Color.border,
    outlineOffset: "-1px",
    transition: "0.1s ease",
    backgroundColor: "transparent",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    disabled: {
      true: {
        outlineColor: "transparent",
        backgroundColor: ColorVar.greyBlue[9],
      },
    },
    checked: {
      true: {
        outlineColor: "transparent",
        backgroundColor: Color.primary.default,
      },
    },
  },
  compoundVariants: [
    {
      variants: { disabled: false, checked: false },
      style: {
        ":hover": { outlineColor: ColorVar.greyBlue[5] },
        selectors: {
          [`${checkboxWrapper()}:hover &`]: {
            outlineColor: ColorVar.greyBlue[5], // 부모가 hover되었을 때 변경됨
          },
        },
      },
    },
    {
      variants: { disabled: true, checked: true },
      style: {
        outlineColor: "transparent",
        backgroundColor: ColorVar.greyBlue[9],
      },
    },
  ],
});

export const checkboxLabel = recipe({
  base: [
    textSprinkles({
      text: "medium",
    }),
  ],
  variants: {
    disabled: {
      true: {
        color: Color.text.sub,
      },
      false: {
        color: Color.text.default,
      },
    },
  },
});

export const notDisplay = style({
  display: "none",
});

export const icon = recipe({
  base: {
    width: "12px",
    height: "12px",
    color: Color.bg,
    transition: "0.1s ease",
  },
  variants: {
    checked: {
      true: {
        opacity: 1,
      },
    },
  },
});
