import type { ComponentPropsWithoutRef } from "react";
import { checkboxInput } from "../checkBox/style.css";
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
  onClick,
  onChange,
  ...props
}: RadioProps) => {
  return (
    <label
      className={`${checkboxInput({ disabled, checked })} ${radioInput}`}
      htmlFor={id}
    >
      {!disabled && <span className={icon}></span>}
      <div>{label}</div>
      <input
        type="radio"
        name={name}
        id={id}
        disabled={disabled}
        checked={checked}
        onClick={(e) => e.stopPropagation()}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};

export default Radio;
