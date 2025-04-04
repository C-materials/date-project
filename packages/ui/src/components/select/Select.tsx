import { useEffect, useRef, useState } from "react";
import Arrow from "../../../assets/downArrow.svg";
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
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOption = (value: string) => {
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
          <Arrow
            className={icon({ isOpen, disabled })}
            width={12}
            height={12}
          />
        }
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
