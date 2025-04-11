"use client";
import { Button } from "@repo/ui";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useUserStore from "../../store/useUserStore";
import ProfileMenu from "./ProfileMenu";
import { header, itemWrapper, logoWrapper, menuItem } from "./style.css";
import type { ListType } from "./type";
import UserProfile from "./UserProfile";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setLogout } = useUserStore();
  const profileMenuList: ListType[] = [
    { title: "마이페이지", href: "/" },
    { title: "로그아웃", action: setLogout },
  ];
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
        {user ? (
          <>
            <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
              <UserProfile />
            </button>
            {isOpen && (
              <ProfileMenu
                name="홍길동"
                tel="010-1234-5678"
                list={profileMenuList}
              />
            )}
          </>
        ) : (
          <>
            <Button variant="outline">회원가입</Button>
            <Button variant="primary">로그인</Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
