import type { ReactNode } from "react";
import { dialogFooter } from "../style.css";
const DialogFooter = ({ children }: { children: ReactNode }) => {
  return <div className={dialogFooter}>{children}</div>;
};

export default DialogFooter;
