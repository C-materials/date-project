import InputWrapper from "../../inputWrapper/InputWrapper";
import useImageUrlStore from "../../store/useImageUrlStore";
import { UrlType } from "../../types/imageUrlType";
import { GoXCircleFill } from "react-icons/go";
import * as style from "./style.css";
import { DragEvent } from "react";
const ImagePreview = ({ url }: { url: UrlType }) => {
  const { deleteUrl } = useImageUrlStore();
  const handleDeleteImageFile = () => {
    deleteUrl(url.id);
  };

  const handleDragImage = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDropImage = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <div draggable onDragOver={handleDragImage} onDrop={handleDropImage}>
      <InputWrapper>
        <img
          src={url.url}
          alt="미리보기"
          width={50}
          height={50}
          draggable={false}
        />
        <button
          type="button"
          onClick={handleDeleteImageFile}
          className={style.deleteButton}
        >
          <GoXCircleFill />
        </button>
      </InputWrapper>
    </div>
  );
};

export default ImagePreview;
