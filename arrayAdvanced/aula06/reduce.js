// Reduce Function

// Sum all the numbers (reduce);
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// Using reduce
const sumTotal = numbers.reduce(function (accumulator, value, index, array) {
  accumulator += value;
  return accumulator;
}, 0) // This 0 its the beggin value in accumulator
console.log(sumTotal);


// Return an array with even numbers (filter)
// Using reduce
const evenNumbers = numbers.reduce((accumulator, value) => {
  if (value % 2 === 0) accumulator.push(value);
  return accumulator;
}, []);
console.log(evenNumbers);
// Using filter
const evenNumbersFilter = numbers.filter(value => value % 2 === 0);
console.log(evenNumbersFilter);


// Return an array with the double number (map)
// Using reduce
const doubleNumbers = numbers.reduce((accumulator, value) => {
  accumulator.push(value * 2);
  return accumulator
}, []);
console.log(doubleNumbers);
// Using map
const doubleNumbersMap = numbers.map(value => value * 2);
console.log(doubleNumbersMap);


// Return the sum of all even value 
const sumEven = numbers.reduce((accumulator, value) => {
  if (value % 2 === 0) accumulator += value;
  return accumulator;
}, 0);
console.log(sumEven);


// Return the older person
const people = [
  { name: 'Luiz', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Letícia', age: 19 },
  { name: 'Rosana', age: 64 },
  { name: 'Wallace', age: 63 }
];

const olderPerson = people.reduce((accumulator, obj) => {
  if (accumulator.age > obj.age) return accumulator;
  return obj;
});
console.log(olderPerson);