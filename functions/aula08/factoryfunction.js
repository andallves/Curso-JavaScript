// FACTORY FUNCTION  -> They're the functions that return object.

function createPerson(name, lastname, h, w) {  // This function return a person object (its a factory function)
  return {
    name,
    lastname,

    // I getting in the value of the fullname
    get fullName() {
      return `${this.name} ${this.lastname}`
    },

    // I setting values in the key 
    set fullName(value) {
      value = value.split(' '); // Separate the name in the ' '(spaces) and its returned the array with the values 
      this.name = value.shift(); // Remove the first element of the array and return this values -> This values who is returned I'm taking in the variable
      this.lastname = value.join(' '); // I'm putting together the others elements in the array and assiging in the variable

    },

    // say: function (matter) { // When the function it's inside in the object, this function is a method.
    say(matter) {
      return `${this.name} is talking ${matter} and is ${this.weight}kg`; // It's necessary using to 'this' to access the key of object.
    },

    height: h,
    weight: w,

    // I can to access the method value like a attribute to do it, I use the 'Getter'
    get imc() {
      const index = this.weight / (this.height ** 2)
      return index.toFixed(2)
    }
  };
}

const p1 = createPerson('Andre', 'Alves', 1.77, 87);
console.log(p1.say('about JS'));
console.log(p1.imc) // When I used the get in the method, now I access like a attribute

const p2 = createPerson('Mary', 'Ketlyn', 1.50, 35);
console.log(p2.say('About React.JS'));
console.log(p2.imc);

// I can to get the attribute 
// console.log(p1.name) -> I'm getting the attribute name;

// Here I'm using the getter to taking the fullname
console.log(p1.fullName)

// Herre I'm using the setter to put the name.
p1.fullName = 'Brena Miranda Pereira';
console.log(p1.fullName)