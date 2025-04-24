"use client";
import "@repo/ui/global.css";

import { Toast } from "@repo/ui";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import useToastStore from "../../../stores/useToastStore";
import Header from "../header/Header";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const exceptPathList = ["login", "signup"];
  const isAuthPage: boolean = exceptPathList.some((v) => pathname.includes(v));
  const { isOpen, type, content, props } = useToastStore();
  return (
    <>
      {!isAuthPage && <Header />}
      {children}
      <Toast type={type} content={content} isOpen={isOpen} {...props} />
    </>
  );
};

export default ClientLayout;
