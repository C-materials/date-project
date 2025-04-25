import { useEffect, useState } from "react";
import Error from "../../../assets/error.svg";
import Success from "../../../assets/success.svg";
import Warning from "../../../assets/warning.svg";
import { iconStyle, toast } from "./style.css";
type ToastType = {
  type: "success" | "warning" | "critical";
  content: string;
  icon?: boolean;
  top?: number;
  isOpen: boolean;
  width?: number;
  className?: string;
};

const Toast = ({
  isOpen,
  type,
  content = "Toast Text",
  icon = true,
  top,
  width,
  className,
}: ToastType) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const iconType = {
    success: <Success className={iconStyle} />,
    warning: <Warning className={iconStyle} />,
    critical: <Error className={iconStyle} />,
  };

  useEffect(() => {
    if (isOpen) setIsVisible(true);

    let displayTimeout: NodeJS.Timeout | null = null;
    if (!isOpen) {
      displayTimeout = setTimeout(() => setIsVisible(false), 300);
    }
    return () => {
      if (displayTimeout) {
        clearTimeout(displayTimeout);
      }
    };
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`${toast({ type, isOpen })} ${className || ""}`}
        style={{ top: top ?? "64px", width: width }}
      >
        {icon && iconType[type]}
        <span>{content}</span>
      </div>
    </>
  );
};

export default Toast;
