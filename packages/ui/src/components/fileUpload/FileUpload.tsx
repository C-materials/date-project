import type { ChangeEvent, ComponentPropsWithoutRef } from "react";
import { useRef, useState } from "react";
import Upload from "../../../assets/uploadIcon.svg";
import Button from "../button/Button";
import { notDisplay } from "../checkBox/style.css";
import { button, icon, labelStyle, wrapper } from "./style.css";
import type { ImageType } from "./type";

type FileProps = Omit<ComponentPropsWithoutRef<"input">, "onChange"> & {
  urlList: ImageType[];
  acceptFormatList?: string;
  onChange: (files: FileList) => void;
};
const FileUpload = ({
  disabled = false,
  onChange,
  urlList,
  acceptFormatList = "image/jpg, image/png, image/jpeg",
  ...props
}: FileProps) => {
  const [isDropActive, setIsDropActive] = useState(false);

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    onChange?.(files);
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
    onChange?.(files);
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
