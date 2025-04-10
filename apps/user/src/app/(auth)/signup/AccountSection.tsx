import { TextInput } from "@repo/ui";
import { useFormContext } from "react-hook-form";
import { inputLabel, inputWrapper } from "../style.css";
import type { Signup } from "./type";

const AccountSection = () => {
  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useFormContext<Signup>();

  const MIN_LENGTH = 8;

  return (
    <div className={inputWrapper}>
      <label>
        <span className={inputLabel}>휴대폰 번호</span>
        <TextInput
          width="100%"
          placeholder="01012345678"
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
      </label>
      <label>
        <span className={inputLabel}>비밀번호</span>
        <TextInput
          type="password"
          width="100%"
          placeholder={`${MIN_LENGTH}자리 이상 입력해주세요`}
          {...register("password", {
            required: "비밀번호를 입력해주세요",
            minLength: {
              value: MIN_LENGTH,
              message: `${MIN_LENGTH}자리 이상 입력해주세요`,
            },
          })}
          errorMessage={errors.password?.message}
        />
      </label>
      <label>
        <span className={inputLabel}>비밀번호 확인</span>
        <TextInput
          type="password"
          width="100%"
          placeholder="한번 더 입력해주세요"
          {...register("passwordCheck", {
            required: "비밀번호를 한번 더 입력해주세요",
            validate: (value) =>
              value === watch("password") || "비밀번호가 일치하지 않습니다.",
          })}
          errorMessage={errors.passwordCheck?.message}
        />
      </label>
    </div>
  );
};

export default AccountSection;
