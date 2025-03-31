import { createGlobalTheme } from "@vanilla-extract/css";

// z-index 토큰화
export const Zindex = createGlobalTheme(":root", {
  base: "0", // 기본 배경
  content: "10", // 주요 콘텐츠 (예: 카드, 섹션)
  dropdown: "20", // 드롭다운, 툴팁 등
  modalBackground: "30", // 모달 배경
  modal: "40", // 일반 모달
  overlay: "50", // 오버레이, 사이드바
  alert: "60", // 알림, 작은 팝업
  floating: "70", // 상위 플로팅 요소
  fullscreenOverlay: "80", // 전체 화면 오버레이
  highest: "90", // 최상위 요소 (예: 긴급 경고)
});

export type Zindex = typeof Zindex;
