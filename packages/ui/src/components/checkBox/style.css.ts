import { recipe } from "@vanilla-extract/recipes";
import { Color, ColorVar } from "../../styles";

export const checkboxWrapper = recipe({
  base: {
    display: "flex",
    alignItems: "center", // 텍스트랑 체크박스 높이가 안맞음
    gap: "8px",
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
    checked: {
      true: {},
      false: {
        // 체크박스 hover 스타일
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
  base: {
    fontSize: "14px",
    lineHeight: "17px",
  },
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
