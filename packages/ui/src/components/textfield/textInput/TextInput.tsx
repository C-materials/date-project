import { type ComponentPropsWithoutRef } from "react";
import arrow from "../../../../assets/chevronDown.png";
import { common, error, icon, input, textfieldWrapper } from "../style.css";
type InputProps = ComponentPropsWithoutRef<"input"> & {
  errorMessage?: string;
  isSelect?: boolean;
  show?: boolean;
};

const TextInput = ({
  errorMessage,
  disabled = false,
  placeholder = "텍스트를 입력해주세요.",
  isSelect = false,
  show = false,
  ...props
}: InputProps) => {
  let invalid = !!errorMessage;
  return (
    <div className={textfieldWrapper}>
      <input
        readOnly={isSelect}
        disabled={disabled}
        className={`${common({ disabled, invalid })}, ${input}`}
        {...props}
        placeholder={placeholder}
      />
      {isSelect && (
        <img
          className={icon({ show })}
          src={arrow}
          alt="arrow"
          width={12}
          height={12}
        />
      )}
      <span className={error}>{errorMessage}</span>
    </div>
  );
};

export default TextInput;
