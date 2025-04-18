import { create } from "zustand";
import type { User } from "../types/user";

interface UserStore {
  user: User.Data;
  setUser: (state: User.Data) => void;
  setLogout: () => void;
}
const useUserStore = create<UserStore>((set) => ({
  user: {
    id: -1,
    name: "",
    tel: 0,
    birth: new Date(),
    mainAddress: "",
    gender: "female",
    approved: false,
  },
  setUser: (state: User.Data) =>
    set({
      user: {
        id: state.id,
        name: state.name,
        tel: state.tel,
        birth: state.birth,
        mainAddress: state.mainAddress,
        gender: state.gender,
        approved: state.approved,
      },
    }),
  setLogout: () =>
    set({
      user: {
        id: -1,
        name: "",
        tel: 0,
        birth: new Date(),
        mainAddress: "",
        gender: "female",
        approved: false,
      },
    }),
}));
export default useUserStore;
