import type { ComponentPropsWithoutRef } from "react";
import {
  checkboxInput,
  checkboxLabel,
  checkboxWrapper,
  notDisplay,
} from "../checkBox/style.css";
import { icon, radioInput } from "./style.css";

type RadioProps = ComponentPropsWithoutRef<"input"> & {
  label?: string;
};

const Radio = ({
  checked = false,
  label,
  disabled,
  onChange,
  ...props
}: RadioProps) => {
  return (
    <label className={checkboxWrapper({ disabled })}>
      <div className={`${checkboxInput({ disabled, checked })} ${radioInput}`}>
        {!disabled && <span className={icon}></span>}
      </div>
      {label && <div className={checkboxLabel({ disabled })}>{label}</div>}
      <input
        type="radio"
        className={notDisplay}
        value={label}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};

export default Radio;
