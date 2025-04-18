import { TextInput } from "@repo/ui";
import { useFormContext } from "react-hook-form";
import { errorText, limit } from "../../libs/formErrorText";
import type { User } from "../../types/user";
import { inputLabel, inputWrapper } from "./style.css";

const AccountSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<User.FormValue>();

  return (
    <div className={inputWrapper}>
      <label>
        <span className={inputLabel}>휴대폰 번호</span>
        <TextInput
          type="number"
          width="100%"
          placeholder="01012345678"
          {...register("tel", {
            required: errorText.tel.error,
            validate: {
              myTelNumber: (value: number) => {
                const pattern = /^010/;
                if (!pattern.test(String(value)))
                  return errorText.tel.wrongStart;
                if (String(value).length !== 11) return errorText.tel.error;
              },
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
          placeholder={`${limit.password.min} ~ ${limit.password.max}자 이내로 입력해주세요`}
          {...register("password", {
            required: errorText.password.minLength,
            minLength: {
              value: limit.password.min,
              message: errorText.password.minLength,
            },
            maxLength: {
              value: limit.password.max,
              message: errorText.password.maxLength,
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
            validate: (value) =>
              value === watch("password") || errorText.password.wrongCheck,
          })}
          errorMessage={errors.passwordCheck?.message}
        />
      </label>
      <label>
        <span className={inputLabel}>가입 코드</span>
        <TextInput
          width="100%"
          placeholder="공유받은 코드를 입력해 주세요"
          {...register("referenceCode", {
            required: errorText.referenceCode.wrongCode,
            maxLength: {
              value: limit.referenceCode.max,
              message: errorText.referenceCode.maxLength,
            },
          })}
          errorMessage={errors.referenceCode?.message}
        />
      </label>
    </div>
  );
};

export default AccountSection;
