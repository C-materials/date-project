import check from "../../../assets/check.svg";
import { listItem, listWrapper } from "./style.css";

// type OptionListProps = {
//   list: Pick<SelectProps, "optionList">;
//   selected: Pick<SelectProps, "initialValue">;
//   onClick: (item: string) => void;
// };

type OptionListProps = {
  list: string[];
  onClick: (item: string) => void;
  selected: string | undefined;
};

const OptionList = ({
  // list = { optionList: ["option", "option", "option"] },
  list = ["option", "option", "option"],
  onClick,
  selected,
}: OptionListProps) => {
  return (
    <ul className={listWrapper}>
      {/* {list.optionList.map((item, index) => ( */}
      {list.map((item, index) => (
        <li
          className={listItem}
          key={index}
          onClick={() => onClick(item)}
          aria-selected={selected === item}
        >
          {item}
          {selected === item && (
            <img src={check} alt="체크" width={14} height={14} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default OptionList;
