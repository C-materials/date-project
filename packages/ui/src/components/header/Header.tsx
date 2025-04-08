import logo from "../../../assets/logo.png";
import Button from "../button/Button";
import { header, itemWrapper, logoWrapper } from "./style.css";
const Header = ({ selectedMenu }: { selectedMenu?: string }) => {
  return (
    <header className={header}>
      <div className={logoWrapper}>
        <img src={logo} width={81} height={26} alt="&DEAR" />
        <ul className={itemWrapper}>
          <li>menu</li>
          <li>menu</li>
        </ul>
      </div>
      <div className={itemWrapper}>
        <button type="button">Action</button>
        <Button type="button" variant="outline">
          Button
        </Button>
        <Button type="button" variant="primary">
          Button
        </Button>
      </div>
    </header>
  );
};

export default Header;
