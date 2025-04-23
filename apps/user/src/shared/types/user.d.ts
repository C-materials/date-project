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
    subAddress: string;
    gender: Gender;
  };

  type FormValue = {
    //회원가입 시 입력하는 정보
    password: string;
    passwordCheck: string;
    referenceCode: string;
  } & Omit<Info, "id" | "birth">;

  type Data = {
    //전역에서 불러올 유저 정보
    approved: boolean;
    birth: Date;
  } & Omit<Info, "birthDay" | "birthMonth" | "birthYear">;

  /* 마이페이지에서 입력하는 정보*/
  type RequiredInfo = {
    job: string;
    religion: string;
    height: number;
    smoke: string;
    hobby: string;
    images: string[];
  };

  type OptionalInfo = {
    mbti: string;
    skill: string;
    introduce: string;
    pet: string;
    drink: string[];
    other: string[];
  };
}
