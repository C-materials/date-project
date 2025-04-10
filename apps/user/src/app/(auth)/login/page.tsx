"use client";
import { Button, TextInput } from "@repo/ui";
import Image from "next/image";
import Link from "next/link";
import {
  buttonWrapper,
  form,
  inputWrapper,
  loginButton,
  signupButton,
} from "../style.css";
export default function Login() {
  return (
    <>
      <Image src="/logo.svg" width={200} height={64} alt="&DEAR" />
      <form className={form}>
        <div className={inputWrapper}>
          <TextInput type="tel" width="100%" placeholder="휴대폰 번호" />
          <TextInput type="password" width="100%" placeholder="비밀번호" />
        </div>
        <div className={buttonWrapper}>
          <Button
            type="button"
            className={loginButton}
            disabled={true}
            variant="secondary"
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
