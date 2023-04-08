// For in -> Read the index 

const fruits = ['Apple', 'Pear', 'Grape'];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

for (let index in fruits) { // Arrays
  console.log(fruits[index]);
}

const person = {
  name: 'Andre',
  lastname: 'Alves',
  age: 22
}

for (let key in person) { // Objects
  console.log(key, person[key]);
}

// Accessing values in the objects
console.log(person.name);
console.log(person['name']); // It's interesting when I don't know propiates names
// Kind of this
const key = 'name';
console.log(person[key]);