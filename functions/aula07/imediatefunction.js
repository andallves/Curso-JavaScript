// IMMEDIATE FUNCTION IIFE -> Immidiately invoked function expression

(function (age, weight, height) { // Everything that I have inside this function was pretected by my global scope.
  const lastname = 'Alves';
  function createName(name) {
    return name + ' ' + lastname;
  }
  function sayName(name) {
    return createName(name);
  }
  const name = sayName('Andre');

  console.log(`The ${name} is ${age}, ${weight}kg weight and ${height} height.`)
})(22, 85, 1.77); // I'm creating a anonymous function and I call it immediately.

const name = 'Paul';
console.log(name);