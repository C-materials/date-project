import ImageInput from "../imageInput/ImageInput";
import ImagePreview from "../imageInput/imagePreview/ImagePreview";
import useImageUrlStore from "../store/useImageUrlStore";

const ImageUploader = () => {
  const { urlList } = useImageUrlStore();
  return (
    <div>
      <ImageInput />
      {urlList.map((urlItem) => (
        <ImagePreview key={urlItem.id} url={urlItem.url} />
      ))}
    </div>
  );
};

export default ImageUploader;
