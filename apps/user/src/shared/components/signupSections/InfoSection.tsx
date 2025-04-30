import { Radio, Select, TextInput } from "@repo/ui";
import { Controller, useFormContext } from "react-hook-form";
import { monthList, yearList } from "../../libs/dateList";
import { signupError, signupLimit } from "../../libs/formErrorText";
import { mainAddress, regionList } from "../../libs/regionList";
import getDayList from "../../utils/getDayList";
import {
  genderWrapper,
  inputLabel,
  inputsWrapper,
  inputWrapper,
} from "./style.css";

const InfoSection = () => {
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

  // 거주지 선택 관련 로직
  const selectedMainAddress = watch("mainAddress");
  const hasOneOption = regionList[selectedMainAddress]?.length === 1;

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
                onChangeValue={(e) => {
                  field.onChange(e);
                  setValue("birthDay", 1);
                }}
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
