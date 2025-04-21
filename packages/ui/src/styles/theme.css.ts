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
  transparent: "transparent",
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
  critical: ColorVar.red,
  primary: {
    default: ColorVar.white,
    hover: ColorVar.greyBlue[1],
    active: ColorVar.greyBlue[2],
    disabled: ColorVar.greyBlue[9],
  },
  secondary: {
    default: ColorVar.greyBlue[8],
    hover: ColorVar.greyBlue[7],
    active: ColorVar.greyBlue[6],
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
    light: ColorVar.grey[3],
    inverse: ColorVar.grey[10],
    disabled: ColorVar.grey[7],
  },
  border: ColorVar.greyBlue[6],
});

export type Colors = FlattenObjectKeys<typeof Color>;

// text 토큰
export const FontWeight = createGlobalTheme(":root", {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
});

export const TextStyle = createGlobalTheme(":root", {
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
      fontWeight: FontWeight.regular,
    },
    medium: {
      fontSize: "14px",
      lineHeight: "17px",
      fontWeight: FontWeight.regular,
    },
    "medium.bold": {
      fontSize: "14px",
      lineHeight: "17px",
      fontWeight: FontWeight.semibold,
    },
    large: {
      fontSize: "16px",
      lineHeight: "19px",
      fontWeight: FontWeight.regular,
    },
    "large.bold": {
      fontSize: "16px",
      lineHeight: "19px",
      fontWeight: FontWeight.semibold,
    },
    xlarge: {
      fontSize: "18px",
      lineHeight: "21px",
      fontWeight: FontWeight.regular,
    },
    "xlarge.bold": {
      fontSize: "18px",
      lineHeight: "21px",
      fontWeight: FontWeight.semibold,
    },
    "2xlarge": {
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight: FontWeight.regular,
    },
    "2xlarge.bold": {
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
});
