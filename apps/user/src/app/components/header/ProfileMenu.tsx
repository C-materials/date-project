import Link from "next/link";
import type { Ref } from "react";
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
  ref: Ref<HTMLDivElement>;
};

const ProfileMenu = ({ name, tel, list = [], ref }: MenuProps) => {
  return (
    <div className={menuWrapper} ref={ref}>
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
            {item.href && <Link href={item.href || "/"}>{item.title}</Link>}
            {item.action && (
              <button type="button" onClick={item.action}>
                {item.title}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileMenu;
