import { create } from "zustand";

interface User {
  id: number | null;
  name: string | null;
  tel: string | null;
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
  },
  setUser: () => set({ user: { id: 1, name: "홍길동", tel: "01012341234" } }),
  setLogout: () => set({ user: { id: null, name: null, tel: null } }),
}));
export default useUserStore;
