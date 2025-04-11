import Check from "../../../assets/check.svg";
import { checkIcon, listItem, listWrapper } from "./style.css";
import type { SelectProps } from "./type";

type OptionListProps = {
  list: SelectProps["optionList"];
  selected: SelectProps["value"];
  onClick: (item: string | number) => void;
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
          onClick={(e) => {
            onClick(item);
            e.stopPropagation();
          }}
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
