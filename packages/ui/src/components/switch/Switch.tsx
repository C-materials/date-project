import type { CheckBoxProps } from "../checkBox/type";
import { switchStyle, toggle } from "./style.css";

const Switch = ({
  id,
  name,
  checked,
  disabled,
  label,
  ...props
}: CheckBoxProps) => {
  return (
    <div>
      <label htmlFor={id} className={switchStyle({ disabled, checked })}>
        <span className={toggle({ disabled, checked })}></span>
      </label>
      <input
        type="checkbox"
        checked={checked}
        value={name}
        id={id}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

export default Switch;
