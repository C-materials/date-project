import { checkboxInput, checkboxWrapper } from "../checkBox/style.css";
import type { CheckBoxProps } from "../checkBox/type";
import { icon, radioInput } from "./style.css";

const Radio = ({
  checked = false,
  name,
  id,
  label,
  disabled,
  onClick,
  onChange,
  ...props
}: CheckBoxProps) => {
  return (
    <div className={checkboxWrapper({ disabled })} onClick={onClick}>
      <label
        className={`${checkboxInput({ disabled, checked })} ${radioInput}`}
        htmlFor={id}
      >
        {!disabled && <span className={icon}></span>}
      </label>
      <div>{label}</div>
      <input
        type="radio"
        name={name}
        id={id}
        disabled={disabled}
        checked={checked}
        value={name}
        onClick={(e) => e.stopPropagation()}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Radio;
