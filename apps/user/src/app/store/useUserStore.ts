import { create } from "zustand";

interface User {
  id: number | null;
  name: string | null;
  tel: string | null;
  approved: boolean;
}
interface UserStore {
  user: User;
  setUser: () => void;
  setLogout: () => void;
}
const useUserStore = create<UserStore>((set) => ({
  user: {
    id: null,
    name: null,
    tel: null,
    approved: false,
  },
  setUser: () =>
    set({
      user: { id: 1, name: "홍길동", tel: "01012341234", approved: false },
    }),
  setLogout: () =>
    set({ user: { id: null, name: null, tel: null, approved: false } }),
}));
export default useUserStore;
