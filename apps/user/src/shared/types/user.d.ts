namespace User {
  type Info = {
    id: number;
    name: string;
    tel: string;
    birthYear: number;
    birthMonth: number;
    birthDay: number;
    mainAddress: string;
    subAddress: string;
    gender: "female" | "male";
  };

  type FormValue = {
    //회원가입 시 입력하는 정보
    password: string;
    passwordCheck: string;
    referenceCode: string;
  } & Omit<Info, "id">;

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
    smoke: boolean;
    hobby: string;
    images: File[];
  };

  type OptionalInfo = {
    mbti: string;
    skill: string;
    introduce: string;
    pet: boolean;
    drink: string[];
    other: string[];
  };

  type AccountInfo = Omit<FormValue, "password" | "passwordCheck" | "gender">;
}
