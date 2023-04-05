// pegar o local onde vai ser mostrado
// pegar a data
// pegar valores em strings
// const zeroToLeft = (num) => {
//   return num >= 10 ? num : `0${num}`
// }
// const getWeekDay = (dayWeek) => {
//   let textDayWeek;
//   switch (dayWeek) {
//     case 0:
//       textDayWeek = 'Sunday';
//       return textDayWeek;
//     case 1:
//       textDayWeek = 'Monday';
//       return textDayWeek;
//     case 2:
//       textDayWeek = 'Tuesday';
//       return textDayWeek;
//     case 3:
//       textDayWeek = 'Wednesday';
//       return textDayWeek;
//     case 4:
//       textDayWeek = 'Thursday';
//       return textDayWeek;
//     case 5:
//       textDayWeek = 'Friday';
//       return textDayWeek;
//     case 6:
//       textDayWeek = 'Saturday';
//       return textDayWeek;
//     default:
//       textDayWeek = '';
//       return textDayWeek;
//   }
// }

// const getMonthText = (monthNumber) => {
//   let monthText;
//   switch (monthNumber) {
//     case 0:
//       monthText = 'January';
//       return monthText;
//     case 1:
//       monthText = 'February';
//       console.log(monthNumber);
//       return monthText;
//     case 2:
//       monthText = 'March';
//       return monthText;
//     case 3:
//       monthText = 'April';
//       return monthText;
//     case 4:
//       monthText = 'May';
//       return monthText;
//     case 5:
//       monthText = 'June';
//       return monthText;
//     case 6:
//       monthText = 'July';
//       return monthText;
//     case 7:
//       monthText = 'August';
//       return monthText;
//     case 8:
//       monthText = 'September';
//       return monthText;
//     case 9:
//       monthText = 'October';
//       return monthText;
//     case 10:
//       monthText = 'November';
//       return monthText;
//     case 11:
//       monthText = 'December';
//       return monthText;
//     default:
//       monthText = '';
//       return monthText;
//   }
// }

// const getDate = (date) => {
//   const weekDay = getWeekDay(date.getDay());
//   const day = date.getDate();
//   const month = getMonthText(date.getMonth());
//   const year = date.getFullYear();
//   const hour = zeroToLeft(date.getHours());
//   const minute = zeroToLeft(date.getMinutes());
//   return `${weekDay}, ${day} of ${month} of ${year} ${hour}:${minute}`;
// }
// const insertDate = (date) => {
//   const h1 = document.querySelector('.container h1');
//   h1.innerHTML = getDate(date);
// }
// const date = new Date();
// console.log(insertDate(date));

// ANOTHER WAY TO DO IT

const h1 = document.querySelector('.container h1');
const date = new Date();

h1.innerHTML = date.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });

