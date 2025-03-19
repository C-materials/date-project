import { useRef } from "react";
import useImageUrlStore from "../../store/useImageUrlStore";
import ImageInput from "./imageInput/ImageInput";
import ImagePreview from "./imagePreview/ImagePreview";
import type { UrlType } from "./ImageUploader.types";
import * as style from "./style.css";

const ImageUploader = () => {
  const { urlList, setUrlList } = useImageUrlStore();
  const selectRef = useRef<UrlType | null>(null);

  const handleDrag = (e: React.DragEvent, urlItem: UrlType) => {
    //프리뷰 아이템 드래그 시작할때
    e.stopPropagation();
    selectRef.current = urlItem;
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    // 드롭 시, urlList에서 순서를 바꿔주기
    e.preventDefault();
    e.stopPropagation();
    const selectItem = selectRef.current;
    if (!selectItem) return;

    const prevList = [...urlList];
    // 드래그한 항목의 인덱스 찾기
    const fromIndex = prevList.indexOf(selectItem);

    // 순서 바꾸기
    if (fromIndex !== -1 && targetIndex !== -1 && fromIndex !== targetIndex) {
      // 배열의 순서를 바꿔줍니다.
      prevList.splice(fromIndex, 1); // fromIndex 항목을 삭제
      prevList.splice(targetIndex, 0, selectItem); // toIndex 위치에 selectItem 삽입
      setUrlList(prevList); // 업데이트된 리스트 상태로 설정
    }
  };
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className={style.wrapper}>
      <ImageInput />
      <ul className={style.previewList}>
        {urlList.map((urlItem, index) => (
          <li
            key={urlItem.id}
            draggable
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragEnter}
            onDragStart={(e) => handleDrag(e, urlItem)}
          >
            <ImagePreview url={urlItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageUploader;
