namespace User {
  type Info = {
    id: number;
    name: string;
    tel: number;
    approved: boolean;
    birthYear: string;
    birthMonth: string;
    birthDay: string;
    birth: Date;
    address: string;
    gender: Gender;
  };

  type FormValue = {
    password: string;
    passwordCheck: string;
  } & Omit<Info, "id" | "approved">;
}
