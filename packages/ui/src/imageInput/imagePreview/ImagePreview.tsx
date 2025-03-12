import InputWrapper from "../../inputWrapper/InputWrapper";
import useImageUrlStore from "../../store/useImageUrlStore";
import { UrlType } from "../../types/imageUrlType";
import { GoXCircleFill } from "react-icons/go";
import * as style from "./style.css";
const ImagePreview = ({ url }: { url: UrlType }) => {
  const { deleteUrl } = useImageUrlStore();
  const handleDeleteImageFile = () => {
    deleteUrl(url.id);
  };

  return (
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
  );
};

export default ImagePreview;
