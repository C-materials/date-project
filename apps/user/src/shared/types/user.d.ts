export type Gender = "female" | "male";

namespace User {
  type Info = {
    id: number;
    name: string;
    tel: number;
    birthYear: number;
    birthMonth: number;
    birthDay: number;
    mainAddress: string;
    subAddress: string | undefined;
    gender: Gender;
  };

  type FormValue = {
    //회원가입 시 입력하는 정보
    password: string;
    passwordCheck: string;
    referenceCode: string;
  } & Omit<Info, "id" | "birth">;

  type Data = {
    approved: boolean;
    birth: Date;
  } & Omit<Info, "birthDay" | "birthMonth" | "birthYear">;
}
