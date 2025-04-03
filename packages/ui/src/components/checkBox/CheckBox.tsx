import Check from "../../../assets/done.svg?react";
import { Color } from "../../styles";
import { checkboxInput, checkboxLabel, checkboxWrapper } from "./style.css";
import type { CheckBoxProps } from "./type";

const CheckBox = ({
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
    <label className={checkboxWrapper({ disabled })} htmlFor={id}>
      <div className={checkboxInput({ disabled, checked })}>
        {!disabled && <Check width={12} height={12} fill={Color.bg} />}
      </div>
      <div className={checkboxLabel({ disabled })}>{label}</div>
      <input
        type="checkbox"
        name={name}
        id={id}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};

export default CheckBox;
