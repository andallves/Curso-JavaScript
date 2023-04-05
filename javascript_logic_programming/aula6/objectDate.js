// Object data
// Reference
// developer.mozilla.org/pt-Br/docs/JavaScript/Reference/Global_Objects/Date

// const threeHours = 60 * 60 * 3 * 1000;
// const oneDay = 60 * 60 * 24 * 1000;
// This date is made up of milisecund
// const data = new Date(0 + threeHours + oneDay); // If I don't pass a param the Javascript will create a object with date, hour, minut, secunds
const nowaday = new Date(); // Create a nowaday date

const millisecund = new Date(1000); // I can to pass the value in milisecund

//                        year, month, day, hour, minute, secund, milisecund
const passDate = new Date(2022, 4, 17, 23, 30, 1, 500); // I am pass the date
// If I omit some value, It's will consider 00
// I can to omit the milisecund, secund, minute, hour and day, but I don't to omit the month and year
// So, if I omit the month the javascript will consider the year like a milisecund
// 0 - 11 (January - December)

const dateString = new Date('2023-01-22T20:02:00');

console.log(nowaday.toString());
console.log(millisecund.toString());
console.log(passDate.toString()); // It will print the brasilian date but Its using the international format (Day/Month/Year - Hour:minute:secund)
console.log(dateString.toString());

// To get some value I can to do it;
console.log('Day', passDate.getDate()); // To get the day
console.log('Month', passDate.getMonth()); // To get the month - month start from 0
console.log('Year', passDate.getFullYear()); // To get the year
console.log('Hour', passDate.getHours()); // To get the hour
console.log('Minute', passDate.getMinutes()); // To get the minute
console.log('Secund', passDate.getSeconds()); // To get the secund
console.log('Millisecund', passDate.getMilliseconds()); // To get the millisecund
console.log("Week's day", passDate.getDay()); // To get the day of the week - 0 Sunday - 6 sartuday

// I can to get the millisecund from start, after I pass it to my date and Its returned the now date;
const getMillisecund = Date.now();
console.log(new Date(getMillisecund))
