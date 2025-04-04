import type { ReactNode } from "react";
import logo from "../../../assets/logo.png";
import ButtonGroup from "./ButtonGroup";
import { header, menuItem } from "./style.css";
const Header = ({
  menuList = ["menu1", "menu2"],
  selectedMenu,
  children,
}: {
  menuList: string[];
  selectedMenu: string;
  children: ReactNode;
}) => {
  return (
    <header className={header}>
      <div>
        <img src={logo} width={81} height={26} alt="&DEAR" />
        <ul>
          {menuList.map((item) => (
            <li
              className={menuItem({ selected: selectedMenu === item })}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <ButtonGroup>
        <div></div>
      </ButtonGroup>
    </header>
  );
};

export default Header;
