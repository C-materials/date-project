import type { ReactNode } from "react";
import { type ComponentPropsWithoutRef } from "react";
import { common, error, input, textfieldWrapper } from "../style.css";
type InputProps = ComponentPropsWithoutRef<"input"> & {
  errorMessage?: string;
  isSelect?: boolean;
  show?: boolean;
  suffix?: ReactNode;
};

const TextInput = ({
  errorMessage,
  disabled = false,
  placeholder = "텍스트를 입력해주세요.",
  isSelect = false,
  show = false,
  suffix,
  ...props
}: InputProps) => {
  let invalid = !!errorMessage;
  return (
    <div className={textfieldWrapper}>
      <input
        readOnly={isSelect}
        disabled={disabled}
        className={`${common({ disabled, invalid })} ${input}`}
        {...props}
        placeholder={placeholder}
      />
      {suffix && suffix}
      <span className={error}>{errorMessage}</span>
    </div>
  );
};

export default TextInput;
