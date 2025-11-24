import type { ReactNode } from "react";
import { label } from "./style.css";

const Label = ({ children }: { children: ReactNode }) => {
  return <label className={label}>{children}</label>;
};

export default Label;
