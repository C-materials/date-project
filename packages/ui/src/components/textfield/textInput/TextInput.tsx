import type { ComponentPropsWithoutRef } from "react";
import { common, error, input, textfieldWrapper } from "../style.css";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  errorMessage?: string;
};

const TextInput = ({
  errorMessage,
  disabled = false,
  placeholder = "텍스트를 입력해주세요.",

  ...props
}: InputProps) => {
  let invalid = !!errorMessage;

  return (
    <div className={textfieldWrapper}>
      <input
        disabled={disabled}
        {...props}
        className={`${common({ disabled, invalid })}, ${input}`}
        {...props}
        placeholder={placeholder}
      />
      <span className={error}>{errorMessage}</span>
    </div>
  );
};

export default TextInput;
