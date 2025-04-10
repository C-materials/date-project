"use client";
import "@repo/ui/global.css";
import { usePathname } from "next/navigation";
import Header from "./components/header/Header";
import "./global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage = pathname.includes("login") || pathname.includes("signup");
  return (
    <html lang="ko">
      <body>
        {!isAuthPage && <Header />}
        {children}
      </body>
    </html>
  );
}
