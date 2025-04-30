import { Color, ColorVar, textSprinkles } from "@repo/ui";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const tooltipWrapper = style([
  {
    color: Color.text.default,
    backgroundColor: ColorVar.greyBlue[9],
    borderRadius: "4px",

    position: "absolute",
    top: calc.add("100%", "15px"),
    left: 0,
    width: "40px",
    height: "20px",
    textAlign: "center",

    "::after": {
      content: "",
      borderBottom: "8px solid",
      borderColor: ColorVar.greyBlue[9],
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent",
      height: 0,
      left: "50%",
      bottom: "100%",
      position: "absolute",
      transform: "translateX(-50%)",
    },
  },
  textSprinkles({ text: "small" }),
]);
