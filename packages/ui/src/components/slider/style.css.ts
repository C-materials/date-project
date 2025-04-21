import { globalStyle, style } from "@vanilla-extract/css";
import { Color, ColorVar } from "../../styles";
import { textSprinkles } from "../../styles/typography.css";

// track (배경)
export const rangeSlider = style({
  width: "100%",
  height: "4px",
  borderRadius: "1000px",
  backgroundColor: Color.secondary.default,

  selectors: {
    "&::before": {
      content: '""',
      position: "absolute",
      top: "-8px",
      bottom: "-8px",
      left: 0,
      right: 0,
      zIndex: 0,
      pointerEvents: "auto",
    },
  },
});

// 선택된 구간
globalStyle(`${rangeSlider} .range-slider__range`, {
  height: "100%",
  backgroundColor: Color.primary.default,
});

//thumb 일괄 스타일
globalStyle(`${rangeSlider} .range-slider__thumb`, {
  width: "11px",
  height: "11px",
  borderRadius: "50%",
  backgroundColor: Color.primary.default,
  transition: "width 0.1s ease, height 0.1s ease",
});

//thumb 개별 스타일
globalStyle(`${rangeSlider} .range-slider__thumb[data-lower]`, {
  boxShadow: "2px 4px 4px 0 rgba(0,0,0,0.25)",
});

globalStyle(`${rangeSlider} .range-slider__thumb[data-upper]`, {
  boxShadow: "-2px 4px 4px 0 rgba(0,0,0,0.25)",
});

//thumbs hover
globalStyle(
  `${rangeSlider} .range-slider__thumb[data-active]:not([data-disabled]), ${rangeSlider} .range-slider__thumb:hover:not([data-disabled])`,
  {
    width: "13px",
    height: "13px",
  },
);

//DISABLED 스타일
//배경
globalStyle(`${rangeSlider}[data-disabled]`, {
  opacity: 1,
});
// 구간 disabled
globalStyle(`${rangeSlider}[data-disabled] .range-slider__range`, {
  backgroundColor: ColorVar.greyBlue[5],
});

//thumbs disabled
globalStyle(`${rangeSlider}[data-disabled] .range-slider__thumb`, {
  backgroundColor: ColorVar.greyBlue[5],
});

// Slider 외 스타일
export const rangeWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "8px 0",
  position: "relative",
});

export const description = style([
  {
    color: Color.text.light,
  },
  textSprinkles({
    text: "small",
  }),
]);
