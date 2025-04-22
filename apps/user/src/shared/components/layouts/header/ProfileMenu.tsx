import UserIcon from "@date-project/user/public/userIcon.svg";
import Link from "next/link";
import type { Ref } from "react";
import type { ListType } from "./listType";
import {
  info,
  infoName,
  infoTel,
  infoWrapper,
  listItem,
  listWrapper,
  menuWrapper,
  userIcon,
  userProfile,
} from "./style.css";

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
        <span className={userProfile}>
          <UserIcon className={userIcon} />
        </span>
        <div className={info}>
          <span className={infoName}>{name}</span>
          <span className={infoTel}>{tel}</span>
        </div>
      </div>
      <ul className={listWrapper}>
        {list.map((item: ListType) => (
          <li key={item.title} className={listItem}>
            {item.href && <Link href={item.href}>{item.title}</Link>}
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
