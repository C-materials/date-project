"use client";
import Logo from "@date-project/user/public/logo.svg";
import { Button } from "@repo/ui";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import AccountSection from "../../../shared/components/signupSections/AccountSection";
import InfoSection from "../../../shared/components/signupSections/InfoSection";
import type { User } from "../../../shared/types/user";
import { form, logoSignup, pageButton, pagination } from "../_styles/style.css";

export default function Signup() {
  const [part, setPart] = useState<"account" | "info">("account");
  const method = useForm<User.FormValue>({
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = method;

  // 임시 핸들러
  const onSubmit: SubmitHandler<User.FormValue> = (data) => console.log(data);

  const isPartAccount = part === "account";
  return (
    <FormProvider {...method}>
      <Logo alt="logo" className={logoSignup} />
      <form className={form} onSubmit={handleSubmit(onSubmit)}>
        {/* Section 조건부 렌더링 */}
        {isPartAccount ? <AccountSection /> : <InfoSection />}
        <div className={pagination}>
          <Button
            disabled={isPartAccount}
            variant="outline"
            className={pageButton}
            onClick={() => {
              setPart("account");
            }}
          >
            이전
          </Button>
          {isPartAccount ? (
            <Button
              disabled={!isPartAccount || !isValid}
              variant="secondary"
              className={pageButton}
              onClick={() => {
                setPart("info");
              }}
            >
              다음
            </Button>
          ) : (
            <Button
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
    </FormProvider>
  );
}
