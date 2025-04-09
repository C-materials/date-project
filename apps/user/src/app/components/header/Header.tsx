"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu";
import { header, itemWrapper, logoWrapper, menuItem } from "./style.css";
import UserProfile from "./UserProfile";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={header}>
      <div className={logoWrapper}>
        <Image src="/logo.svg" width={81} height={26} alt="&DEAR" />
        <ul className={itemWrapper}>
          <li className={menuItem}>
            <Link href="/">Members</Link>
          </li>
        </ul>
      </div>
      <div className={itemWrapper}>
        <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
          <UserProfile />
        </button>
        {isOpen && <ProfileMenu name="홍길동" tel="010-1234-5678" />}
      </div>
    </header>
  );
};

export default Header;
