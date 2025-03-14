import InputWrapper from "../inputWrapper/InputWrapper";
import addImage from "../../assets/addImage.png";
import * as style from "./style.css";
import useImageUrlStore from "../../store/useImageUrlStore";
import type { ChangeEvent } from "react";
import { useState } from "react";
const ImageInput = () => {
  const { setUrlList, urlList } = useImageUrlStore();
  const [isActive, setIsActive] = useState(false);
  const uploadFiles = (files: FileList) => {
    if (urlList.length + files.length > 4) {
      alert("사진은 최대 4장 등록 가능합니다.");
    } else {
      const newUrlList = [...urlList];
      for (let file of files) {
        const url = URL.createObjectURL(file);
        const uuid = crypto.randomUUID();
        const urlObj = {
          id: uuid,
          url,
        };
        newUrlList.push(urlObj);
        setUrlList(newUrlList);
      }
    }
  };
  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || [];
    uploadFiles(files as FileList);
  };
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    setIsActive(true);
  };
  const handleDragEnd = (e: React.DragEvent) => {
    e.preventDefault();
    setIsActive(false);
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
        onDragLeave={handleDragEnd}
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
