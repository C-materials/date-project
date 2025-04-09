"use client";
import { Button } from "@repo/ui";
import Image from "next/image";
const Header = () => {
  return (
    <header>
      <div>
        <Image
          src="/apps/user/public/logo.png"
          width={81}
          height={26}
          alt="&DEAR"
        />
        <ul>
          <li>menu</li>
          <li>menu</li>
        </ul>
      </div>
      <div>
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
