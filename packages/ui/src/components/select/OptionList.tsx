import Check from "../../../assets/check.svg";
import { checkIcon, listItem, listWrapper } from "./style.css";
import type { SelectProps } from "./type";

type OptionListProps = {
  list: SelectProps["optionList"];
  selected: SelectProps["value"];
  onClick: (item: string) => void;
};

const OptionList = ({
  list = ["option", "option", "option"],
  onClick,
  selected,
}: OptionListProps) => {
  return (
    <ul className={listWrapper}>
      {list.map((item, index) => (
        <li
          className={listItem}
          key={index}
          onClick={() => onClick(item)}
          aria-selected={selected === item}
        >
          {item}
          {selected === item && <Check className={checkIcon} />}
        </li>
      ))}
    </ul>
  );
};

export default OptionList;
