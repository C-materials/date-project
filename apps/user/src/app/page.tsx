"use client";
import NotApproved from "../shared/components/notApproved/NotApproved";
import useUserStore from "../shared/stores/useUserStore";

export default function Home() {
  const { user } = useUserStore();
  return (
    <>
      <main>{!user.approved && <NotApproved />}</main>
      <footer></footer>
    </>
  );
}
