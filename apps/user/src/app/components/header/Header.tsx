"use client";
import { Button } from "@repo/ui";
import Image from "next/image";
import { header, itemWrapper, logoWrapper } from "./style.css";
const Header = () => {
  return (
    <header className={header}>
      <div className={logoWrapper}>
        <Image
          src="/apps/user/public/logo.png"
          width={81}
          height={26}
          alt="&DEAR"
        />
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
