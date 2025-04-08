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

    transition: "0.3s ease",
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
      true: {
        backgroundColor: Color.accent.default,
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { disabled: false, checked: false },
      style: {
        ":hover": {
          backgroundColor: ColorVar.greyBlue[5],
        },
      },
    },
    {
      variants: { disabled: true, checked: false },
      style: {
        backgroundColor: ColorVar.greyBlue[8],
      },
    },
    {
      variants: { disabled: true, checked: true },
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
    transition: "background 1s ease, transform 0.3s ease",
  },
  variants: {
    disabled: {
      true: {
        backgroundColor: ColorVar.greyBlue[5],
      },
    },
    checked: {
      true: {
        transform: "translate(20px,0)",
      },
      false: {
        transform: "translate(0,0)",
      },
    },
  },
  compoundVariants: [
    {
      variants: { disabled: false, checked: false },
      style: {
        ":hover": {
          backgroundColor: Color.primary.active,
        },
      },
    },
    {
      variants: { disabled: false, checked: true },
      style: {
        backgroundColor: Color.primary.default,
      },
    },
  ],
});
