import InputWrapper from "../inputWrapper/InputWrapper";
import addImage from "../../assets/Add_Image.png";
const ImageInput = () => {
  return (
    <InputWrapper>
      <label>
        <img src={addImage} width={34} height={34} alt="Add Image" />
        <p>이미지 첨부하기</p>
      </label>
      <input type="file" multiple></input>
    </InputWrapper>
  );
};

export default ImageInput;
