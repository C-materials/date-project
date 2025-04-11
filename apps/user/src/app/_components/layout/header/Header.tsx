"use client";
import { Button } from "@repo/ui";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useUserStore from "../../../store/useUserStore";
import ProfileMenu from "./_shared/ProfileMenu";
import {
  header,
  itemWrapper,
  logoWrapper,
  menuItem,
} from "./_shared/style.css";
import type { ListType } from "./_shared/type";
import UserProfile from "./_shared/UserProfile";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setLogout } = useUserStore();

  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickLogout = () => {
    setLogout();
    console.log("로그아웃");
  };

  const profileMenuList: ListType[] = [
    { title: "마이페이지", href: "/" },
    { title: "로그아웃", action: handleClickLogout },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as HTMLElement)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className={header}>
      <div className={logoWrapper}>
        <Link href="/">
          <Image src="/logo.svg" width={81} height={26} alt="&DEAR" />
        </Link>
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
                ref={menuRef}
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
