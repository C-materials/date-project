"use client";
import "@repo/ui/global.css";

import { Toast } from "@repo/ui";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import createToastStore from "../../../stores/useToastStore";
import Header from "../header/Header";
import { toastItem, toastWrapper } from "./style.css";

export const useToastStore = createToastStore(2000);

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
      <ul className={toastWrapper}>
        {toastList.map((toast, index) => (
          <li key={toast.id}>
            <Toast
              type={toast.type}
              content={toast.content}
              isOpen={toast.isOpen}
              icon={toast.props?.icon}
              top={64 + index * 52}
              width={toast.props?.width}
              className={toastItem}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClientLayout;
