import type { ChangeEvent, ComponentPropsWithoutRef } from "react";
import { useRef, useState } from "react";
import Upload from "../../../assets/uploadIcon.svg";
import useImageUrlStore from "../../store/useImageUrlStore";
import Button from "../button/Button";
import { notDisplay } from "../checkBox/style.css";
import { button, icon, labelStyle, wrapper } from "./style.css";

type FileProps = ComponentPropsWithoutRef<"input">;
const FileUpload = ({ disabled, onChange, ...props }: FileProps) => {
  const { setUrlList, urlList } = useImageUrlStore();

  const [isDropActive, setIsDropActive] = useState(false);

  const LIMIT_SIZE = 3 * 1024 * 1024;

  //  전역상태 업데이트하는 함수
  const uploadFiles = (files: FileList) => {
    if (urlList.length + files.length > 4) {
      alert("사진은 최대 4장 등록 가능합니다.");
      return;
    }
    const filteredFiles = Array.from(files).filter(
      (file) => file.size < LIMIT_SIZE,
    );
    if (filteredFiles.length <= 0) {
      alert("3MB 이하의 파일만 업로드 가능합니다");
      return;
    }
    setUrlList([
      ...urlList,
      ...filteredFiles.map((file) => ({
        id: crypto.randomUUID(),
        url: URL.createObjectURL(file),
      })),
    ]);
  };

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    uploadFiles(files);
    onChange?.(e);
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
    setIsDropActive(false);

    const files = e.dataTransfer.files;
    uploadFiles(files);

    if (onChange) {
      const target = { files } as EventTarget & HTMLInputElement;
      onChange({ target } as ChangeEvent<HTMLInputElement>);
    }
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
          accept="image/png, image/jpeg, image/jpg"
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
