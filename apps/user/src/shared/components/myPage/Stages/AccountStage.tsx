import { Button, Select, TextInput } from "@repo/ui";

import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { signupError, signupLimit } from "../../../libs/formErrorText";
import { mainAddress, regionList } from "../../../libs/regionList";
import Label from "../components/label/Label";
import {
  buttonWrapper,
  form,
  inputsWrapper,
  pwChange,
  pwWrapper,
  section,
} from "./style.css";
/**
 * @todo : 입력한 정보가 있을때는 해당 데이터를 가져와야함
 */
const AccountStage = () => {
  const [isOpenAddressOption, setIsOpenAddressOption] = useState({
    mainAddress: false,
    subAddress: false,
  });

  const method = useForm<User.AccountInfo>({
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { isDirty, errors },
  } = method;

  // 임시 핸들러
  const onSubmit: SubmitHandler<User.AccountInfo> = (data) => {
    console.log(data);
  };

  // 거주지 선택 관련 로직
  const selectedMainAddress = watch("mainAddress");
  const hasOneOption = regionList[selectedMainAddress]?.length === 1;

  const handleCloseAddressOptions = (
    targetKey: keyof typeof isOpenAddressOption,
  ) => {
    setIsOpenAddressOption((prev) => ({
      ...prev,
      [targetKey]: false,
    }));
  };
  const handleClickAddressInput = (name: keyof typeof isOpenAddressOption) => {
    setIsOpenAddressOption((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // 더미 데이터
  const user: User.AccountInfo = {
    name: "홍길동",
    tel: "01012341234",
    birthYear: 1995,
    birthMonth: 12,
    birthDay: 30,
    mainAddress: "서울시",
    subAddress: "강동구",
    password: "123123123",
    referenceCode: "ABCDEF",
  };

  return (
    <FormProvider {...method}>
      <form className={form} onSubmit={handleSubmit(onSubmit)}>
        <section className={section}>
          <div>
            <Label>휴대폰 번호</Label>
            <TextInput disabled width="100%" value={user.tel} />
          </div>
          <div>
            <Label>이름</Label>
            <TextInput disabled width="100%" value={user.name} />
          </div>
          <div>
            <Label>생년월일</Label>
            <div className={inputsWrapper}>
              <Select
                disabled
                width="100%"
                placeholder="년도"
                value={user.birthYear}
              />

              <Select disabled width="100%" value={user.birthMonth} />

              <Select
                disabled
                width="100%"
                placeholder="일"
                value={user.birthDay}
              />
            </div>
          </div>
        </section>
        <section className={section}>
          <div>
            <Label>거주지</Label>
            <div className={inputsWrapper}>
              <Controller
                name="mainAddress"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    optionList={mainAddress}
                    placeholder="시 / 도"
                    width="100%"
                    value={field.value ?? user.mainAddress}
                    onChangeValue={(e) => {
                      field.onChange(e);
                      setValue("subAddress", "전체");
                    }}
                    isOpen={isOpenAddressOption.mainAddress}
                    onClickClose={() =>
                      handleCloseAddressOptions("mainAddress")
                    }
                    onMouseDown={() => handleClickAddressInput(field.name)}
                  />
                )}
              />
              <Controller
                name="subAddress"
                control={control}
                render={({ field }) => (
                  <Select
                    optionList={regionList[selectedMainAddress] || []}
                    disabled={!selectedMainAddress || hasOneOption}
                    placeholder="세부 지역"
                    width="100%"
                    value={field.value ?? user.subAddress}
                    onChangeValue={field.onChange}
                    isOpen={isOpenAddressOption.subAddress}
                    onClickClose={() => handleCloseAddressOptions("subAddress")}
                    onMouseDown={() => handleClickAddressInput(field.name)}
                  />
                )}
              />
            </div>
          </div>
          <div>
            <Label>비밀번호</Label>
            <div className={pwWrapper}>
              <TextInput
                type="password"
                width="100%"
                placeholder={`${signupLimit.password.min} ~ ${signupLimit.password.max}자 이내로 입력해주세요`}
                value={user.password}
                {...register("password", {
                  required: signupError.password.minLength,
                  minLength: {
                    value: signupLimit.password.min,
                    message: signupError.password.minLength,
                  },
                  maxLength: {
                    value: signupLimit.password.max,
                    message: signupError.password.maxLength,
                  },
                })}
                errorMessage={errors.password?.message}
              />
              <Button
                variant="primary"
                className={pwChange}
                // onClick={() => 모달 열기}
              >
                변경하기
              </Button>
            </div>
          </div>

          <div>
            <Label>가입 코드</Label>
            <TextInput disabled width="100%" value={user.referenceCode} />
          </div>
        </section>
        <div className={buttonWrapper}>
          <Button
            type="button"
            variant="secondary"
            onClick={() => console.log(watch())}
          >
            미리보기
          </Button>
          <Button type="submit" variant="primary" disabled={!isDirty}>
            저장하기
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default AccountStage;
