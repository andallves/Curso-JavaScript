function timeConversion(s) {
  // Write your code here
  let hour = s.slice(0, -2);


  console.log(hour)
  const todayData = '2023-04-10T'

  const data = new Date(todayData + hour);
  return data.setHours()
}

const s = '12:00:03PM';
console.log(timeConversion(s))