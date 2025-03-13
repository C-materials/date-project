import { buttonStyle } from "./style.css";
interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | "outline" | "accent";
  onClick?: any;
  disabled?: boolean;
  icon?: any;
}

const ButtonComponent = ({ ...args }: ButtonProps) => {
  return (
    <button
      type={args.type || "button"}
      className={buttonStyle[args.variant]}
      disabled={args.disabled || false}
      onClick={args.onClick}
    >
      {args.icon}
      {args.children}
    </button>
  );
};

export default ButtonComponent;
