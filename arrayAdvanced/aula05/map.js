// Map Function -> Return an array exactly the same length but the values will be changes  

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numbersDoble = numbers.map(function (value, index, array) {
//   console.log(value, index, array);
// })

// const numbersDouble = numbers.map(function (value) {
//   return `Andre -> ${value}`;
// })

// Retrun the double of the number
const numbersDouble = numbers.map(value => value * 2);
console.log(numbersDouble);

// ---------------------------------------
const people = [
  { name: 'Luiz', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Letícia', age: 19 },
  { name: 'Rosana', age: 32 },
  { name: 'Wallace', age: 47 }
];

// Return an array with string of the person name

const names = people.map(obj => obj.name);
console.log(names);

// Remove the names key of the object
const ages = people.map(obj => ({ age: obj.age }));
// delete obj.names -> Its another way to remove the name key.
console.log(ages);

// Add a id key for each object
const withID = people.map((obj, index) => {
  // To change the original object
  // obj.id = index;
  // return obj;
  // Create a new obj to don't change the original object
  const newObj = { ...obj };
  newObj.id = index;
  return newObj;
});
console.log(withID);