import { bg, contentWrapper } from "./_shared/style.css";

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
