"use client";
import { Button } from "@repo/ui";
import Image from "next/image";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import { form, logo, pageButton, pagination } from "../style.css";
import AccountSection from "./AccountSection";
import InfoSection from "./InfoSection";
import type { SignupFormField } from "./type";

export default function Signup() {
  const [part, setPart] = useState<"account" | "info">("account");
  const method = useForm<SignupFormField>({
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = method;
  // 임시 핸들러
  const onSubmit: SubmitHandler<SignupFormField> = (data) => console.log(data);
  const Section = (section?: "account" | "info") => {
    switch (section) {
      case "account":
        return <AccountSection />;
      case "info":
        return <InfoSection />;
      default:
        return <InfoSection />;
    }
  };
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
        {Section(part)}
        <div className={pagination}>
          <Button
            type="button"
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
              type="button"
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
