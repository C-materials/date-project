import { useEffect, useRef, useState } from "react";
import arrow from "../../../assets/downArrow.svg";
import { icon } from "../textfield/style.css";
import TextInput from "../textfield/textInput/TextInput";
import OptionList from "./OptionList";
import { selectWrapper } from "./style.css";
import type { SelectProps } from "./type";

const Select = ({
  errorMessage,
  disabled = false,
  placeholder = "placeholder",
  optionList,
  value,
  onChangeValue,
  ...props
}: SelectProps) => {
  const [isOpen, setIsShow] = useState<boolean>(false);
  const [option, setOption] = useState<string>();
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOption = (value: string) => {
    setOption(value);
    onChangeValue(value);
    setIsShow(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        setIsShow(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleClickInput = () => {
    // 토글 역할만 수행
    setIsShow((prev) => !prev);
  };
  return (
    <div ref={ref} className={selectWrapper}>
      <TextInput
        readOnly
        disabled={disabled}
        errorMessage={errorMessage}
        value={value}
        placeholder={placeholder}
        onClick={handleClickInput}
        suffix={
          <img
            src={arrow}
            alt="arrow"
            width={12}
            height={12}
            onClick={(e) => e.stopPropagation()}
            className={icon({ isOpen, disabled })}
          />
        }
        {...props}
      />
      {isOpen && !disabled && (
        <OptionList
          list={optionList}
          onClick={handleClickOption}
          selected={option}
        />
      )}
    </div>
  );
};

export default Select;
