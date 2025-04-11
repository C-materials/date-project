import { Radio, Select, TextInput } from "@repo/ui";
import type { MouseEvent } from "react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  febDayList,
  longDayList,
  monthList,
  shortDayList,
  yearList,
} from "../../util/dateList";
import { regionList } from "../../util/regionList";
import {
  birthWrapper,
  genderWrapper,
  inputLabel,
  inputWrapper,
} from "../style.css";
import type { SignupFormField } from "./type";

const InfoSection = () => {
  const [isOpenBirthOption, setIsOpenBirthOption] = useState({
    birthYear: false,
    birthMonth: false,
    birthDay: false,
  });
  const [isOpenAddressOption, setIsOpenAddressOption] = useState(false);
  const {
    register,
    formState: { errors },
    watch,
    control,
  } = useFormContext<SignupFormField>();

  const birthMonth = Number(watch("birthMonth"));
  const dayList =
    birthMonth === 2 ? febDayList : birthMonth % 2 ? shortDayList : longDayList;

  const handleCloseOptions = (targetKey: keyof typeof isOpenBirthOption) => {
    setIsOpenBirthOption((prev) => ({
      ...prev,
      [targetKey]: false,
    }));
  };
  const handleClickInput = (name: keyof typeof isOpenBirthOption) => {
    setIsOpenBirthOption((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };
  return (
    <div className={inputWrapper}>
      <label>
        <span className={inputLabel}>이름</span>
        <TextInput
          {...register("name", { required: "이름을 입력해주세요" })}
          width="100%"
          placeholder="실명을 입력해주세요"
          errorMessage={errors.password?.message}
        />
      </label>

      <>
        <span className={inputLabel}>생년월일</span>
        <div className={birthWrapper}>
          <Controller
            name="birthYear"
            control={control}
            render={({ field }) => (
              <Select
                width="88px"
                placeholder="년도"
                optionList={yearList}
                value={field.value ?? ""}
                onChangeValue={field.onChange}
                isOpen={isOpenBirthOption.birthYear}
                onClickClose={() => handleCloseOptions("birthYear")}
                onMouseDown={() => handleClickInput(field.name)}
              />
            )}
          />
          <Controller
            name="birthMonth"
            control={control}
            render={({ field }) => (
              <Select
                width="68px"
                placeholder="월"
                optionList={monthList}
                value={field.value ?? ""}
                onChangeValue={field.onChange}
                isOpen={isOpenBirthOption.birthMonth}
                onClickClose={() => handleCloseOptions("birthMonth")}
                onMouseDown={() => handleClickInput(field.name)}
              />
            )}
          />
          <Controller
            name="birthDay"
            control={control}
            render={({ field }) => (
              <Select
                width="68px"
                placeholder="일"
                optionList={dayList}
                value={field.value ?? ""}
                onChangeValue={field.onChange}
                isOpen={isOpenBirthOption.birthDay}
                onClickClose={() => handleCloseOptions("birthDay")}
                onMouseDown={() => handleClickInput(field.name)}
              />
            )}
          />
        </div>
      </>

      <label>
        <span className={inputLabel}>거주지</span>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <Select
              optionList={regionList}
              placeholder="현재 거주지"
              width="100%"
              value={field.value ?? ""}
              onChangeValue={field.onChange}
              isOpen={isOpenAddressOption}
              onClickClose={() => {
                setIsOpenAddressOption(false);
              }}
              onMouseDown={(e: MouseEvent<HTMLDivElement>) => {
                setIsOpenAddressOption((prev) => !prev);
                e.stopPropagation();
              }}
            />
          )}
        />
      </label>

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
