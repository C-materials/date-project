import { common, error, input, textfieldWrapper } from "../style.css";
import type { InputProps } from "./type";

const TextInput = ({
  errorMessage,
  disabled = false,
  placeholder = "텍스트를 입력해주세요.",
  suffix,
  ...props
}: InputProps) => {
  let invalid = !!errorMessage;

  return (
    <div className={textfieldWrapper}>
      <input
        type="text"
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
