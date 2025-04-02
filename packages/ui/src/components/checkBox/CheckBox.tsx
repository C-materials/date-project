import Check from "../../../assets/done.svg?react";
import { Color } from "../../styles";
import { checkboxInput, checkboxLabel, checkboxWrapper } from "./style.css";
import type { CheckBoxProps } from "./type";

// 여러개 배치하는 경우 생각해보기
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
    <div className={checkboxWrapper({ disabled })} onClick={onClick}>
      <label
        className={checkboxInput({ disabled, checked })}
        htmlFor={id}
        onClick={(e) => e.stopPropagation()}
      >
        {!disabled && <Check width={12} height={12} fill={Color.bg} />}
      </label>
      <div className={checkboxLabel({ disabled })}>{label}</div>
      <input
        type="checkbox"
        name={name}
        id={id}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        value={name}
        {...props}
      />
    </div>
  );
};

export default CheckBox;
