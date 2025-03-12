import { ReactNode } from "react";
import * as style from "./style.css";

const InputWrapper = ({ children }: { children: ReactNode }) => {
  // width, height prop으로 받거나 size variant 설정 필요
  return <div className={style.wrapper}>{children}</div>;
};

export default InputWrapper;
