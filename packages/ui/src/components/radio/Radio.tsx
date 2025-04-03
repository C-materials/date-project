import type { ComponentPropsWithoutRef } from "react";
import { checkboxInput, checkboxWrapper } from "../checkBox/style.css";
import { icon, radioInput } from "./style.css";

type RadioProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
};

const Radio = ({
  checked = false,
  name,
  id,
  label,
  disabled,
  onChange,
  ...props
}: RadioProps) => {
  return (
    <label className={checkboxWrapper({ disabled })} htmlFor={id}>
      <div className={`${checkboxInput({ disabled, checked })} ${radioInput}`}>
        {!disabled && <span className={icon}></span>}
      </div>
      <div>{label}</div>
      <input
        type="radio"
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

export default Radio;
