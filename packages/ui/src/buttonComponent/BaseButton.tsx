import * as style from "./style.css";
interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: any;
  disabled?: boolean;
  icon?: any;
  variant: "primary" | "secondary" | "outline" | "accent";
}

const BaseButton = ({ ...args }: ButtonProps) => {
  return (
    <button
      className={""}
      type={args.type}
      disabled={args.disabled || false}
      onClick={args.onClick}
    >
      {args.icon}
      {args.children}
    </button>
  );
};

export default BaseButton;
