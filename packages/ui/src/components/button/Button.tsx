import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { buttonStyle } from "./style.css";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  variant: "primary" | "secondary" | "outline" | "accent";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}
const Button = ({
  variant = "primary",
  type = "button",
  iconPosition = "left",
  className,
  icon,
  children,
  ...args
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${buttonStyle[variant]} ${className || ""}`}
      {...args}
    >
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
