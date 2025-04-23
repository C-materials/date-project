"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { ReactNode } from "react";
import AccountStage from "../../shared/components/myPage/Stages/AccountStage";
import OptionalStage from "../../shared/components/myPage/Stages/OptionalStage";
import RequiredStage from "../../shared/components/myPage/Stages/RequiredStage";
import {
  description,
  mypage,
  tabMenuItem,
  tabMenuWrapper,
  title,
  titleWrapper,
} from "./style.css";

export default function MyPageStage() {
  const searchParams = useSearchParams();
  type Stage = "required" | "optional" | "account";
  const stage = (searchParams.get("stage") as Stage) || "required";

  const tabInfo: {
    param: Stage;
    menu: string;
    description: string;
    component: ReactNode;
  }[] = [
    {
      param: "required",
      menu: "필수 입력",
      description: "필수 정보를 모두 입력하시면 프로필이 공개됩니다.",
      component: <RequiredStage />,
    },
    {
      param: "optional",
      menu: "선택 입력",
      description: "추가 정보를 입력하시면 매칭 확률이 높아집니다.",
      component: <OptionalStage />,
    },
    {
      param: "account",
      menu: "회원 정보",
      description:
        "일부 항목은 관리자 승인 후 수정이 가능합니다. 변경이 필요한 경우 문의해주세요.",
      component: <AccountStage />,
    },
  ];

  return (
    <section className={mypage}>
      <div>
        <div className={titleWrapper}>
          <h1 className={title}>정보 수정</h1>
        </div>

        <p className={description}>
          {tabInfo.find((item) => item.param === stage)?.description || ""}
        </p>
      </div>
      <div>
        <ul className={tabMenuWrapper}>
          {tabInfo.map((item) => (
            <li
              key={item.param}
              className={tabMenuItem({ isSelected: item.param === stage })}
            >
              <Link href={`/mypage?stage=${item.param}`}>{item.menu}</Link>
            </li>
          ))}
        </ul>
        {tabInfo.find((item) => item.param === stage)?.component}
      </div>
    </section>
  );
}
