import { tooltipWrapper } from "./style.css";

type Props = {
  content: string;
};
const ToolTip = ({ content }: Props) => {
  return (
    <>
      <div className={tooltipWrapper}>{content}</div>
    </>
  );
};

export default ToolTip;
