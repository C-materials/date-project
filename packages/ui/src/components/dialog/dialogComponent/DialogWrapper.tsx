import type { ReactNode } from "react";
import { forwardRef } from "react";
import Close from "../../../../assets/close.svg";
import { closeButtonStyle, dialogChildren, dialogWrapper } from "../style.css";

export interface WrapperProp {
  children: ReactNode;
  isMobile?: boolean;
  onClose?: () => void;
  closeButton: boolean;
}

const DialogWrapper = forwardRef<HTMLDivElement, WrapperProp>(
  ({ children, isMobile, onClose, closeButton }, ref) => {
    return (
      <>
        <div className={dialogWrapper({ isMobile })} ref={ref}>
          <div className={dialogChildren}>{children}</div>

          {closeButton && (
            <button
              className={closeButtonStyle}
              type="button"
              onClick={onClose}
            >
              <Close />
            </button>
          )}
        </div>
      </>
    );
  },
);

export default DialogWrapper;
