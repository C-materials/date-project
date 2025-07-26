import { dialogBackground } from "../style.css";

const Background = ({ onClick }: { onClick?: () => void }) => {
  // 배경 누르면 모달 닫힘
  const handleClickOutside = () => {
    // ref 조건 추가
    onClick?.();
  };
  return <div className={dialogBackground} onClick={handleClickOutside}></div>;
};

export default Background;
