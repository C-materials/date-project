export type Gender = "female" | "male";
export type SignupFormField = {
  tel: number;
  password: string;
  passwordCheck: string;
  name: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  birth: Date;
  address: string;
  gender: Gender;
};
