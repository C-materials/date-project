import type { ChangeEvent } from "react";
import { useState } from "react";
import addImage from "../../../../assets/addImage.png";
import useImageUrlStore from "../../../../store/useImageUrlStore";
import InputWrapper from "../InputWrapper/InputWrapper";
import * as style from "./style.css";

const ImageInput = () => {
  const { setUrlList, urlList } = useImageUrlStore();
  const [isActive, setIsActive] = useState(false);
  const LIMIT_SIZE = 3 * 1024 * 1024;
  const uploadFiles = (files: FileList) => {
    if (urlList.length + files.length > 4) {
      alert("사진은 최대 4장 등록 가능합니다.");
    } else {
      const filteredFiles = Array.from(files).filter(
        (file) => file.size < LIMIT_SIZE,
      );
      if (filteredFiles.length <= 0) {
        alert("3MB 이하의 파일만 업로드 가능합니다");
      }
      setUrlList([
        ...urlList,
        ...filteredFiles.map((file) => ({
          id: crypto.randomUUID(),
          url: URL.createObjectURL(file),
        })),
      ]);
    }
  };
  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    uploadFiles(files);
  };
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    setIsActive(true);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    uploadFiles(files);
    setIsActive(false);
  };

  return (
    <InputWrapper>
      <label
        className={isActive ? `${style.label.active}` : `${style.label.none}`}
        htmlFor="image"
        onDragEnter={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e)}
      >
        <img src={addImage} width={34} height={34} alt="Add Image" />
        <div>
          <p>클릭하여 이미지 첨부하기</p>
          <p>또는 파일을 여기로 드래그하세요</p>
        </div>
      </label>
      <input
        className={style.basicInput}
        id="image"
        name="image"
        type="file"
        multiple
        accept="image/png, image/jpeg, image/jpg"
        onChange={(e) => handleSelectFile(e)}
      ></input>
    </InputWrapper>
  );
};

export default ImageInput;
