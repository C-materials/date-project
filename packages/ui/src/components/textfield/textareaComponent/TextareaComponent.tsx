import type { ComponentPropsWithoutRef } from "react";
import { common, error, textarea, textfieldWrapper } from "../style.css";
type TextareaProps = ComponentPropsWithoutRef<"textarea"> & {
  errorMessage?: string;
};
const Textarea = ({
  disabled = false,
  errorMessage,
  placeholder = "텍스트를 입력해주세요.",
  ...props
}: TextareaProps) => {
  let invalid = !!errorMessage;
  return (
    <div className={textfieldWrapper}>
      <textarea
        className={`${common({ disabled, invalid })}, ${textarea}`}
        disabled={disabled}
        {...props}
        placeholder={placeholder}
      />
      <span className={error}>{errorMessage}</span>
    </div>
  );
};

export default Textarea;
