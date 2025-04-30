// 온점 사용하지 않음
const minLengthText = (min: number) => `${min}자리 이상 입력해 주세요`;
const maxLengthText = (max: number) => `최대 ${max}자리까지 입력해 주세요`;

export const signupLimit = {
  tel: {
    max: 11,
  },
  password: {
    min: 8,
    max: 15,
  },
  referenceCode: {
    max: 10,
  },
  name: {
    min: 2,
    max: 10,
  },
};

export const signupError = {
  tel: {
    error: "올바른 휴대폰 번호를 입력하세요",
    wrongStart: "010으로 시작하는 번호를 입력해주세요",
  },
  password: {
    minLength: minLengthText(signupLimit.password.min),
    maxLength: maxLengthText(signupLimit.password.max),
    wrongCheck: "비밀번호가 일치하지 않습니다",
  },
  submit: {
    wrongID: "존재하지 않는 회원입니다",
    wrongPW: "비밀번호가 일치하지 않습니다",
  },
  referenceCode: {
    maxLength: maxLengthText(signupLimit.referenceCode.max),
    wrongCode: "가입코드가 올바르지 않습니다",
  },
  name: {
    minLength: minLengthText(signupLimit.name.min),
    maxLength: maxLengthText(signupLimit.name.max),
  },
  birthYear: {
    error: "년도를 선택해주세요",
  },
  birthMonth: {
    error: "월을 선택해주세요",
  },
  birthDay: {
    error: "일자를 선택해주세요",
  },
};

/* mypage - required fields */
export const myPageLimit = {
  job: {
    max: 15,
  },
  height: {
    min: 3,
    max: 3,
  },
  hobby: {
    max: 30,
  },
  image: {
    min: 1,
    max: 5,
    maxSize: 5,
  },
  skill: {
    max: 30,
  },
  introduce: {
    max: 100,
  },
  nickname: {
    max: 15,
  },
};
export const mypageError = {
  job: {
    error: "직업을 입력해주세요",
    maxLength: maxLengthText(myPageLimit.job.max),
  },
  religion: {
    error: "종교를 선택해주세요",
  },
  height: {
    error: "올바른 키를 입력해주세요",
  },
  hobby: {
    error: "취미를 입력해주세요",
    maxLength: maxLengthText(myPageLimit.hobby.max),
  },
  image: {
    maxSize: `최대 ${myPageLimit.image.maxSize}MB의 이미지만 업로드할 수 있습니다`,
    wrongFormat: "허용하는 이미지 파일의 포맷이 아닙니다",
    maxLength: `최대 ${myPageLimit.image.max}개까지 업로드가 가능합니다`,
    minLength: `${myPageLimit.image.min}개 이상의 사진을 등록해주세요`,
  },
  skill: {
    maxLength: maxLengthText(myPageLimit.skill.max),
  },

  introduce: {
    maxLength: maxLengthText(myPageLimit.introduce.max),
  },
  nickname: {
    error: "닉네임을 입력해주세요",
    maxLength: maxLengthText(myPageLimit.nickname.max),
  },
};
