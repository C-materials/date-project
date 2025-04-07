import type { ReactNode } from "react";

const MenuGroup = ({ children, list }: { children: ReactNode; list: [] }) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default MenuGroup;
