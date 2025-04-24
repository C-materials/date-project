import { useEffect, useState } from "react";
import Error from "../../../assets/error.svg";
import Success from "../../../assets/success.svg";
import Warning from "../../../assets/warning.svg";
import { iconStyle, toast } from "./style.css";
type ToastType = {
  type: "success" | "warning" | "critical";
  children: string;
  icon?: boolean;
  top?: number;
  isOpen: boolean;
  width?: number;
  className?: any;
};

const Toast = ({
  isOpen,
  type,
  children = "Toast Text",
  icon,
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

    let timeout: NodeJS.Timeout | null = null;
    if (!isOpen) {
      timeout = setTimeout(() => setIsVisible(false), 300);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`${toast({ type, isOpen })} ${className || ""}`}
        style={{ top: top ?? "64px", width: width || "160px" }}
      >
        {icon && iconType[type]}
        {children}
      </div>
    </>
  );
};

export default Toast;
