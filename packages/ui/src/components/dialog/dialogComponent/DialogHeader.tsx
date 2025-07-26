import { dialogDescription, dialogHeader, dialogTitle } from "../style.css";

export interface Props {
  description?: string;
  title: string;
}
const DialogHeader = ({ description, title }: Props) => {
  return (
    <div className={dialogHeader}>
      <span className={dialogTitle}>{title}</span>
      <p className={dialogDescription}>{description}</p>
    </div>
  );
};

export default DialogHeader;
