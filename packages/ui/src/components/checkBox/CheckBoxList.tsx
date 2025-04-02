import type { ChangeEvent } from "react";
import { useState } from "react";
import CheckBox from "./CheckBox";
import type { CheckBoxProps } from "./type";

const CheckBoxList = ({
  checkList,
  style: className,
}: {
  checkList: CheckBoxProps[];
  style?: React.CSSProperties;
}) => {
  // list 각각의 아이템 value 를 상태로 관리
  const [isChecked, setIsChecked] = useState<Record<string, boolean>>(
    checkList.reduce(
      (acc, item) => ({ ...acc, [item.name as string]: item.checked }),
      {},
    ),
  );

  const handleClick = (item: CheckBoxProps) => {
    setIsChecked((prev) => ({
      ...prev,
      [item.name as string]: !prev[item.name as string],
    }));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    item: CheckBoxProps,
  ) => {
    setIsChecked((prev) => ({
      ...prev,
      [item.name as string]: e.target.checked,
    }));
  };
  return (
    <fieldset style={className}>
      {checkList.map((item, index) => (
        <CheckBox
          key={crypto.randomUUID()}
          name={item.name}
          checked={isChecked[item.name as string] || false}
          disabled={item.disabled}
          label={item.label}
          onClick={() => handleClick(item)}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, item)}
        />
      ))}
    </fieldset>
  );
};

export default CheckBoxList;
