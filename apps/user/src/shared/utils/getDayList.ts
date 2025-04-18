import {
  feb28DayList,
  feb29DayList,
  longDayList,
  shortDayList,
} from "../libs/dateList";

const getDayList = (year: number, month: number) => {
  // 윤년 필터
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  switch (month === 2) {
    case true:
      return isLeapYear ? feb29DayList : feb28DayList;
    case false:
      return year % 2 === 0 ? shortDayList : longDayList;
  }
};

export default getDayList;
