import { Radio, Select, TextInput } from "@repo/ui";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { monthList, yearList } from "../../libs/dateList";
import { signupError, signupLimit } from "../../libs/formErrorText";
import { mainAddress, regionList } from "../../libs/regionList";
import type { User } from "../../types/user";
import getDayList from "../../utils/getDayList";
import {
  genderWrapper,
  inputLabel,
  inputsWrapper,
  inputWrapper,
} from "./style.css";

const InfoSection = () => {
  const [isOpenBirthOption, setIsOpenBirthOption] = useState({
    birthYear: false,
    birthMonth: false,
    birthDay: false,
  });
  const [isOpenAddressOption, setIsOpenAddressOption] = useState({
    mainAddress: false,
    subAddress: false,
  });

  const {
    register,
    formState: { errors },
    watch,
    control,
    setValue,
  } = useFormContext<User.FormValue>();

  // 생년월일 선택 관련 로직
  const birthYear = Number(watch("birthYear"));
  const birthMonth = Number(watch("birthMonth"));

  const handleCloseBirthOptions = (
    targetKey: keyof typeof isOpenBirthOption,
  ) => {
    setIsOpenBirthOption((prev) => ({
      ...prev,
      [targetKey]: false,
    }));
  };
  const handleClickBirthInput = (name: keyof typeof isOpenBirthOption) => {
    setIsOpenBirthOption((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
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

  useEffect(() => {
    setValue("subAddress", "전체");
  }, [selectedMainAddress]);

  return (
    <div className={inputWrapper}>
      <label>
        <span className={inputLabel}>이름</span>
        <TextInput
          {...register("name", {
            required: "이름을 입력해주세요",
            minLength: {
              value: signupLimit.name.min,
              message: signupError.name.minLength,
            },
            maxLength: {
              value: signupLimit.name.max,
              message: signupError.name.maxLength,
            },
          })}
          width="100%"
          placeholder="실명을 입력해주세요"
          errorMessage={errors.name?.message}
        />
      </label>

      <div>
        <label className={inputLabel}>생년월일</label>
        <div className={inputsWrapper}>
          <Controller
            name="birthYear"
            control={control}
            rules={{ required: signupError.birthYear.error }}
            render={({ field }) => (
              <Select
                width="88px"
                placeholder="년도"
                optionList={yearList}
                value={field.value ?? ""}
                onChangeValue={field.onChange}
                isOpen={isOpenBirthOption.birthYear}
                onClickClose={() => handleCloseBirthOptions("birthYear")}
                onMouseDown={() => handleClickBirthInput(field.name)}
                errorMessage={errors.birthYear?.message}
              />
            )}
          />
          <Controller
            name="birthMonth"
            control={control}
            rules={{ required: signupError.birthMonth.error }}
            render={({ field }) => (
              <Select
                width="68px"
                placeholder="월"
                optionList={monthList}
                value={field.value ?? ""}
                onChangeValue={field.onChange}
                isOpen={isOpenBirthOption.birthMonth}
                onClickClose={() => handleCloseBirthOptions("birthMonth")}
                onMouseDown={() => handleClickBirthInput(field.name)}
                errorMessage={errors.birthMonth?.message}
              />
            )}
          />
          <Controller
            name="birthDay"
            control={control}
            rules={{ required: signupError.birthDay.error }}
            render={({ field }) => (
              <Select
                width="68px"
                placeholder="일"
                optionList={getDayList(birthYear, birthMonth)}
                value={field.value ?? ""}
                onChangeValue={field.onChange}
                isOpen={isOpenBirthOption.birthDay}
                onClickClose={() => handleCloseBirthOptions("birthDay")}
                onMouseDown={() => handleClickBirthInput(field.name)}
                errorMessage={errors.birthDay?.message}
              />
            )}
          />
        </div>
      </div>
      <div>
        <label className={inputLabel}>거주지</label>
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
                value={field.value ?? ""}
                onChangeValue={(e) => {
                  field.onChange(e);
                  setValue("subAddress", "전체");
                }}
                isOpen={isOpenAddressOption.mainAddress}
                onClickClose={() => handleCloseAddressOptions("mainAddress")}
                onMouseDown={() => handleClickAddressInput(field.name)}
              />
            )}
          />
          {/* 세부 지역은 필수 선택 아님 */}
          <Controller
            name="subAddress"
            control={control}
            render={({ field }) => (
              <Select
                optionList={regionList[selectedMainAddress] || []}
                disabled={!selectedMainAddress || hasOneOption}
                placeholder="세부 지역"
                width="100%"
                value={field.value ?? "전체"}
                onChangeValue={field.onChange}
                isOpen={isOpenAddressOption.subAddress}
                onClickClose={() => handleCloseAddressOptions("subAddress")}
                onMouseDown={() => handleClickAddressInput(field.name)}
              />
            )}
          />
        </div>
      </div>

      <label>
        <span className={inputLabel}>성별</span>
        <div className={genderWrapper}>
          <Radio
            label="남성"
            value="male"
            checked={watch("gender") === "male"}
            {...register("gender", { required: true })}
          />
          <Radio
            label="여성"
            value="female"
            checked={watch("gender") === "female"}
            {...register("gender", { required: true })}
          />
        </div>
      </label>
    </div>
  );
};

export default InfoSection;
