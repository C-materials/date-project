import { useState } from "react";
import type { CheckBoxProps } from "../checkBox/type";
import { switchStyle, toggle } from "./style.css";

const Switch = ({
  id,
  name,
  checked,
  disabled,
  label,
  onChange,
  onClick,
  ...props
}: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleClickSwitch = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div onClick={handleClickSwitch}>
      <label htmlFor={id} className={switchStyle({ disabled, isChecked })}>
        <span className={toggle({ disabled, isChecked })}></span>
      </label>
      <input
        type="checkbox"
        checked={isChecked}
        value={name}
        id={id}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Switch;
