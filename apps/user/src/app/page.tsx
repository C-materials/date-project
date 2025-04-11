"use client";
import NotApproved from "./components/notApproved/NotApproved";
import useUserStore from "./store/useUserStore";

export default function Home() {
  const { user } = useUserStore();
  return (
    <>
      <main>{!user.approved && <NotApproved />}</main>
      <footer></footer>
    </>
  );
}
