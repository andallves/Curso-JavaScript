// BASIC ABOUT FUNCTIONS
// -> Geral functions execute actions, you send a value and It's returned something or none.

function greetings(name) { // I can pass param to my function
  // Here inside I write the code block
  console.log(`Good morning ${name}!`); // This print to user the message, but It isn't returned none value.

  return 2324; // This is a value that It's will be returned.

} // This is the body of the my fuction

greetings('Andre'); // This is how I call my funciton
greetings('Mary'); // I can call the function how many times was necessary.

const variable = greetings('Amor');
console.log(variable);



function sum(number1 = 1, number2 = 1) { // Assigment two default values
  return `The sum is ${number1 + number2}`; // Return makes my function finish
}

const result = sum(3, 9);
console.log(result);

// ANONYMOUS FUNCTIONS
// const root = function (n) {
//   return n ** 0.5;
// };

// const root = (n) => {
//   return n ** 0.5;
// };

const root = n => n ** 0.5;

console.log(root(16))