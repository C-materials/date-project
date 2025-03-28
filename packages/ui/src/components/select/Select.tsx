import type { ComponentPropsWithoutRef } from "react";
import { useEffect, useRef, useState } from "react";
import arrow from "../../../assets/downArrow.svg";
import { icon } from "../textfield/style.css";
import TextInput from "../textfield/textInput/TextInput";
import OptionList from "./OptionList";
import { selectWrapper } from "./style.css";
type InputProps = ComponentPropsWithoutRef<"input"> & {
  errorMessage?: string;
  optionList: string[];
  initialValue?: string;
};
const Select = ({
  errorMessage,
  disabled = false,
  placeholder = "placeholder",
  optionList,
  initialValue,
  ...props
}: InputProps) => {
  const [isOpen, setIsShow] = useState<boolean>(false);
  const [option, setOption] = useState(initialValue);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = (value: string) => {
    setOption(value);
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
    setIsShow((prev) => !prev);
  };

  return (
    <div ref={ref} className={selectWrapper}>
      <TextInput
        isSelect
        show={isOpen}
        disabled={disabled}
        errorMessage={errorMessage}
        value={option}
        placeholder={placeholder}
        onClick={handleClickInput}
        suffix={
          <img
            src={arrow}
            alt="arrow"
            width={12}
            height={12}
            className={icon({ isOpen, disabled })}
          />
        }
        {...props}
      />
      {isOpen && !disabled && (
        <OptionList list={optionList} onClick={handleClick} selected={option} />
      )}
    </div>
  );
};

export default Select;
