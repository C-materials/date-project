// 생년월일 옵션 리스트
const thisYear: number = new Date().getFullYear();
const adultBirthYear = thisYear - 20;
const yearList = Array(30)
  .fill(1)
  .map((_, i) => String(adultBirthYear - i));

const monthList = Array(12)
  .fill(1)
  .map((_, i) => String(i + 1));

const febDayList = Array(29)
  .fill(1)
  .map((v, i) => String(v + i));

const shortDayList = [...febDayList, "30"];

const longDayList = [...shortDayList, "31"];

export { febDayList, longDayList, monthList, shortDayList, yearList };
