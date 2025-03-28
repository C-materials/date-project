import check from "../../../assets/check.svg";
import { listItem, listWrapper } from "./style.css";
const OptionList = ({
  list = ["option", "option", "option"],
  onClick,
  selected,
}: {
  list: string[];
  onClick: (item: string) => void;
  selected: string;
}) => {
  return (
    <ul className={listWrapper}>
      {list.map((item, index) => (
        <li className={listItem} key={index} onClick={() => onClick(item)}>
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
