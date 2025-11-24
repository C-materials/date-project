import Exit from "@date-project/user/public/exit.svg";
import Image from "next/image";
import { deleteButton, image } from "../image-preview/style.css";
import type { ImageType } from "../stages/type";

type ItemProps = {
  item: ImageType;
  onClickDelete: (id: string) => void;
};
const ImagePreviewItem = ({ item, onClickDelete: onClick }: ItemProps) => {
  const { id, url } = item;

  return (
    <div className={image}>
      {url && (
        <Image src={url} alt="image" className={image} width={40} height={52} />
      )}
      <button
        type="button"
        className={deleteButton}
        onClick={() => onClick(id)}
      >
        <Exit width={6} height={6} />
      </button>
    </div>
  );
};

export default ImagePreviewItem;
