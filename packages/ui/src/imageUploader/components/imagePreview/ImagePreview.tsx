import { GoXCircleFill } from "react-icons/go";
import useImageUrlStore from "../../../../store/useImageUrlStore";
import { wrapper } from "../../../globalStyle/InputWrapper.css";
import type { UrlType } from "../../types/imageUrlType";
import * as style from "./style.css";

const ImagePreview = ({ url }: { url: UrlType }) => {
  const { deleteUrl } = useImageUrlStore();
  const handleDeleteImageFile = () => {
    deleteUrl(url.id);
  };

  return (
    <div className={wrapper}>
      <img src={url.url} alt="미리보기" width={50} height={50} />
      <button
        type="button"
        onClick={handleDeleteImageFile}
        className={style.deleteButton}
      >
        <GoXCircleFill />
      </button>
    </div>
  );
};

export default ImagePreview;
