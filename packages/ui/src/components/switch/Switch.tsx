import type { CheckBoxProps } from "../checkBox/type";
import { switchStyle, toggle } from "./style.css";

const Switch = ({ checked, disabled, onChange, ...props }: CheckBoxProps) => {
  return (
    <label className={switchStyle({ disabled, checked })}>
      <span className={toggle({ disabled, checked })}></span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};

export default Switch;
