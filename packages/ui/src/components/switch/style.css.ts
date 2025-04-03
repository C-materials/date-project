import { recipe } from "@vanilla-extract/recipes";
import { Color, ColorVar } from "../../styles";

export const switchStyle = recipe({
  base: {
    display: "flex",

    width: "40px",
    height: "20px",
    borderRadius: "999px",
    padding: "2px",

    backgroundColor: ColorVar.greyBlue[6],

    transition: "0.1s ease",
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
    isChecked: {
      true: {
        backgroundColor: Color.accent.default,
        justifyContent: "flex-end",
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { disabled: false, isChecked: false },
      style: {
        ":hover": {
          backgroundColor: ColorVar.greyBlue[5],
        },
      },
    },
    {
      variants: { disabled: true, isChecked: false },
      style: {
        backgroundColor: ColorVar.greyBlue[8],
      },
    },
    {
      variants: { disabled: true, isChecked: true },
      style: {
        backgroundColor: ColorVar.blue.dark[7],
      },
    },
  ],
});

export const toggle = recipe({
  base: {
    display: "block",
    width: "16px",
    height: "16px",
    borderRadius: "50%",

    backgroundColor: Color.primary.active,
    transition: "0.1s ease",
  },
  variants: {
    disabled: {
      true: {
        backgroundColor: ColorVar.greyBlue[5],
      },
    },
    isChecked: { true: {} },
  },
  compoundVariants: [
    {
      variants: { disabled: false, isChecked: false },
      style: {
        ":hover": {
          backgroundColor: Color.primary.active,
        },
      },
    },
    {
      variants: { disabled: false, isChecked: true },
      style: {
        backgroundColor: Color.primary.default,
      },
    },
  ],
});
