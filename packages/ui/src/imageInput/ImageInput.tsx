import InputWrapper from "../inputWrapper/InputWrapper";
import addImage from "../../assets/Add_Image.png";
import * as style from "./style.css";
import useImageUrlStore from "../store/useImageUrlStore";
import { ChangeEvent } from "react";
const ImageInput = () => {
  const { setUrlList, urlList } = useImageUrlStore();

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || [];
    if (urlList.length + files.length > 4) {
      alert("사진은 최대 4장 등록 가능합니다.");
    } else {
      const newUrlList = [...urlList];
      for (let file of files) {
        const url = URL.createObjectURL(file);
        const uuid = crypto.randomUUID();
        const urlObj = {
          id: uuid,
          url,
        };
        newUrlList.push(urlObj);
        setUrlList(newUrlList); // file -> url 변환하면서 하나씩 추가
      }
    }
    console.log(files);
    console.log("전역 urlList:", urlList);
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
