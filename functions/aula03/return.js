// return
// return the value
// finish the function

function sum(a, b) {
  return a + b; // This function return the value and I can save the result in the variable.
}

function sum2(a, b) {
  console.log(a + b); // This function only print the sum value, but don't return any value.
}
sum2(1, 4);
// document.addEventListener('click', function () {
//   document.body.style.backgroundColor = 'red';
// }); // This function don't return anything, but execute something, like change the background-color to red.

//OBS: We have functions to return some value and functions that don't return nothing but execute something.

function createPerson(name, lastname) {
  // return {name: name, lastname: lastname} -> How the param has the same value to the key its possible to do it.
  return { name, lastname }
}

const p1 = createPerson('Brena', 'Alves');
const p2 = {
  name: 'Cleylton',
  lastname: 'Nascimento'
}
// Both variable has the same object, the only diference its that in the first variable I have a function to create de object to me.

// I can having a function inside other function.
function sayPhrase(start) {
  function sayRest(rest) {
    return start + ' ' + rest;
  }
  return sayRest;
}
const say = sayPhrase('Hello');
const rest = say('World');
console.log(rest);

//  EXEMPLOS
// function double(n) {
//   return n * 2;
// }
// function triple(n) {
//   return n * 3;
// }
// function quadruple(n) {
//   return n * 4;
// }

// function createMultiplier(multiplier) {
//   function multiplication(n) {
//     return n * multiplier;
//   }
//   return multiplication;
// }

function createMultiplier(multiplier) {
  return function (n) {
    return n * multiplier;
  }
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(2));
console.log(triple(2));
console.log(quadruple(2));


