"use client";
import useUserStore from "../shared/stores/use-user-store";
import NotApproved from "./main/components/not-approved/not-approved";

export default function Home() {
  const { user } = useUserStore();
  return (
    <>
      <main>{!user.approved && <NotApproved />}</main>
      <footer></footer>
    </>
  );
}
