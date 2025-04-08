import type { ReactNode } from "react";
import { itemWrapper } from "./style.css";

const ItemGroup = ({ children }: { children: ReactNode }) => {
  return <ul className={itemWrapper}>{children}</ul>;
};

export default ItemGroup;
