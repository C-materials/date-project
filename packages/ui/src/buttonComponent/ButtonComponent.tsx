import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { buttonStyle } from "./style.css";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "outline" | "accent";
  icon?: ReactNode;
}
/**
 *
 * @param type, variant : "primary" | "secondary" | "outline" | "accent"
 * @returns
 */
const ButtonComponent = ({ type = "button", ...args }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${buttonStyle[args.variant]} ${args.className}`}
      {...args}
    >
      {args.icon}
      {args.children}
    </button>
  );
};

export default ButtonComponent;
