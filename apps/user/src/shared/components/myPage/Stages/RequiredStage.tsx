import { Button, FileUpload, Radio, Select, TextInput } from "@repo/ui";

import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { mypageError, myPageLimit } from "../../../libs/formErrorText";
import { religionList } from "../../../libs/optionList";
import CountText from "../components/countText/CountText";
import ImagePreviewItem from "../components/imagePreview/ImagePreviewItem";
import Label from "../components/label/Label";
import ToolTip from "../components/toolTip/ToolTip";
import {
  buttonWrapper,
  countWrapper,
  fieldWrapper,
  form,
  imageWrapper,
  radioWrapper,
  section,
} from "./style.css";
import type { ImageType } from "./type";
/**
 * @todo : 입력한 정보가 있을때는 해당 데이터를 가져와야함
 */
const RequiredStage = () => {
  const [previewImageList, setPreviewImageList] = useState<ImageType[]>([]);
  const [isOpenReligion, setIsOpenReligion] = useState(false);

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
    getValues,
    watch,
    setValue,
    formState: { isValid, errors },
  } = method;

  // 임시 핸들러
  const onSubmit: SubmitHandler<User.RequiredInfo> = (data) => {
    console.log(data);
  };

  // 이미지
  const LIMIT_SIZE = myPageLimit.image.max * 1024 * 1024;

  const handleChangeImage = (
    files: FileList,
    onChange: (newFileList: File[]) => void,
  ) => {
    // 크기 제한
    const sizeFiltered = Array.from(files).filter(
      (file) => file.size <= LIMIT_SIZE,
    );
    if (sizeFiltered.length !== files.length) alert(mypageError.image.maxSize);

    // 개수 제한
    let slicedFiles = sizeFiltered.slice(0, myPageLimit.image.max);

    // 기존 + 새로 선택해서 개수 초과할때 => 5개까지만 추가 업로드
    if (previewImageList.length + sizeFiltered.length > myPageLimit.image.max) {
      alert(mypageError.image.maxLength);
      slicedFiles = sizeFiltered.slice(
        0,
        myPageLimit.image.max - previewImageList.length,
      );
    }

    setPreviewImageList((prev) => [
      ...prev,
      ...slicedFiles.map((file) => ({
        id: `${Date.now()}___${file.name}`,
        url: URL.createObjectURL(file),
      })),
    ]);
    //이전에 선택한 파일까지 함께 전달받아야함
    onChange([...prevFiles, ...slicedFiles]);
  };
  const prevFiles = getValues("images") || [];

  const handleDeleteImage = (
    targetId: string,
    onChange: (files: File[]) => void,
  ) => {
    const newImageUrlList = previewImageList.filter(
      (item) => item.id !== targetId,
    );
    setPreviewImageList(newImageUrlList);

    const newFileList = prevFiles.filter(
      (file) => !file.name.includes(targetId.split("___")[1] ?? ""),
    );
    onChange([...newFileList]);
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    // File 순서 재정렬 -> 폼 데이터
    let list = watch("images");
    const splicedItem = list.splice(startIndex, 1);
    list.splice(endIndex, 0, ...splicedItem);
    setValue("images", list);

    // preview 순서 재정렬
    const reorderedPreviewList = previewImageList;
    const movedItem = reorderedPreviewList.splice(startIndex, 1);
    reorderedPreviewList.splice(endIndex, 0, ...movedItem);

    setPreviewImageList(reorderedPreviewList);
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
                validate: {
                  trim: (value: string) =>
                    value.trim().length > 0 ? true : mypageError.job.error,
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
                  value={field.value || ""}
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
                    const regex = /^[12]\d{2}$/;
                    if (!regex.test(value.toString()))
                      return mypageError.height.error;
                  },
                },
              })}
            />
          </div>
          <div>
            <Label>흡연 여부</Label>
            <Controller
              name="smoke"
              rules={{ required: true }}
              control={control}
              render={({ field }) => (
                <div className={radioWrapper}>
                  <Radio
                    checked={field.value !== undefined && !field.value}
                    label="비흡연"
                    onChange={() => field.onChange(false)}
                  ></Radio>
                  <Radio
                    checked={field.value !== undefined && field.value}
                    label="흡연"
                    onChange={() => field.onChange(true)}
                  ></Radio>
                </div>
              )}
            />
          </div>
        </section>
        <section className={section}>
          <div>
            <div className={countWrapper}>
              <Label>취미</Label>
              <CountText
                count={watch("hobby")?.length}
                limit={myPageLimit.hobby.max}
              />
            </div>
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
                validate: {
                  trim: (value: string) =>
                    value.trim().length > 0 ? true : mypageError.job.error,
                },
              })}
            />
          </div>
          <div>
            <Label>프로필 사진 (최대 5장)</Label>
            <div className={fieldWrapper}>
              <Controller
                name="images"
                control={control}
                rules={{
                  required: mypageError.image.minLength,
                }}
                render={({ field }) => (
                  <>
                    <FileUpload
                      onChange={(files: FileList) => {
                        handleChangeImage(files, field.onChange);
                      }}
                      urlList={previewImageList}
                      acceptFormatList="image/jpg, image/png, image/jpeg, image/webp, image/heic"
                    />
                    <DragDropContext onDragEnd={handleDragEnd}>
                      <Droppable droppableId="droppable" direction="horizontal">
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            className={imageWrapper}
                            {...provided.droppableProps}
                          >
                            {previewImageList.map((item, index) => (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.dragHandleProps}
                                    {...provided.draggableProps}
                                  >
                                    <ImagePreviewItem
                                      item={item}
                                      onClickDelete={() =>
                                        handleDeleteImage(
                                          item.id,
                                          field.onChange,
                                        )
                                      }
                                    />
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                            <ToolTip content="대표 이미지" />
                          </div>
                        )}
                      </Droppable>
                    </DragDropContext>
                  </>
                )}
              />
            </div>
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
          <Button type="submit" variant="primary" disabled={!isValid}>
            저장하기
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default RequiredStage;
