import { checkboxInput, checkboxWrapper } from "../checkBox/style.css";
import type { CheckBoxProps } from "../checkBox/type";
import { icon, radioInput } from "./style.css";

const Radio = ({
  checked = false,
  name,
  label,
  disabled,
  onClick,
  ...props
}: CheckBoxProps) => {
  return (
    <div className={checkboxWrapper({ disabled })} onClick={onClick}>
      <label
        className={`${checkboxInput({ disabled, checked })} ${radioInput}`}
        htmlFor={name}
      >
        {!disabled && <span className={icon}></span>}
      </label>
      <div>{label}</div>
      <input
        type="radio"
        name={name}
        id={name}
        disabled={disabled}
        checked={checked}
        onClick={(e) => e.stopPropagation()}
        {...props}
      />
    </div>
  );
};

export default Radio;
