import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import {
  Background,
  DialogFooter,
  DialogHeader,
  DialogWrapper,
} from "./dialogComponent";
import DialogContent from "./dialogComponent/DialogBody";

interface DialogComposition {
  Header?: ReactNode;
  Content?: ReactNode;
  Footer?: ReactNode;
}

interface DialogProps {
  children: ReactNode;
  show: boolean;
  isMobile?: boolean;
  onClose?: () => void;
  closeButton?: boolean;
}
const Dialog = (props: DialogProps & DialogComposition) => {
  const { children, show, isMobile, onClose, closeButton } = props;
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

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

  useEffect(() => {
    if (!show) {
      setModalRoot(null);
      return;
    }

    // add dom for modal portal
    let root = document.getElementById("modal-root");
    if (!root) {
      root = document.createElement("div");
      root.id = "modal-root";
      root.style.position = "fixed";
      root.style.top = "0";
      root.style.left = "0";
      root.style.width = "100%";
      root.style.height = "100vh";

      document.body.appendChild(root);
    }

    setModalRoot(root);

    return () => {
      if (root && root.parentNode) {
        root.parentNode.removeChild(root);
      }
      setModalRoot(null);
    };
  }, [show]);

  if (!show || !modalRoot) return null;

  return ReactDOM.createPortal(
    <>
      <Dialog.Wrapper
        isMobile={isMobile}
        onClose={onClose}
        closeButton={closeButton || false}
        ref={dialogRef}
      >
        {children}
      </Dialog.Wrapper>
      <Dialog.Background onClick={onClose} />
    </>,
    modalRoot,
  );
};

Dialog.Background = Background;
Dialog.Wrapper = DialogWrapper;
Dialog.Header = DialogHeader;
Dialog.Content = DialogContent;
Dialog.Footer = DialogFooter;

export default Dialog;
