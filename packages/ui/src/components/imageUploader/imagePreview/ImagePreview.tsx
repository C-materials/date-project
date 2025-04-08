import { GoXCircleFill } from "react-icons/go";
import useImageUrlStore from "../../../store/useImageUrlStore";
import { itemWrapper } from "../../fileUpload/style.css";
import type { UrlType } from "../type";
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
