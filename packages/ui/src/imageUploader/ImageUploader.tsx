import ImageInput from "../imageInput/ImageInput";
import ImagePreview from "../imageInput/imagePreview/ImagePreview";
import useImageUrlStore from "../store/useImageUrlStore";
import * as style from "./style.css";

const ImageUploader = () => {
  const { urlList } = useImageUrlStore();
  return (
    <div className={style.wrapper}>
      <ImageInput />
      <ul className={style.previewList}>
        {urlList.map((urlItem) => (
          <li key={urlItem.id}>
            <ImagePreview url={urlItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageUploader;
