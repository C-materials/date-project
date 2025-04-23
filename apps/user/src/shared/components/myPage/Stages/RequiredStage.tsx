import { Button, FileUpload, Radio, Select, TextInput } from "@repo/ui";

import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { mypageError, myPageLimit } from "../../../libs/formErrorText";
import type { User } from "../../../types/user";
import Label from "../components/Label";
import { buttonWrapper, form, radioWrapper, section } from "./style.css";

const RequiredStage = () => {
  const [isOpenReligion, setIsOpenReligion] = useState(false);

  const religionList = ["없음", "기독교", "불교", "천주교", "기타"];
  const handleClickReligion = () => {
    setIsOpenReligion((prev) => !prev);
  };

  //react hook form

  const method = useForm<User.RequiredInfo>({
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isValid, errors },
  } = method;

  // 임시 핸들러
  const onSubmit: SubmitHandler<User.RequiredInfo> = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...method}>
      <form className={form} onSubmit={handleSubmit(onSubmit)}>
        <section className={section}>
          <div>
            <Label>직업</Label>
            <TextInput
              placeholder="직업을 입력해주세요"
              width="100%"
              errorMessage={errors.job?.message}
              {...register("job", {
                required: mypageError.job.error,
                maxLength: {
                  value: myPageLimit.job.max,
                  message: mypageError.job.maxLength,
                },
              })}
            />
          </div>
          <div>
            <Label>종교</Label>
            <Controller
              name="religion"
              control={control}
              rules={{ required: mypageError.religion.error }}
              render={({ field }) => (
                <Select
                  placeholder="종교를 선택해주세요"
                  optionList={religionList}
                  value={field.value}
                  onChangeValue={field.onChange}
                  onClickInput={handleClickReligion}
                  onClickClose={() => setIsOpenReligion(false)}
                  isOpen={isOpenReligion}
                  width="100%"
                  errorMessage={errors.religion?.message}
                />
              )}
            />
          </div>
          <div>
            <Label>키 (cm)</Label>
            <TextInput
              placeholder="숫자만 입력해주세요"
              type="number"
              width="100%"
              errorMessage={errors.height?.message}
              {...register("height", {
                required: mypageError.height.error,
                validate: {
                  heightNumber: (value: number) => {
                    if (
                      value.toString().length < 3 ||
                      (value.toString()[0] !== "1" &&
                        value.toString()[0] !== "2")
                    )
                      return mypageError.height.error;
                  },
                },
              })}
            />
          </div>
          <div>
            <Label>흡연 여부</Label>
            <div className={radioWrapper}>
              <Radio
                checked={watch("smoke") === "non-smoke"}
                label="비흡연"
                value="non-smoke"
                {...register("smoke", { required: true })}
              ></Radio>
              <Radio
                checked={watch("smoke") === "smoke"}
                label="흡연"
                value="smoke"
                {...register("smoke", { required: true })}
              ></Radio>
            </div>
          </div>
        </section>
        <section className={section}>
          <div>
            <Label>취미</Label>
            <TextInput
              placeholder="자유롭게 입력해주세요"
              width="100%"
              errorMessage={errors.hobby?.message}
              {...register("hobby", {
                required: mypageError.hobby.error,
                maxLength: {
                  value: myPageLimit.hobby.max,
                  message: mypageError.hobby.maxLength,
                },
              })}
            />
          </div>
          <div>
            <Label>프로필 사진 (최대 5장)</Label>
            <Controller
              name="images"
              rules={{ required: true }}
              render={({ field }) => <FileUpload />}
            />
            {/* 프리뷰 아이템 */}
          </div>
        </section>
        <div className={buttonWrapper}>
          <Button type="button" variant="secondary">
            미리보기
          </Button>
          <Button type="submit" variant="primary" disabled={!isValid}>
            저장하기
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default RequiredStage;
