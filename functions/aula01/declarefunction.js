// FUNCTIONS

// Function's declaration (function hoisting) -> The Javascript engine elevate the functions declaration or var varible declaration to the top of the code.

sayHi(); // I'm calling the function before declaration.

function sayHi() { // Whatever call this function before or after declaration.
  console.log('Hi');
}

// First-class objects
// Function expression

const amAData = function () {
  console.log(`I'm a data`);
};
amAData(); // I call the variable like a would do to the function.

function executeFunction(fuction) {
  fuction();
}
executeFunction(amAData);

// Arrow function
const functionArrow = () => {
  console.log(`I'm a arrow function`);
}

functionArrow();

// Inside an object
const obj = {
  // say: function () {
  say() { // This a method
    console.log(`I'm saying hi...`)
  }
}
obj.say();
