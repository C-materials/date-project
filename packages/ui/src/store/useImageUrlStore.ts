import { create } from "zustand";
import type { ImageType } from "../components/fileUpload/type";

interface ImageUrlStoreType {
  urlList: ImageType[];
  setUrlList: (newUrl: ImageType[]) => void;
  deleteUrl: (id: ImageType["id"]) => void;
}
const useImageUrlStore = create<ImageUrlStoreType>((set) => ({
  urlList: [],
  setUrlList: (newUrl) =>
    set(() => ({
      urlList: [...newUrl],
    })),
  deleteUrl: (targetId) =>
    set((state) => ({
      urlList: state.urlList.filter((url) => url.id !== targetId),
    })),
}));

export default useImageUrlStore;
