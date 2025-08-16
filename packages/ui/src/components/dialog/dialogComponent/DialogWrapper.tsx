import type { ReactNode } from "react";
import { forwardRef } from "react";
import Close from "../../../../assets/close.svg";
import {
  closeButtonStyle,
  dialogBackground,
  dialogChildren,
  dialogWrapper,
} from "../style.css";

export interface WrapperProp {
  children: ReactNode;
  isMobile?: boolean;
  onClose?: () => void;
  closeButton: boolean;
}
/**
 * @param children
 * @param isMobile
 * @param onClose
 * @param closeButton
 */
const DialogWrapper = forwardRef<HTMLDivElement, WrapperProp>(
  ({ children, isMobile, onClose, closeButton }, ref) => {
    return (
      <div className={dialogBackground} onClick={onClose}>
        <div
          className={dialogWrapper({ isMobile })}
          ref={ref}
          onClick={(e) => e.stopPropagation()}
        >
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
      </div>
    );
  },
);

export default DialogWrapper;
