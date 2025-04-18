"use client";
import { usePathname } from "next/navigation";
import { bg, contentWrapper } from "./_styles/style.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const isLoginPage = pathName.includes("login");
  return (
    <main className={bg}>
      <div className={contentWrapper({ isLoginPage })}>{children}</div>
    </main>
  );
}
