import { createGlobalTheme } from "@vanilla-extract/css";

// 커스텀 유틸리티 타입
type FlattenObjectKeys<T, Prefix extends string = ""> = {
  [K in keyof T]: T[K] extends object
    ? FlattenObjectKeys<T[K], `${Prefix}${K & string}.`> // 재귀적으로 탐색
    : `${Prefix}${K & string}`;
}[keyof T];

// 색상 토큰
export const Color = createGlobalTheme(":root", {
  bg: "#111115",
  primary: {
    default: "#fff",
    hover: "#EBEBEB",
    active: "#CECECE",
  },
  secondary: {
    default: "#1F242A",
    hover: "#333A41",
    active: "#545F6A",
  },
  accent: {
    default: "#0062D2",
    hover: "#074FA1",
    active: "#00397A",
  },
  success: "#00CD0E",
  warning: "#FFD000",
  criticcal: "#D90000",
  text: {
    default: "#fff",
    sub: "#696B6D",
    light: "#B1B5B8",
    inverse: "#111115",
  },
  border: "#B5B5B5",
});

export type Colors = FlattenObjectKeys<typeof Color>;
