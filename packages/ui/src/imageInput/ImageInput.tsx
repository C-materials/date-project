import InputWrapper from "../inputWrapper/InputWrapper";
import addImage from "../../assets/Add_Image.png";
import * as style from "./style.css";

const ImageInput = () => {
  return (
    <InputWrapper>
      <label className={style.label} htmlFor="image">
        <img src={addImage} width={34} height={34} alt="Add Image" />
        <p>이미지 첨부하기</p>
      </label>
      <input
        className={style.basicInput}
        id="image"
        name="image"
        type="file"
        multiple
        accept="image/png, image/jpeg"
      ></input>
    </InputWrapper>
  );
};

export default ImageInput;
