import type { ComponentPropsWithoutRef, ReactNode } from "react";
import LoadingSpinner from "../../../assets/loading.svg";
import { button, icon, loadingSpinner } from "./style.css";
export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  variant: "primary" | "secondary" | "outline" | "accent";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
}
const Button = ({
  variant = "primary",
  type = "button",
  className,
  leftIcon,
  rightIcon,
  children,
  isLoading = false,
  disabled = false,
  ...args
}: ButtonProps) => {
  if (isLoading) disabled = true;
  return (
    <button
      type={type}
      className={`${button({ variant, disabled, isLoading })} ${className || ""}`}
      {...args}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
      {isLoading && (
        <span className={loadingSpinner}>
          <LoadingSpinner
            className={icon({ variant })}
            width={20}
            height={20}
          />
        </span>
      )}
    </button>
  );
};

export default Button;
