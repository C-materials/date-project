import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

// 반응형 break point 에 맞게 변경 + 세부 설정 안(못)했음
const responsiveProperties = defineProperties({
  conditions: {
    mobile: { "@media": "screen and (min-width : 480px)" },
    tablet: { "@media": "screen and (min-width : 768px)" },
    desktop: { "@media": "screen and (min-width : 1024px)" },
  },
  defaultCondition: "desktop",
  properties: {},
});

export const sprinkles = createSprinkles(responsiveProperties);
