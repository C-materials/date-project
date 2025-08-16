import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Portal } from "../portal";
import { DialogFooter, DialogHeader, DialogWrapper } from "./dialogComponent";
import DialogContent from "./dialogComponent/DialogBody";

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
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!isOpen) return null;

  return (
    <Portal>
      <Dialog.Wrapper
        isMobile={isMobile}
        onClose={onClose}
        closeButton={closeButton || false}
        ref={dialogRef}
      >
        {children}
      </Dialog.Wrapper>
    </Portal>
  );
};

Dialog.Wrapper = DialogWrapper;
Dialog.Header = DialogHeader;
Dialog.Content = DialogContent;
Dialog.Footer = DialogFooter;

export default Dialog;
