"use client";
import Logo from "@date-project/user/public/logo.svg";
import { Button } from "@repo/ui";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import type { User } from "../../types/user";
import AccountSection from "../_shared/AccountSection";
import InfoSection from "../_shared/InfoSection";
import { form, logo, pageButton, pagination } from "../style.css";

export default function Signup() {
  const [part, setPart] = useState<"account" | "info">("info");
  const method = useForm<User.FormValue>({
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = method;
  // 임시 핸들러
  const onSubmit: SubmitHandler<User.FormValue> = (data) => console.log(data);
  return (
    <FormProvider {...method}>
      <Logo alt="logo" className={logo} />
      <form className={form} onSubmit={handleSubmit(onSubmit)}>
        {/* Section 조건부 렌더링 */}
        {part === "account" ? <AccountSection /> : <InfoSection />}
        <div className={pagination}>
          <Button
            disabled={part === "account"}
            variant="outline"
            className={pageButton}
            onClick={() => {
              setPart("account");
            }}
          >
            이전
          </Button>
          {part === "account" ? (
            <Button
              disabled={part !== "account" || !isValid}
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
              onClick={() => {
                setPart("info");
              }}
            >
              완료
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
