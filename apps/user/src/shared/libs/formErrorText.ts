// 온점 사용하지 않음
const minLengthText = (min: number) => `${min}자리 이상 입력해주세요`;
const maxLengthText = (max: number) => `최대 ${max}자리까지 입력이 가능합니다`;

export const limit = {
  tel: {
    max: 11,
  },
  password: {
    min: 8,
    max: 15,
  },
  referenceCode: {
    max: 20,
  },
  name: {
    min: 2,
    max: 20,
  },
};

export const errorText = {
  tel: {
    error: "올바른 휴대폰 번호를 입력하세요",
    wrongStart: "010으로 시작하는 번호를 입력해주세요",
  },
  password: {
    minLength: minLengthText(limit.password.min),
    maxLength: maxLengthText(limit.password.max),
    wrongCheck: "비밀번호가 일치하지 않습니다",
  },
  submit: {
    wrongID: "존재하지 않는 회원입니다",
    wrongPW: "비밀번호가 일치하지 않습니다",
  },
  referenceCode: {
    maxLength: maxLengthText(limit.referenceCode.max),
    wrongCode: "가입코드가 올바르지 않습니다",
  },
  name: {
    minLength: minLengthText(limit.name.min),
    maxLength: maxLengthText(limit.name.max),
  },
};
