// OBJECT

const name01 = 'Andre';
const lastName01 = 'Alves';
const age01 = 22;

const name02 = 'Brena';
const lastName02 = 'Alves';
const age02 = 24;

// These variable are related, so we can creating an object

// const person1 = {
//   name: 'Andre',
//   lastName: 'Alves',
//   age: 22
// };

// const person2 = {
//   name: 'Brena',
//   lastName: 'Alves',
//   age: 24
// };

// console.log(person2.name);
// console.log(person2.age);

function createPerson(name, lastName, age) { // The value that is pass here It's called params
  return { name, lastName, age };
}

const person1 = createPerson('Andre', 'Alves', 22); // The value that is pass here It's called Arguments
const person2 = createPerson('Brena', 'Alves', 24);
console.log(person1.name, person1.age, person2.name, person2.age);


// Create a method inside my object
const person = {
  name: 'Caio',
  lastName: 'Castro',
  age: 32,

  // This is my method
  speak() {
    console.log(`${this.name} ${this.lastName} is saying hello`)
  },

  incrementAge() {
    this.age++;
    console.log(`${this.age} years old, you are older`);
  }
}

console.log(person.incrementAge());