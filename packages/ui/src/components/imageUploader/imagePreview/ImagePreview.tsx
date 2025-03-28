import { GoXCircleFill } from "react-icons/go";
import useImageUrlStore from "../../../store/useImageUrlStore";
import type { UrlType } from "../ImageUploader.types";
import { itemWrapper } from "../style.css";
import * as style from "./style.css";

const ImagePreview = ({ url }: { url: UrlType }) => {
  const { deleteUrl } = useImageUrlStore();
  const handleDeleteImageFile = () => {
    deleteUrl(url.id);
  };

  return (
    <div className={itemWrapper}>
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
