import { Button } from "@repo/ui";
import Image from "next/image";
import {
  button,
  buttonWrapper,
  description,
  section,
  subtext,
  text,
} from "./_shared/style.css";

const NotApproved = () => {
  return (
    <section className={section}>
      <h1>
        <Image src="/logo.svg" width={200} height={64} alt="&DEAR" />
      </h1>
      <div className={description}>
        <p className={text}>가입해주셔서 감사합니다</p>
        <div className={subtext}>
          <p>가입 승인을 대기중입니다.</p>
          <p>정보를 상세하게 입력하시면 더 빠른 승인이 가능합니다.</p>
        </div>
        <div className={buttonWrapper}>
          <Button className={button} variant="primary">
            정보 입력하기
          </Button>
          <Button className={button} variant="outline">
            둘러보기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotApproved;
