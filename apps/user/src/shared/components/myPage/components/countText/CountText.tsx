import { text } from "./style.css";

type Props = {
  count: number;
  limit: number;
};
const CountText = ({ count, limit }: Props) => {
  return (
    <span className={text}>
      {count}/{limit}
    </span>
  );
};

export default CountText;
