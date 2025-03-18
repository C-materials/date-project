import type { ReactNode } from "react";
import * as style from "./style.css";

const InputWrapper = ({ children }: { children: ReactNode }) => {
  // width, height, padding - variant 설정 필요
  return <div className={style.wrapper}>{children}</div>;
};

export default InputWrapper;
