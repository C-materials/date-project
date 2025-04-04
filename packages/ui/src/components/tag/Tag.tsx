import { useState } from "react";
import { tag } from "./style.css";

const Tag = ({
  content,
  disabled,
  checked,
  onClick,
  accent,
}: {
  content: string;
  disabled: boolean;
  checked: boolean;
  onClick: () => void;
  accent?: boolean;
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleClick = () => {
    setIsChecked((prev) => !prev);
    onClick();
  };
  return (
    <li
      onClick={handleClick}
      className={tag({
        variant: accent ? "accent" : isChecked ? "active" : "default",
        disabled,
      })}
    >
      {content}
    </li>
  );
};

export default Tag;
