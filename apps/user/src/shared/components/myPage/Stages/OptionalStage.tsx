import { Button, CheckBox, Radio, Select, Tag, TextInput } from "@repo/ui";

import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { mypageError, myPageLimit } from "../../../libs/formErrorText";
import { drinkList, mbtiList, othersList } from "../../../libs/optionList";
import Label from "../components/label/Label";
import {
  buttonWrapper,
  checkBoxWrapper,
  form,
  radioWrapper,
  section,
  sectionWide,
  tagWrapper,
} from "./style.css";
/**
 * @todo : 입력한 정보가 있을때는 해당 데이터를 가져와야함
 */
const OptionalStage = () => {
  const [isOpenMBTI, setIsOpenMBTI] = useState(false);

  const handleClickMBTI = () => {
    setIsOpenMBTI((prev) => !prev);
  };

  const method = useForm<User.OptionalInfo>({
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isDirty, errors },
  } = method;

  // 임시 핸들러
  const onSubmit: SubmitHandler<User.OptionalInfo> = (data) => {
    console.log(data);
  };

  const handleToggle = (
    target: string,
    value: string[],
    onChange: (value: string[]) => void,
  ) => {
    const newValue = value.includes(target)
      ? value.filter((v) => v !== target)
      : [...value, target];
    onChange(newValue);
  };

  return (
    <FormProvider {...method}>
      <form className={form} onSubmit={handleSubmit(onSubmit)}>
        <section className={section}>
          <div>
            <Label>MBTI</Label>
            <Controller
              name="mbti"
              control={control}
              render={({ field }) => (
                <Select
                  placeholder="MBTI를 입력해주세요"
                  optionList={mbtiList}
                  value={field.value || ""}
                  onChangeValue={field.onChange}
                  onClickInput={handleClickMBTI}
                  onClickClose={() => setIsOpenMBTI(false)}
                  isOpen={isOpenMBTI}
                  width="100%"
                />
              )}
            />
          </div>
          <div>
            <Label>특기</Label>
            <TextInput
              placeholder="특기를 입력해주세요"
              width="100%"
              errorMessage={errors.skill?.message}
              {...register("skill", {
                maxLength: {
                  value: myPageLimit.skill.max,
                  message: mypageError.job.maxLength,
                },
              })}
            />
          </div>
          <div>
            <Label>자기소개</Label>
            <TextInput
              placeholder="간단한 자기소개를 입력해주세요"
              width="100%"
              errorMessage={errors.introduce?.message}
              {...register("introduce", {
                maxLength: {
                  value: myPageLimit.introduce.max,
                  message: mypageError.introduce.maxLength,
                },
              })}
            />
          </div>

          <div>
            <Label>반려동물 여부</Label>
            <Controller
              name="pet"
              control={control}
              render={({ field }) => (
                <div className={radioWrapper}>
                  <Radio
                    checked={field.value !== undefined && field.value}
                    label="있음"
                    onChange={() => field.onChange(true)}
                  ></Radio>
                  <Radio
                    checked={field.value !== undefined && !field.value}
                    label="없음"
                    onChange={() => field.onChange(false)}
                  ></Radio>
                </div>
              )}
            />
          </div>
        </section>
        <section className={sectionWide}>
          <div>
            <Label>선호 주류</Label>
            <Controller
              name="drink"
              control={control}
              defaultValue={[]}
              render={({ field }) => {
                const value = field.value || [];
                return (
                  <ul className={checkBoxWrapper}>
                    {drinkList.map((item) => (
                      <li key={item}>
                        <CheckBox
                          label={item}
                          value={item}
                          checked={value.includes(item)}
                          onChange={() =>
                            handleToggle(item, field.value, field.onChange)
                          }
                        />
                      </li>
                    ))}
                  </ul>
                );
              }}
            />
          </div>
          <div>
            <Label>기타 어필 사항</Label>
            <Controller
              name="other"
              control={control}
              defaultValue={[]}
              render={({ field }) => {
                const value = field.value || [];
                return (
                  <ul className={tagWrapper}>
                    {othersList.map((item) => (
                      <Tag
                        as="li"
                        key={item}
                        content={item}
                        checked={value.includes(item)}
                        onClick={() =>
                          handleToggle(item, field.value, field.onChange)
                        }
                      />
                    ))}
                  </ul>
                );
              }}
            />
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

export default OptionalStage;
