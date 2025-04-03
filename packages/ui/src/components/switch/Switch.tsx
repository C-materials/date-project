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
  return (
    <label htmlFor={id} className={switchStyle({ disabled, checked })}>
      <span className={toggle({ disabled, checked })}></span>

      <input
        type="checkbox"
        checked={checked}
        value={name}
        id={id}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};

export default Switch;
