"use client";
import Logo from "@date-project/user/public/logo.svg";
import UserIcon from "@date-project/user/public/userIcon.svg";
import { Button } from "@repo/ui";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import useUserStore from "../../../stores/use-user-store";
import type { ListType } from "../../../types/list";
import ProfileMenu from "./profile-menu";
import {
  header,
  itemWrapper,
  logo,
  logoWrapper,
  menuItem,
  userIcon,
  userProfile,
} from "./style.css";
const Header = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [headerDOM, setHeaderDOM] = useState<HTMLElement | null>(null);

  const { user, setLogout } = useUserStore();

  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickLogout = () => {
    setLogout();
    console.log("로그아웃");
  };

  const profileMenuList: ListType[] = [
    { title: "마이페이지", href: "/mypage" },
    { title: "로그아웃", action: handleClickLogout },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as HTMLElement)
      ) {
        setIsOpenDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpenDropdown]);

  useEffect(() => {
    setHeaderDOM(document.getElementById("main"));
  }, []);
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
              onClick={() => setIsOpenDropdown((prev) => !prev)}
            >
              <UserIcon className={userIcon} alt="user" />
            </button>
            {isOpenDropdown &&
              createPortal(
                <ProfileMenu
                  name="홍길동" // 유저 정보 넘겨주기
                  tel="010-1234-5678" // 대시 추가해서 string으로 넘겨주기
                  list={profileMenuList}
                  ref={menuRef}
                  onClose={() => setIsOpenDropdown(false)}
                />,
                headerDOM || document.body,
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
