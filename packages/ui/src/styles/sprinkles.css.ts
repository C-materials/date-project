import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

/**
 * 축약어 설정
 * @note paddingX, paddingY, marginX, marginY : number | "auto"
 * @note placeItems : "flexCenter"
 */
const spacingValues = [
  ...Array(51)
    .fill(0)
    .map((_, i) => `${0 + i * 4}px`),
  "auto",
];

const sprinkles = defineProperties({
  properties: {
    paddingTop: spacingValues,
    paddingBottom: spacingValues,
    paddingLeft: spacingValues,
    paddingRight: spacingValues,
    marginTop: spacingValues,
    marginBottom: spacingValues,
    marginLeft: spacingValues,
    marginRight: spacingValues,
    placeItems: {
      flexCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
  shorthands: {
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
  },
});

export const spacingSprinkles = createSprinkles(sprinkles);
