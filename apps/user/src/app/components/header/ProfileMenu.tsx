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

const ProfileMenu = ({ name, tel, list = [] }: MenuProps) => {
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
          <li key={item.title} className={listItem}>
            <Link href={item.href || "/"}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileMenu;
