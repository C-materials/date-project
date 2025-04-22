import { createGlobalTheme } from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

// text 토큰
export const FontWeight = createGlobalTheme(":root", {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
});

const sprinkles = defineProperties({
  properties: {
    text: {
      "2xsmall": {
        fontSize: "10px",
        lineHeight: "12px",
        fontWeight: FontWeight.regular,
      },
      xsmall: {
        fontSize: "11px",
        lineHeight: "13px",
        fontWeight: FontWeight.regular,
      },
      small: {
        fontSize: "12px",
        lineHeight: "14px",
        fontWeight: FontWeight.semibold,
      },
      smallBold: {
        fontSize: "12px",
        lineHeight: "14px",
        fontWeight: FontWeight.regular,
      },
      medium: {
        fontSize: "14px",
        lineHeight: "17px",
        fontWeight: FontWeight.regular,
      },
      mediumBold: {
        fontSize: "14px",
        lineHeight: "17px",
        fontWeight: FontWeight.semibold,
      },
      large: {
        fontSize: "16px",
        lineHeight: "19px",
        fontWeight: FontWeight.regular,
      },
      largeBold: {
        fontSize: "16px",
        lineHeight: "19px",
        fontWeight: FontWeight.semibold,
      },
      xlarge: {
        fontSize: "18px",
        lineHeight: "21px",
        fontWeight: FontWeight.regular,
      },
      xlargeBold: {
        fontSize: "18px",
        lineHeight: "21px",
        fontWeight: FontWeight.semibold,
      },
      "2xlarge": {
        fontSize: "20px",
        lineHeight: "24px",
        fontWeight: FontWeight.regular,
      },
      "2xlargeBold": {
        fontSize: "20px",
        lineHeight: "24px",
        fontWeight: FontWeight.semibold,
      },
    },
    heading: {
      medium: {
        fontSize: "24px",
        lineHeight: "29px",
        fontWeight: FontWeight.bold,
      },
      large: {
        fontSize: "28px",
        lineHeight: "33px",
        fontWeight: FontWeight.bold,
      },
      xlarge: {
        fontSize: "32px",
        lineHeight: "38px",
        fontWeight: FontWeight.bold,
      },
      "2xlarge": {
        fontSize: "36px",
        lineHeight: "43px",
        fontWeight: FontWeight.bold,
      },
      "3xlarge": {
        fontSize: "40px",
        lineHeight: "48px",
        fontWeight: FontWeight.bold,
      },
    },
  },
});

export const textSprinkles = createSprinkles(sprinkles);
