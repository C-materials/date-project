import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { button } from "./style.css";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
  variant: "primary" | "secondary" | "outline" | "accent";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

export const Button = ({
  children,
  variant = "primary",
  icon,
  iconPosition = "left",
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={button({ variant, disabled })}
      disabled={disabled}
      {...props}
    >
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
    </button>
  );
};
