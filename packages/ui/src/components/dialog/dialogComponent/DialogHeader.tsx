import type { ReactNode } from "react";
import { dialogDescription, dialogHeader, dialogTitle } from "../style.css";

export type Props = {
  description?: string;
  children: ReactNode;
};

/**
 * @param title : title
 * @param description : subtitle
 */
const DialogHeader = ({ description, children }: Props) => {
  return (
    <div className={dialogHeader}>
      <span className={dialogTitle}>{children}</span>
      {description && <p className={dialogDescription}>{description}</p>}
    </div>
  );
};

export default DialogHeader;
