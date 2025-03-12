import { create } from "zustand";
import { UrlType } from "../types/imageUrlType";

interface ImageUrlStoreType {
  urlList: UrlType[];
  setUrlList: (newUrl: UrlType) => void;
  deleteUrl: (id: UrlType["id"]) => void;
}
const useImageUrlStore = create<ImageUrlStoreType>((set) => ({
  urlList: [],
  setUrlList: (newUrl) =>
    set((state) => ({
      urlList: [...state.urlList, newUrl],
    })),
  deleteUrl: (targetId) =>
    set((state) => ({
      urlList: state.urlList.filter((url) => url.id !== targetId),
    })),
}));

export default useImageUrlStore;
