// DESTRUCTURING -> Assingment via destructuring in the objects

const person = {
  name: 'Andre',
  lastname: 'Alves',
  age: 22,
  gender: 'Male',
  address: { // This is a object inside another object, it's very usually;
    street: 'Av. 09',
    number: 102,
    city: 'Fortaleza'
  }
}
console.log(person);

// If I want to get some value I can do it
const age = person.age;
console.log(age);

// Assingment via destructuring
const { name = '', lastname, gender: test } = person;
// I'm assinging a default value to name
// I'm giving another name to the gender, test will be the variable name
console.log(name, lastname, test);

const { address: { street: r = `Doesn't exist`, number, ...remainder } } = person;
console.log(r, number, remainder);
