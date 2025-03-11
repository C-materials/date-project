import { ReactNode } from "react";
import * as style from "./style.css";

const InputWrapper = ({ children }: { children: ReactNode }) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default InputWrapper;
