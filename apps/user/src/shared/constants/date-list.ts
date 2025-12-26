// 생년월일 옵션 리스트
const thisYear: number = new Date().getFullYear();
const adultBirthYear = thisYear - 20;
const yearList = Array(30)
  .fill(1)
  .map((_, i) => String(adultBirthYear - i));

const monthList = Array(12)
  .fill(1)
  .map((_, i) => String(i + 1));

const feb28DayList = Array(28)
  .fill(1)
  .map((v, i) => String(v + i));

const feb29DayList = [...feb28DayList, "29"];

const shortDayList = [...feb29DayList, "30"];

const longDayList = [...shortDayList, "31"];

export {
  feb28DayList,
  feb29DayList,
  longDayList,
  monthList,
  shortDayList,
  yearList,
};
