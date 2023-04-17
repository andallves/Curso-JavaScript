// Review

const person = {
  name: 'Andre',
  lastname: 'Alves'
};

// These are ways to access the key values;
console.log(person.name, person['name']);

const key = 'lastname';
console.log(person.lastname, person[key]); // This is used when I need access a value but I don't what is the key value because I can use the variable

// To delete a key 
delete person.name;
console.log(person);

// I can to create a object using the constructor
const person1 = new Object();
person1.name = 'Brena';
person1.lastname = 'Pereira';
console.log(person1.name, person1.lastname)

// The object has method that's a function inside an object
person1.sayName = function () {
  return `Hello ${this.name}!`
}
console.log(person1.sayName());

person1.age = 25;

person1.getBothDate = function () {
  const currentDate = new Date();
  return currentDate.getFullYear() - this.age;
}
console.log(person1.getBothDate());

for (let key in person1) {
  console.log(key, person1[key]); // I can to access the key and the key value
}

// Factory function / constructor function / Classes
// -> factory
function createPerson1(name, lastname) {
  return {
    name,
    lastname,

    get fullName() { // This method will be a property
      return `${this.name} ${this.lastname}`
    }

  }
}
const personOne = createPerson1('Patricia', 'Pereira');
console.log(personOne.fullName);

// -> constructor
function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;

  Object.freeze(this) // Any object by this function cannot be change and this work to array too.
}

const personTwo = new Person('Cleylton', 'Nascimento');
Object.freeze(personTwo); // This block the object and the values cannot change 
console.log(personTwo);