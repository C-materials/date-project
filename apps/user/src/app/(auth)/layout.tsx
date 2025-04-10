import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "&Dear | 로그인",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
