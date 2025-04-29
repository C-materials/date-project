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

// Font Size
export const FontSizeVar = createGlobalTheme(":root", {
  // Text
  "2xsmall": "10px",
  xsmall: "11px",
  small: "12px",
  medium: "14px",
  large: "16px",
  xlarge: "18px",
  "2xlarge": "20px",
  // Heading
  headingMedium: "24px",
  headingLarge: "28px",
  headingXlarge: "32px",
  heading2xlarge: "36px",
  heading3xlarge: "40px",
});
// Line Height
export const LineHeightVar = createGlobalTheme(":root", {
  // Text
  "2xsmall": "13px",
  xsmall: "14px",
  small: "15px",
  medium: "18px",
  large: "21px",
  xlarge: "21px",
  "2xlarge": "24px",
  // Heading
  headingMedium: "29px",
  headingLarge: "34px",
  headingXlarge: "39px",
  heading2xlarge: "44px",
  heading3xlarge: "50px",
});

const sprinkles = defineProperties({
  properties: {
    text: {
      "2xsmall": {
        fontSize: FontSizeVar["2xsmall"],
        lineHeight: LineHeightVar["2xsmall"],
        fontWeight: FontWeight.regular,
      },
      xsmall: {
        fontSize: FontSizeVar.xsmall,
        lineHeight: LineHeightVar.xsmall,
        fontWeight: FontWeight.regular,
      },
      small: {
        fontSize: FontSizeVar.small,
        lineHeight: LineHeightVar.small,
        fontWeight: FontWeight.semibold,
      },
      smallBold: {
        fontSize: FontSizeVar.small,
        lineHeight: LineHeightVar.small,
        fontWeight: FontWeight.regular,
      },
      medium: {
        fontSize: FontSizeVar.medium,
        lineHeight: LineHeightVar.medium,
        fontWeight: FontWeight.regular,
      },
      mediumBold: {
        fontSize: FontSizeVar.medium,
        lineHeight: LineHeightVar.medium,
        fontWeight: FontWeight.semibold,
      },
      large: {
        fontSize: FontSizeVar.large,
        lineHeight: LineHeightVar.large,
        fontWeight: FontWeight.regular,
      },
      largeBold: {
        fontSize: FontSizeVar.large,
        lineHeight: LineHeightVar.large,
        fontWeight: FontWeight.semibold,
      },
      xlarge: {
        fontSize: FontSizeVar.xlarge,
        lineHeight: LineHeightVar.xlarge,
        fontWeight: FontWeight.regular,
      },
      xlargeBold: {
        fontSize: FontSizeVar.xlarge,
        lineHeight: LineHeightVar.xlarge,
        fontWeight: FontWeight.semibold,
      },
      "2xlarge": {
        fontSize: FontSizeVar["2xlarge"],
        lineHeight: LineHeightVar["2xlarge"],
        fontWeight: FontWeight.regular,
      },
      "2xlargeBold": {
        fontSize: FontSizeVar["2xlarge"],
        lineHeight: LineHeightVar["2xlarge"],
        fontWeight: FontWeight.semibold,
      },
    },
    heading: {
      medium: {
        fontSize: FontSizeVar.headingMedium,
        lineHeight: LineHeightVar.headingMedium,
        fontWeight: FontWeight.bold,
      },
      large: {
        fontSize: FontSizeVar.headingLarge,
        lineHeight: LineHeightVar.headingLarge,
        fontWeight: FontWeight.bold,
      },
      xlarge: {
        fontSize: FontSizeVar.headingXlarge,
        lineHeight: LineHeightVar.headingXlarge,
        fontWeight: FontWeight.bold,
      },
      "2xlarge": {
        fontSize: FontSizeVar.heading2xlarge,
        lineHeight: LineHeightVar.heading2xlarge,
        fontWeight: FontWeight.bold,
      },
      "3xlarge": {
        fontSize: FontSizeVar.heading3xlarge,
        lineHeight: LineHeightVar.heading3xlarge,
        fontWeight: FontWeight.bold,
      },
    },
  },
});

export const textSprinkles = createSprinkles(sprinkles);
