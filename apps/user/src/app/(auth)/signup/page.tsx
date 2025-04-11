"use client";
import { Button } from "@repo/ui";
import Image from "next/image";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import AccountSection from "../_shared/AccountSection";
import InfoSection from "../_shared/InfoSection";
import type { SignupFormField } from "../_shared/type";
import { form, logo, pageButton, pagination } from "../style.css";

export default function Signup() {
  const [part, setPart] = useState<"account" | "info">("info");
  const method = useForm<SignupFormField>({
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = method;
  // 임시 핸들러
  const onSubmit: SubmitHandler<SignupFormField> = (data) => console.log(data);
  return (
    <FormProvider {...method}>
      <Image
        src="/logo.svg"
        width={180}
        height={43}
        alt="&DEAR"
        className={logo}
      />
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
