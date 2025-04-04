import { globalStyle, style } from "@vanilla-extract/css";
import { Color, ColorVar } from "../../styles";

// track (배경)
export const rangeSlider = style({
  position: "relative",
  width: "100%",
  height: "4px",
  borderRadius: "1000px",
  backgroundColor: Color.secondary.default,
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
  `${rangeSlider} .range-slider__thumb[data-active]:not(:disabled), ${rangeSlider}.range-slider__thumb:hover:not(:disabled)`,
  {
    width: "13px",
    height: "13px",
  },
);

//DISABLED 스타일
//배경
globalStyle(`${rangeSlider}:disabled`, {
  opacity: 1,
});
// 구간 disabled
globalStyle(`${rangeSlider}:disabled .range-slider__range`, {
  backgroundColor: ColorVar.greyBlue[5],
});

//thumbs disabled
globalStyle(`${rangeSlider}:disabled .range-slider__thumb`, {
  backgroundColor: ColorVar.greyBlue[5],
});

// Slider 외 스타일
export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const description = style({
  fontSize: "12px",
  lineHeight: "14px",
  fontWeight: "400",
  color: Color.text.light,
});
