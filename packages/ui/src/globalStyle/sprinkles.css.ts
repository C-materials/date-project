import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

//축약어 설정
/**
 * @note paddingX, paddingY, marginX, marginY
 * @note placeItems : ["justifyContent", "alignItems"],
 *
 *
 */
const positionSprinkles = defineProperties({
  properties: {
    paddingTop: [8, 12],
    paddingBottom: [8, 12],
    paddingLeft: [8, 12],
    paddingRight: [8, 12],
    marginTop: [],
    marginBottom: [],
    marginLeft: [8, 12],
    marginRight: [8, 12],
    justifyContent: ["flex-start", "center", "flex-end"],
    alignItems: ["flex-start", "center", "flex-end"],
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

export const sprinkles = createSprinkles(positionSprinkles);
