import { Suspense } from "react";
import ClientLayout from "../shared/components/layouts/clientLayout/ClientLayout";
import "./global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ClientLayout>
          <Suspense>{children}</Suspense>
        </ClientLayout>
      </body>
    </html>
  );
}
