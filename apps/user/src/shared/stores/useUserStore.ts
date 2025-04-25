import { create } from "zustand";

interface UserStore {
  user: User.Data;
  setUser: (state: User.Data) => void;
  setLogout: () => void;
}
const useUserStore = create<UserStore>((set) => ({
  user: {
    id: -1,
    name: "",
    tel: "",
    birth: new Date(),
    mainAddress: "",
    subAddress: "",
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
        subAddress: state.subAddress,
        gender: state.gender,
        approved: state.approved,
      },
    }),
  setLogout: () =>
    set({
      user: {
        id: -1,
        name: "",
        tel: "",
        birth: new Date(),
        mainAddress: "",
        subAddress: "",
        gender: "female",
        approved: false,
      },
    }),
}));
export default useUserStore;
