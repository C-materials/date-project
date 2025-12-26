import { forwardRef } from "react";
import Close from "../../../../assets/close.svg";
import {
  closeButtonStyle,
  dialogBackground,
  dialogChildren,
  dialogWrapper,
} from "../style.css";
import type { DialogType } from "../type";

export type WrapperProp = Omit<DialogType, "isOpen">;
/**
 * @param children
 * @param isMobile
 * @param onClose
 * @param closeButton
 */
const DialogWrapper = forwardRef<HTMLDivElement, WrapperProp>(
  ({ children, isMobile, onClose, closeButton, small }, ref) => {
    return (
      <div className={dialogBackground} onClick={onClose}>
        <div
          className={dialogWrapper({ isMobile, small })}
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
