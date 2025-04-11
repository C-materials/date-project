import Image from "next/image";
import { userProfile } from "./style.css";

const UserProfile = () => {
  return (
    <span className={userProfile}>
      <Image src="/userIcon.svg" width={28} height={28} alt="profile" />
    </span>
  );
};

export default UserProfile;
