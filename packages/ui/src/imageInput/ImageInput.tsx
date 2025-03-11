import addImage from "./Add_image.png";
const ImageInput = () => {
  return (
    <div>
      <label>
        <img src={addImage} width={34} height={34} alt="Add Image" />
        <p>이미지 첨부하기</p>
      </label>
      <input type="file" multiple></input>
    </div>
  );
};

export default ImageInput;
