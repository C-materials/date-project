import { create } from "zustand";

type ToastType = "success" | "warning" | "critical";
type ToastProps = {
  icon?: boolean;
  top?: number;
  width?: number;
  className?: string;
};
type ToastStore = {
  type: ToastType;
  isOpen: boolean;
  content: string;
  props: ToastProps;
  openToast: (type: ToastType, content: string, props?: ToastProps) => void;
  delay?: number;
};

const useToastStore = create<ToastStore>((set, get) => ({
  type: "success",
  isOpen: false,
  content: "",
  props: {
    icon: true,
  },
  delay: 1000,
  openToast: (type: ToastType, content: string, props?: ToastProps) => {
    set({ type, isOpen: true, props, content });
    setTimeout(() => {
      set({ isOpen: false });
    }, get().delay);
  },
}));

export default useToastStore;
