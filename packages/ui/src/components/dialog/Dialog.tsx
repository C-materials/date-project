import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Portal } from "../portal";
import { DialogFooter, DialogHeader, DialogWrapper } from "./dialog-component";
import DialogContent from "./dialog-component/dialog-body";

type DialogType = {
  children: ReactNode;
  isOpen?: boolean;
  isMobile?: boolean;
  onClose?: () => void;
  closeButton?: boolean;
};
const Dialog = (props: DialogType) => {
  const {
    children,
    isOpen,
    isMobile = false,
    onClose,
    closeButton = true,
  } = props;
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // 바깥쪽 클릭 감지
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node))
        onClose?.();
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClose]);

  // 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Portal>
      <DialogWrapper
        isMobile={isMobile}
        onClose={onClose}
        closeButton={closeButton}
        ref={dialogRef}
      >
        {children}
      </DialogWrapper>
    </Portal>
  );
};

Dialog.Header = DialogHeader;
Dialog.Content = DialogContent;
Dialog.Footer = DialogFooter;

export default Dialog;
