const data = new Date('2000-05-17');
const weekDay = data.getDay();
// const nameWeekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// console.log(nameWeekDay[weekDay]);

// switch (weekDay) {
//   case 0:
//     textWeekDay = 'Sunday';
//     break;
//   case 1:
//     textWeekDay = 'Monday';
//     break;
//   case 2:
//     textWeekDay = 'Tuesday';
//     break;
//   case 3:
//     textWeekDay = 'Wednesday';
//     break;
//   case 4:
//     textWeekDay = 'Thursday';
//     break;
//   case 5:
//     textWeekDay = 'Friday';
//     break;
//   case 6:
//     textWeekDay = 'Saturday';
//     break;
//   default:
//     textWeekDay = 'Invalid day'
//     break;
// }

const getTextWeekDay = (weekDay) => {
  let textWeekDay;

  switch (weekDay) {
    case 0:
      textWeekDay = 'Sunday';
      return textWeekDay;
    case 1:
      textWeekDay = 'Monday';
      return textWeekDay;
    case 2:
      textWeekDay = 'Thueday';
      return textWeekDay;
    case 3:
      textWeekDay = 'Wednesday';
      return textWeekDay;
    case 4:
      textWeekDay = 'Thursday';
      return textWeekDay;
    case 5:
      textWeekDay = 'Friday';
      return textWeekDay;
    case 6:
      textWeekDay = 'Saturday';
      return textWeekDay;
    default:
      textWeekDay = 'Invalid day'
      return textWeekDay;
  }
}

const textWeekDay = getTextWeekDay(weekDay);
console.log(textWeekDay);