import type { ComponentPropsWithoutRef } from "react";
import { useEffect, useRef, useState } from "react";
import TextInput from "../textfield/textInput/TextInput";
import OptionList from "./OptionList";
import { selectWrapper } from "./style.css";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  errorMessage?: string;
  optionList: string[];
};
const Select = ({
  errorMessage,
  disabled = false,
  placeholder = "placeholder",
  optionList,
  ...props
}: InputProps) => {
  const [show, setShow] = useState(false);
  const [option, setOption] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = (value: string) => {
    setOption(value);
    setShow(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  const handleClickInput = () => {
    setShow((prev) => !prev);
  };
  return (
    <div ref={ref} className={selectWrapper}>
      <TextInput
        isSelect
        show={show}
        disabled={disabled}
        errorMessage={errorMessage}
        value={option}
        placeholder={placeholder}
        onClick={handleClickInput}
        {...props}
      />
      {show && !disabled && (
        <OptionList list={optionList} onClick={handleClick} selected={option} />
      )}
    </div>
  );
};

export default Select;
