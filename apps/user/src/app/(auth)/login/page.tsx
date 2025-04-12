"use client";
import Logo from "@date-project/user/public/logo.svg";
import { Button, TextInput } from "@repo/ui";
import Link from "next/link";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import {
  buttonWrapper,
  form,
  inputWrapper,
  loginButton,
  logo,
  signupButton,
} from "../style.css";

type Login = {
  tel: number;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Login>({
    mode: "onChange",
  });

  // 임시 핸들러
  const onSubmit: SubmitHandler<Login> = (data) => console.log(data);

  /**
   * @Todo submit 처리
   * @Todo 로그인 실패 시 모달? 토스트?
   */
  return (
    <>
      <Logo alt="logo" className={logo} />
      <form className={form} onSubmit={handleSubmit(onSubmit)}>
        <div className={inputWrapper}>
          <TextInput
            width="100%"
            placeholder="휴대폰 번호"
            {...register("tel", {
              required: "휴대폰 번호를 입력해주세요.",
              maxLength: {
                value: 11,
                message: "올바른 휴대폰 번호를 입력해주세요.",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "숫자만 입력 가능합니다.",
              },
            })}
            errorMessage={errors.tel?.message}
          />
          <TextInput
            type="password"
            width="100%"
            placeholder="비밀번호"
            {...register("password")}
          />
        </div>
        <div className={buttonWrapper}>
          <Button
            type="submit"
            className={loginButton}
            disabled={!isValid}
            variant="primary"
          >
            로그인
          </Button>
          <Link href="/signup" className={signupButton}>
            회원가입
          </Link>
        </div>
      </form>
    </>
  );
}
