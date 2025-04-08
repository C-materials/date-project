import logo from "../../../assets/logo.png";
import Button from "../button/Button";
import ItemGroup from "./ItemGroup";
import { header, logoWrapper } from "./style.css";
const Header = ({ selectedMenu }: { selectedMenu?: string }) => {
  return (
    <header className={header}>
      <div className={logoWrapper}>
        <img src={logo} width={81} height={26} alt="&DEAR" />
        <ItemGroup>
          <li>menu</li>
          <li>menu</li>
        </ItemGroup>
      </div>
      <ItemGroup>
        <button type="button">Action</button>
        <Button type="button" variant="outline">
          Button
        </Button>
        <Button type="button" variant="primary">
          Button
        </Button>
      </ItemGroup>
    </header>
  );
};

export default Header;
