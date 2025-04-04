import Check from "../../../assets/done.svg?react";
import { Color } from "../../styles";
import {
  checkboxInput,
  checkboxLabel,
  checkboxWrapper,
  notDisplay,
} from "./style.css";
import type { CheckBoxProps } from "./type";

const CheckBox = ({
  checked = false,
  label,
  disabled,
  onClick,
  onChange,
  ...props
}: CheckBoxProps) => {
  return (
    <label className={checkboxWrapper({ disabled })}>
      <div className={checkboxInput({ disabled, checked })}>
        {!disabled && <Check width={12} height={12} fill={Color.bg} />}
      </div>
      {label && <div className={checkboxLabel({ disabled })}>{label}</div>}
      <input
        className={notDisplay}
        type="checkbox"
        value={label}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};

export default CheckBox;
