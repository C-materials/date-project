import { bg, contentWrapper } from "./style.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={bg}>
      <div className={contentWrapper}>{children}</div>
    </main>
  );
}
