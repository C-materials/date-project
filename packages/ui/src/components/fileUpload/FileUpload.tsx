import type { ChangeEvent, ComponentPropsWithoutRef } from "react";
import { useRef, useState } from "react";
import Upload from "../../../assets/uploadIcon.svg";
import Button from "../button/Button";
import { notDisplay } from "../checkBox/style.css";
import { button, icon, labelStyle, wrapper } from "./style.css";

type FileProps = Omit<ComponentPropsWithoutRef<"input">, "onChange"> & {
  maxLength?: number;
  maxSize?: number;
  urlList: any[];
  acceptFormatList?: string;
  onChange: (files: any[]) => void;
};
const FileUpload = ({
  disabled = false,
  onChange,
  maxLength = 5,
  maxSize = 5,
  urlList,
  acceptFormatList = "image/jpg, image/png, image/jpeg",
  ...props
}: FileProps) => {
  const [isDropActive, setIsDropActive] = useState(false);

  const LIMIT_SIZE = maxSize * 1024 * 1024;

  //  상위에서 파일 리스트 업데이트하는 함수
  const uploadFiles = (files: FileList) => {
    if (urlList.length + files.length > maxLength) {
      alert(`사진은 최대 ${maxLength}장 등록 가능합니다.`);
      return [];
    }
    const filteredFiles = Array.from(files).filter(
      (file) => file.size < LIMIT_SIZE,
    );
    if (filteredFiles.length <= 0) {
      alert(`${maxSize}MB 이하의 파일만 업로드 가능합니다`);
      return [];
    }

    return filteredFiles.map((file) => ({
      id: `${file.lastModified} + ${file.name}`,
      url: URL.createObjectURL(file),
    }));
  };

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const uploadedFiles = uploadFiles(files);
    onChange?.(uploadedFiles);
  };

  const handleDragStart = (e: React.DragEvent) => {
    if (disabled) return;

    e.preventDefault();
    setIsDropActive(true);
  };

  const handleDragOver = (e: React.DragEvent) => {
    if (disabled) return;

    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    if (disabled) return;

    e.preventDefault();
    setIsDropActive(false);

    const files = e.dataTransfer.files;
    const uploadedFiles = uploadFiles(files);
    onChange?.(uploadedFiles);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const handleClickButton = () => {
    if (disabled) return;
    inputRef.current?.click();
  };

  return (
    <div
      className={labelStyle({
        disabled,
        isDropActive,
      })}
      onDragEnter={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e)}
      onClick={handleClickButton}
    >
      <div className={wrapper}>
        <Upload className={icon({ disabled })} />
        <p>드래그하여 파일 업로드</p>
      </div>
      <label>
        <input
          type="file"
          ref={inputRef}
          multiple
          className={notDisplay}
          accept={acceptFormatList}
          onChange={(e) => handleSelectFile(e)}
          {...props}
        />
        <Button
          variant="accent"
          type="button"
          disabled={disabled}
          className={button({ disabled })}
        >
          파일 업로드
        </Button>
      </label>
    </div>
  );
};

export default FileUpload;
