// Filter Function ->  Filter always will to return an array with same quantity elements or less.

// Return number bigger then 10
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numbersBiggerThen10 = [];

// An way to do it.
for (let number of numbers) {
  if (number > 10) {
    numbersBiggerThen10.push(number);
  }
}

console.log(numbersBiggerThen10)


// Using the filter function
function callbackFilter(value, /*index, array*/) {
  if (value > 10) {
    return true;
  } else {
    return false;
  }
}

const filterNumbers = numbers.filter(callbackFilter);

console.log(filterNumbers);

//('-------------------------------------')

const filterNumbers2 = numbers.filter(value => value > 10);
console.log(filterNumbers2);


const people = [
  { name: 'Luiz', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Letícia', age: 19 },
  { name: 'Rosana', age: 32 },
  { name: 'Wallace', age: 47 },
];

// Return true to person who have five letters in the name or more.
const peopleBigName = people.filter(obj => obj.name.length >= 5);
console.log(peopleBigName);

// Return people who has more then 50 years old;
const biggerThen50 = people.filter(obj => obj.age > 50);
console.log(biggerThen50);

// Return people who name ends with letter 'a'
const endWithA = people.filter(obj => obj.name.toLowerCase().endsWith('a'));
console.log(endWithA)