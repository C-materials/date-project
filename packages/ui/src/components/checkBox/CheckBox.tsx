import type { ComponentPropsWithoutRef } from "react";
import Check from "../../../assets/done.svg?react";
import { Color } from "../../styles";
import { checkboxInput, checkboxLabel, checkboxWrapper } from "./style.css";
type CheckBoxProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
};
// 여러개 배치하는 경우 생각해보기
const CheckBox = ({
  checked = false,
  name,
  label,
  disabled,
  onClick,
  ...props
}: CheckBoxProps) => {
  return (
    <div className={checkboxWrapper({ disabled })} onClick={onClick}>
      <label className={checkboxInput({ disabled, checked })} htmlFor={name}>
        {!disabled && <Check width={12} height={12} fill={Color.bg} />}
      </label>
      <div className={checkboxLabel({ disabled })}>{label}</div>
      <input
        type="checkbox"
        name={name}
        id={name}
        value={name}
        disabled={disabled}
        checked={checked}
        onClick={(e) => e.stopPropagation()}
        {...props}
      />
    </div>
  );
};

export default CheckBox;
