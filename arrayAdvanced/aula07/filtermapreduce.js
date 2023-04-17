// Filter + Map + Reduce
// -> Filter even
// -> Double the values
// -> Reduce (sum all)
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numbersEven = numbers
  .filter(value => value % 2 === 0)
  .map(value => value * 2)
  .reduce((ac, value) => ac + value);

console.log(numbersEven);

// 50, 80, 2, 8, 22
// 100, 160, 4, 16, 44
// 324
