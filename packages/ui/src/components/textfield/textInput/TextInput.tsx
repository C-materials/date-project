import { common, error, input, textfieldWrapper } from "../style.css";
import type { InputProps } from "./type";

const TextInput = ({
  errorMessage,
  disabled = false,
  placeholder = "텍스트를 입력해주세요.",
  suffix,
  width = 160,
  ...props
}: InputProps) => {
  let invalid = !!errorMessage;

  return (
    <div className={textfieldWrapper} style={{ width: width }}>
      <input
        type="text"
        disabled={disabled}
        className={`${common({ disabled, invalid })} ${input}`}
        {...props}
        placeholder={placeholder}
      />
      {suffix}
      {errorMessage && <span className={error}>{errorMessage}</span>}
    </div>
  );
};

export default TextInput;
