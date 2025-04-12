"use client";
import Logo from "@date-project/user/public/logo.svg";
import UserIcon from "@date-project/user/public/userIcon.svg";
import { Button } from "@repo/ui";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useUserStore from "../../../store/useUserStore";
import ProfileMenu from "./_shared/ProfileMenu";
import {
  header,
  itemWrapper,
  logo,
  logoWrapper,
  menuItem,
  userIcon,
  userProfile,
} from "./_shared/style.css";
import type { ListType } from "./_shared/type";
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
          <Logo alt="logo" className={logo} />
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
            <button
              className={userProfile}
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <UserIcon className={userIcon} alt="user" />
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
            <Button variant="outline">
              <Link href="/signup">회원가입</Link>
            </Button>
            <Button variant="primary">
              <Link href="login">로그인</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
