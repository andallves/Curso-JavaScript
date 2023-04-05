const zeroToLeft = (num) => {
  return num >= 10 ? num : `0${num}`;
}

const formatDate = (data) => {
  const day = zeroToLeft(data.getDate());
  const month = zeroToLeft(data.getMonth() + 1);
  const year = zeroToLeft(data.getFullYear());
  const hour = zeroToLeft(data.getHours());
  const minute = zeroToLeft(data.getMinutes());
  const second = zeroToLeft(data.getSeconds());

  return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
}

const data = new Date();
const defaultBrazil = formatDate(data);
console.log(defaultBrazil);