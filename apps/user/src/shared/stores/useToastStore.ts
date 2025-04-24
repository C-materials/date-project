import { create } from "zustand";

type ToastType = "success" | "warning" | "critical";
type ToastProps = {
  icon?: boolean;
  top?: number;
  width?: number;
  className?: string;
};
type Toast = {
  id: string;
  type: ToastType;
  content: string;
  isOpen: boolean;
  props?: ToastProps;
};
type ToastStore = {
  toastList: Toast[];
  openToast: (type: ToastType, content: string, props?: ToastProps) => void;
  delay?: number;
};

const createToastStore = (delay: number) =>
  create<ToastStore>((set, get) => ({
    toastList: [],
    delay,
    openToast: (type: ToastType, content: string, props?: ToastProps) => {
      const id = Math.random().toString(36).slice(2, 9);
      const newToast: Toast = { id, type, content, props, isOpen: true };
      set((state) => ({ toastList: [...state.toastList, newToast] }));

      setTimeout(() => {
        // 전달받은 delay 시간 후에 isOpen 상태만 변경
        set((state) => ({
          toastList: state.toastList.map((toast) =>
            toast.id === id ? { ...toast, isOpen: false } : toast,
          ),
        }));

        // 애니메이션이 끝난 후 토스트 배열에서 제거
        setTimeout(() => {
          set((state) => ({
            toastList: state.toastList.filter((toast) => toast.id !== id),
          }));
        }, 300); // 애니메이션 지속 시간
      }, get().delay);
    },
  }));

export default createToastStore;
