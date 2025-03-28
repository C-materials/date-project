import type { ChangeEvent, ReactNode } from "react";
import { useState, type ComponentPropsWithoutRef } from "react";
import { common, error, input, textfieldWrapper } from "../style.css";
type InputProps = ComponentPropsWithoutRef<"input"> & {
  errorMessage?: string;
  isSelect?: boolean;
  show?: boolean;
  suffix?: ReactNode;
  value?: string;
};

const TextInput = ({
  errorMessage,
  disabled = false,
  placeholder = "텍스트를 입력해주세요.",
  isSelect = false,
  show = false,
  suffix,
  value,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value);
  let invalid = !!errorMessage;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={textfieldWrapper}>
      <input
        type="text"
        value={inputValue}
        readOnly={isSelect}
        disabled={disabled}
        className={`${common({ disabled, invalid })} ${input}`}
        {...props}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
      {suffix && suffix}
      <span className={error}>{errorMessage}</span>
    </div>
  );
};

export default TextInput;
