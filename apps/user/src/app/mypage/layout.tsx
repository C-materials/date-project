import { type ReactNode } from "react";
import { layoutMain } from "./style.css";

export default function MypageLayout({ children }: { children: ReactNode }) {
  return <main className={layoutMain}>{children}</main>;
}
