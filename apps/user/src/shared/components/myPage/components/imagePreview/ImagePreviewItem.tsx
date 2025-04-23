import Exit from "@date-project/user/public/exit.svg";
import Image from "next/image";
import type { ImageType } from "../../stages/type";
import { deleteButton, image } from "./style.css";

type ItemProps = {
  item: ImageType;
  onClick: (id: string) => void;
};
const ImagePreviewItem = ({ item, onClick }: ItemProps) => {
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
