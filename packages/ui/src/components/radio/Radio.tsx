import type { ComponentPropsWithoutRef } from "react";
import { checkboxInput, checkboxWrapper } from "../checkBox/style.css";
import { icon, radioInput } from "./style.css";

type RadioProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
};

const Radio = ({
  checked = false,
  name,
  label,
  disabled,
  onClick,
  onChange,
  ...props
}: RadioProps) => {
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
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Radio;
