import { useEffect, useRef } from "react";
import Arrow from "../../../assets/downArrow.svg";
import TextInput from "../textfield/textInput/TextInput";
import OptionList from "./OptionList";
import { icon, selectWrapper } from "./style.css";
import type { SelectProps } from "./type";

const Select = ({
  errorMessage,
  disabled = false,
  placeholder = "placeholder",
  optionList,
  value,
  onChangeValue,
  isOpen,
  onClickClose,
  onClickInput,
  ...props
}: SelectProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOption = (value: string | number) => {
    onClickClose?.();
    onChangeValue(value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        onClickClose?.();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={ref} className={selectWrapper}>
      <TextInput
        readOnly
        disabled={disabled}
        errorMessage={errorMessage}
        value={value}
        placeholder={placeholder}
        onClick={onClickInput}
        suffix={<Arrow className={icon({ isOpen, disabled })} />}
        {...props}
      />
      {isOpen && !disabled && (
        <OptionList
          list={optionList}
          onClick={handleClickOption}
          selected={value as string}
        />
      )}
    </div>
  );
};

export default Select;
