import type { ChangeEvent } from "react";
import { useState } from "react";
import Upload from "../../../assets/upload.svg";
import useImageUrlStore from "../../store/useImageUrlStore";
import { Color } from "../../styles";
import Button from "../button/Button";
import { basicInput, button, labelStyle, wrapper } from "./style.css";

const FileUpload = ({ disabled }: { disabled: boolean }) => {
  const { setUrlList, urlList } = useImageUrlStore();
  const [isDropActive, setIsDropActive] = useState(false);
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
    setIsDropActive(true);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    uploadFiles(files);
    setIsDropActive(false);
  };

  return (
    <div>
      <label
        className={labelStyle({
          disabled,
          isDropActive,
        })}
        htmlFor="image"
        onDragEnter={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e)}
      >
        <div className={wrapper}>
          <Upload
            width={20}
            height={20}
            fill={disabled ? Color.text.sub : Color.primary.default}
          />
          <p>드래그하여 파일 업로드</p>
        </div>
        <Button variant="accent" className={button({ disabled })}>
          파일 업로드
        </Button>
      </label>
      <input
        className={basicInput}
        id="image"
        name="image"
        type="file"
        multiple
        accept="image/png, image/jpeg, image/jpg"
        onChange={(e) => handleSelectFile(e)}
      ></input>
    </div>
  );
};

export default FileUpload;
