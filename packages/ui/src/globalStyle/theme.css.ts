import {
  createGlobalThemeContract,
  createGlobalTheme,
} from "@vanilla-extract/css";

// 토큰

export const vars = createGlobalThemeContract({
  color: {
    bg: "",
    primaryDefault: "",
    primaryHover: "",
    actionButtonBorderMobile: "",
    actionButtonSecondaryBackground: "",
  },
  font: {
    body: "",
  },
});

export const globalVars = createGlobalTheme(":root", {
  color: {
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
  },
});
