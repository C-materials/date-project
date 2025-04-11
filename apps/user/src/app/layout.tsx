"use client";
import "@repo/ui/global.css";
import ClientLayout from "./_components/layout/clientLayout/ClientLayout";
import "./global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
