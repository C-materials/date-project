import InputWrapper from "../../inputWrapper/InputWrapper";

const ImagePreview = ({ url }: { url: string }) => {
  return (
    <InputWrapper>
      <img src={url} alt="미리보기" width={50} height={50} />
    </InputWrapper>
  );
};

export default ImagePreview;
