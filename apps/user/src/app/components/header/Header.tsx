"use client";
import { Button } from "@repo/ui";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useUserStore from "../../store/useUserStore";
import ProfileMenu from "./ProfileMenu";
import { header, itemWrapper, logoWrapper, menuItem } from "./style.css";
import type { ListType } from "./type";
import UserProfile from "./UserProfile";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setLogout } = useUserStore();

  const menuRef = useRef<HTMLDivElement | null>(null);
  const profileMenuList: ListType[] = [
    { title: "마이페이지", href: "/" },
    { title: "로그아웃", action: setLogout },
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

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
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
