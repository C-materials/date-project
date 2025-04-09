import "@repo/ui/global.css";
import type { Metadata } from "next";
import Header from "./components/header/Header";
import "./global.css";

export const metadata: Metadata = {
  title: "&Dear",
  description: "Endear yourself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
