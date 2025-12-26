import type { ReactNode } from "react";

export type DialogType = {
  children: ReactNode;
  isOpen?: boolean;
  isMobile?: boolean;
  onClose?: () => void;
  closeButton?: boolean;
  small?: boolean;
};
