import type { ReactNode } from "react";
import ReactDOM from "react-dom";

type PortalType = {
  children: ReactNode;
  container?: Element;
};

const Portal = ({ children, container }: PortalType) => {
  const target = container || document.body;

  return ReactDOM.createPortal(children, target);
};

export default Portal;
