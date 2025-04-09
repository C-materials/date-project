import Link from "next/link";
import {
  info,
  infoName,
  infoTel,
  infoWrapper,
  listItem,
  listWrapper,
  menuWrapper,
} from "./style.css";
import type { ListType } from "./type";
import UserProfile from "./UserProfile";

type MenuProps = {
  name: string;
  tel: string;
  list?: ListType[];
};

const ProfileMenu = ({
  name,
  tel,
  list = [
    { name: "마이 페이지", href: "/" },
    { name: "로그아웃", href: "/" },
  ],
}: MenuProps) => {
  return (
    <div className={menuWrapper}>
      <div className={infoWrapper}>
        <UserProfile />
        <div className={info}>
          <span className={infoName}>{name}</span>
          <span className={infoTel}>{tel}</span>
        </div>
      </div>
      <ul className={listWrapper}>
        {list.map((item: ListType) => (
          <li key={item.name} className={listItem}>
            <Link href={item.href || "/"}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileMenu;
