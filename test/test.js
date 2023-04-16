function timeConversion(s) {
  // Write your code here
  const zoneTime = s.slice(-2)
  let hour = Number(s.slice(0, 2));
  let hourTime = s.slice(0, -2);

  if (zoneTime === 'AM') {
    if (hour === 12) return hourTime.replace('12', '00');
    return hourTime;
  }

  if (zoneTime === 'PM' || hour >= 12) {
    if (hour === 12) return hourTime;
    let time = hourTime.slice(2);
    let hour24 = hour += 12;
    return `${hour24}${time}`;
  }
}

const s = '12:45:54AM';
console.log(timeConversion(s))