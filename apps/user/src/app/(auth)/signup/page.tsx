"use client";
import Logo from "@date-project/user/public/logo.svg";
import { Button } from "@repo/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import AccountSection from "../../../shared/components/signupSections/AccountSection";
import InfoSection from "../../../shared/components/signupSections/InfoSection";
import {
  form,
  loginLink,
  loginText,
  logoSignup,
  pageButton,
  pagination,
} from "../_styles/style.css";

export default function Signup() {
  const [part, setPart] = useState<"account" | "info">("account");
  const router = useRouter();

  const method = useForm<User.FormValue>({
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = method;

  const isAccountPart = part === "account";

  // 임시 핸들러
  const onSubmit: SubmitHandler<User.FormValue> = (data) => {
    console.log(data);
    router.push("/");
  };
  return (
    <FormProvider {...method}>
      <Logo alt="logo" className={logoSignup} />
      <form className={form} onSubmit={handleSubmit(onSubmit)}>
        {/* Section 조건부 렌더링 */}
        {isAccountPart ? <AccountSection /> : <InfoSection />}
        <div className={pagination}>
          <Button
            disabled={isAccountPart}
            variant="outline"
            className={pageButton}
            onClick={() => {
              setPart("account");
            }}
          >
            이전
          </Button>
          {isAccountPart ? (
            <Button
              key="next"
              disabled={!isAccountPart || !isValid}
              variant="secondary"
              className={pageButton}
              onClick={() => setPart("info")}
            >
              다음
            </Button>
          ) : (
            <Button
              key="submit"
              type="submit"
              disabled={!isValid}
              variant="secondary"
              className={pageButton}
            >
              완료
            </Button>
          )}
        </div>
      </form>

      <span className={loginText}>
        이미 계정이 있으신가요?{" "}
        <Link href="/login" className={loginLink}>
          로그인
        </Link>
        하러 가기
      </span>
    </FormProvider>
  );
}
