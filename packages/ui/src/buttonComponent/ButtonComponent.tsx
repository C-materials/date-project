import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { buttonStyle } from "./style.css";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "outline" | "accent";
  icon?: ReactNode;
}

const ButtonComponent = ({ type, ...args }: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      className={`${buttonStyle[args.variant]} ${args.className}`}
      {...args}
    >
      {args.icon}
      {args.children}
    </button>
  );
};

export default ButtonComponent;
