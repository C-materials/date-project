import { createGlobalTheme } from "@vanilla-extract/css";

// 커스텀 유틸리티 타입
type FlattenObjectKeys<T, Prefix extends string = ""> = {
  [K in keyof T]: T[K] extends object
    ? FlattenObjectKeys<T[K], `${Prefix}${K & string}.`> // 재귀적으로 탐색
    : `${Prefix}${K & string}`;
}[keyof T];

// 색상 토큰
export const ColorVar = createGlobalTheme(":root", {
  white: "#fff",
  transparent: "tranparent",
  green: "#00CD0E",
  yellow: "#FFD000",
  red: "#D90000",
  grey: {
    1: "#EBEBEB",
    2: "#DADADA",
    3: "#C1C1C1",
    4: "#AEAEAE",
    5: "#929292",
    6: "#767676",
    7: "#5D5D5D",
    8: "#484848",
    9: "#2C2C2C",
    10: "#121212",
  },
  greyBlue: {
    1: "#EBEBEB",
    2: "#D2D5D6",
    3: "#B1B5B8",
    4: "#929AA1",
    5: "#6C767F",
    6: "#545F6A",
    7: "#434E59",
    8: "#333A41",
    9: "#1F242A",
    10: "#111115",
  },
  blue: {
    light: {
      1: "#F0F7FF",
      2: "#DCECFF",
      3: "#C0DDFF",
      4: "#A3CDFF",
      5: "#86BDFE",
      6: "#73B3FF",
      7: "#5AA5FF",
      8: "#3792FF",
      9: "#1F85FF",
      10: "#0074FF",
    },
    dark: {
      1: "#006DEF",
      2: "#0062D2",
      3: "#005CC4",
      4: "#0053B2",
      5: "#004A9E",
      6: "#004390",
      7: "#003775",
      8: "#002C5E",
      9: "#002249",
      10: "#001732",
    },
  },
});
export const Color = createGlobalTheme(":root", {
  bg: ColorVar.grey[10],
  success: ColorVar.green,
  warning: ColorVar.yellow,
  criticcal: ColorVar.red,
  primary: {
    default: ColorVar.white,
    hover: ColorVar.grey[1],
    active: ColorVar.greyBlue[2],
  },
  secondary: {
    default: ColorVar.greyBlue[9],
    hover: ColorVar.greyBlue[8],
    active: ColorVar.grey[6],
  },
  accent: {
    default: ColorVar.blue.dark[2],
    hover: ColorVar.blue.dark[5],
    active: ColorVar.blue.dark[7],
    disabled: ColorVar.blue.dark[8],
  },
  outline: {
    default: ColorVar.transparent,
    hover: ColorVar.greyBlue[4],
    active: ColorVar.greyBlue[2],
    disabled: ColorVar.greyBlue[8],
  },
  text: {
    default: ColorVar.white,
    sub: ColorVar.grey[6],
    light: ColorVar.greyBlue[3],
    inverse: ColorVar.grey[10],
  },
  border: ColorVar.grey[6],
});

export type Colors = FlattenObjectKeys<typeof Color>;
