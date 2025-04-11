"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Header from "../header/Header";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const exceptPathList = ["login", "signup"];
  const isAuthPage: boolean = exceptPathList.some((v) => pathname.includes(v));
  return (
    <>
      {!isAuthPage && <Header />}
      {children}
    </>
  );
};

export default ClientLayout;
