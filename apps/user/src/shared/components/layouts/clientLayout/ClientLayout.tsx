"use client";
import "@repo/ui/global.css";

import { Toast } from "@repo/ui";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import createToastStore from "../../../stores/useToastStore";
import Header from "../header/Header";

export const useToastStore = createToastStore(1000);

const ClientLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const exceptPathList = ["login", "signup"];
  const isAuthPage: boolean = exceptPathList.some((v) => pathname.includes(v));
  const { toastList } = useToastStore();
  // toast 중첩
  return (
    <>
      {!isAuthPage && <Header />}
      {children}
      {toastList.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type}
          content={toast.content}
          isOpen={toast.isOpen}
          icon={toast.props?.icon} // 명시적으로 icon 전달
          top={toast.props?.top}
          width={toast.props?.width}
          className={toast.props?.className}
        />
      ))}
    </>
  );
};

export default ClientLayout;
