import Logo from "@date-project/user/public/logo.svg";
import { Button } from "@repo/ui";
import {
  buttonWrapper,
  description,
  logo,
  section,
  subtext,
  text,
} from "./style/style.css";

const NotApproved = () => {
  return (
    <section className={section}>
      <h1>
        <Logo className={logo} />
      </h1>
      <div className={description}>
        <p className={text}>가입해주셔서 감사합니다</p>
        <div className={subtext}>
          <p>가입 승인을 대기중입니다.</p>
          <p>정보를 상세하게 입력하시면 더 빠른 승인이 가능합니다.</p>
        </div>
        <div className={buttonWrapper}>
          <Button variant="primary">정보 입력하기</Button>
          <Button variant="outline">둘러보기</Button>
        </div>
      </div>
    </section>
  );
};

export default NotApproved;
