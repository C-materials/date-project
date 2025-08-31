import type { ReactNode } from "react";
import { bodyContent } from "../style.css";

const DialogContent = ({ children }: { children: ReactNode }) => {
  return <div className={bodyContent}>{children}</div>;
};

export default DialogContent;
