import { Button, Dialog, TextInput } from "@repo/ui";
import type { SubmitHandler } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import {
  resetPasswordError,
  signupLimit,
} from "../../../../libs/formErrorText";
import Label from "../label/Label";
import { content } from "./style.css";

type DialogProp = {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
};
const ResetPasswordDialog = ({ isOpen, isMobile, onClose }: DialogProp) => {
  const method = useForm<User.ResetPasswordForm>({
    mode: "onChange",
  });
  const {
    watch,
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = method;

  /**
   * @TODO API : 현재 비밀번호 검증 & 유저 비밀번호 데이터 변경 -> 응답 코드 별 에러 핸들링
   *
   */
  const onSubmit: SubmitHandler<User.ResetPasswordForm> = (data) => {
    console.log(data);
  };
  return (
    <Dialog
      isOpen={isOpen}
      isMobile={isMobile}
      onClose={onClose}
      closeButton={true}
    >
      <Dialog.Header>비밀번호 변경</Dialog.Header>
      <FormProvider {...method}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Dialog.Content>
            <div className={content}>
              <Label>현재 비밀번호</Label>
              <TextInput
                width="100%"
                errorMessage={errors.prevPassword?.message}
                placeholder="기존 비밀번호를 입력해주세요"
                {...register("prevPassword", {
                  required: resetPasswordError.password.require,
                  minLength: {
                    value: signupLimit.password.min,
                    message: resetPasswordError.password.minLength,
                  },
                  maxLength: {
                    value: signupLimit.password.max,
                    message: resetPasswordError.password.maxLength,
                  },
                  validate: {
                    trim: (value: string) =>
                      value.trim().length > 0
                        ? true
                        : resetPasswordError.prevPassword.error,
                  },
                })}
              />
              <Label>새 비밀번호</Label>
              <TextInput
                width="100%"
                placeholder="변경할 비밀번호를 입력해주세요"
                errorMessage={errors.newPassword?.message}
                {...register("newPassword", {
                  required: resetPasswordError.password.require,
                  minLength: {
                    value: signupLimit.password.min,
                    message: resetPasswordError.password.minLength,
                  },
                  maxLength: {
                    value: signupLimit.password.max,
                    message: resetPasswordError.password.maxLength,
                  },
                  validate: {
                    trim: (value: string) =>
                      value.trim().length > 0
                        ? true
                        : resetPasswordError.prevPassword.error,
                  },
                })}
              />
              <Label>새 비밀번호 확인</Label>
              <TextInput
                width="100%"
                placeholder="한번 더 입력해주세요"
                errorMessage={errors.newPasswordConfirm?.message}
                {...register("newPasswordConfirm", {
                  required: resetPasswordError.password.require,
                  minLength: {
                    value: signupLimit.password.min,
                    message: resetPasswordError.password.minLength,
                  },
                  maxLength: {
                    value: signupLimit.password.max,
                    message: resetPasswordError.password.maxLength,
                  },
                  validate: (value) =>
                    value === watch("newPassword") ||
                    resetPasswordError.password.wrongCheck,
                })}
              />
            </div>
          </Dialog.Content>
          <Dialog.Footer>
            <Button type="button" variant="outline" onClick={onClose}>
              취소
            </Button>
            <Button type="submit" variant="primary" disabled={!isValid}>
              변경하기
            </Button>
          </Dialog.Footer>
        </form>
      </FormProvider>
    </Dialog>
  );
};

export default ResetPasswordDialog;
