import InputWrapper from "../inputWrapper/InputWrapper";
import addImage from "../../assets/Add_Image.png";
import * as style from "./style.css";
import useImageUrlStore from "../store/useImageUrlStore";
import { ChangeEvent } from "react";
const ImageInput = () => {
  const { setUrlList } = useImageUrlStore();

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || [];
    console.log(files);
    for (let file of files) {
      const url = URL.createObjectURL(file);
      const uuid = crypto.randomUUID();
      const urlObj = {
        id: uuid,
        url,
      };
      setUrlList(urlObj); // file -> url 변환하면서 하나씩 추가
    }
  };
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
        onChange={(e) => handleSelectFile(e)}
      ></input>
    </InputWrapper>
  );
};

export default ImageInput;
