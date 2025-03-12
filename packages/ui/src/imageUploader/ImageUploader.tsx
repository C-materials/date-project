import { useState } from "react";
import ImageInput from "../imageInput/ImageInput";
import ImagePreview from "../imageInput/imagePreview/ImagePreview";
import useImageUrlStore from "../store/useImageUrlStore";
import * as style from "./style.css";
import { UrlType } from "../types/imageUrlType";

const ImageUploader = () => {
  const { urlList, setUrlList } = useImageUrlStore();
  const [selectItem, setSelectItem] = useState<UrlType>();
  const handleDrag = (e: React.DragEvent, urlItem: UrlType) => {
    //드래그 시작할때
    setSelectItem(urlItem);
  };
  const handleDrop = (e: React.DragEvent, targetItem: UrlType) => {
    // 드롭 시, urlList에서 순서를 바꿔주기
    e.preventDefault();

    if (selectItem) {
      const prevList = [...urlList];
      // 드래그한 항목의 인덱스 찾기
      const fromIndex = prevList.indexOf(selectItem);
      const toIndex = prevList.indexOf(targetItem);

      // 순서 바꾸기
      if (fromIndex !== -1 && toIndex !== -1 && fromIndex !== toIndex) {
        // 배열의 순서를 바꿔줍니다.
        prevList.splice(fromIndex, 1); // fromIndex 항목을 삭제
        prevList.splice(toIndex, 0, selectItem); // toIndex 위치에 selectItem 삽입
        setUrlList(prevList); // 업데이트된 리스트 상태로 설정
      }
    }
  };
  const hadleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className={style.wrapper}>
      <ImageInput />
      <ul className={style.previewList}>
        {urlList.map((urlItem) => (
          <li
            key={urlItem.id}
            draggable
            onDrop={(e) => handleDrop(e, urlItem)}
            onDragOver={hadleDragEnter}
          >
            <div onDragStart={(e) => handleDrag(e, urlItem)}>
              <ImagePreview url={urlItem} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageUploader;
