import logo from "../../../assets/logo.png";
import ButtonGroup from "./ButtonGroup";
import MenuGroup from "./MenuGroup";
import { header } from "./style.css";
const Header = ({ selectedMenu }: { selectedMenu: string }) => {
  return (
    <header className={header}>
      <div>
        <img src={logo} width={81} height={26} alt="&DEAR" />
        <MenuGroup list={[]}>
          <div></div>
        </MenuGroup>
      </div>
      <ButtonGroup>
        <div></div>
      </ButtonGroup>
    </header>
  );
};

export default Header;
