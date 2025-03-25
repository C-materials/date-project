import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { buttonStyle } from "./style.css";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  variant: "primary" | "secondary" | "outline" | "accent";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}
/**
 *
 * @param type, variant : "primary" | "secondary" | "outline" | "accent"
 * @returns
 */
const Button = ({ type = "button", iconPosition, ...args }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${buttonStyle[args.variant]} ${args.className || ""}`}
      {...args}
    >
      {iconPosition === "left" && args.icon}
      {args.children}
      {iconPosition === "right" && args.icon}
    </button>
  );
};

export default Button;
