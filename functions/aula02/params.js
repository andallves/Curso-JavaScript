// Parameters

// To the function declared using the name function, there are a varibale 'arguments' that receive the values.
// But only work in this function and don't work to the arrow function.
// This function has a varible arguments that sustain all the send arguments.
function funcao(a, b, c, d, e, f) { // This params receive the values, but don't change the variable arguments.
  // let total = 0;
  // for (let argument of arguments) {
  //   total += argument;
  // }
  // console.log(total, a, b, c);
  console.log(a, b, c, d, e, f) // In this case don't have a problem.
  // But if I don't send the value, the javascript will to declare the variable with undefined value.

}

funcao(1, 2, 3, 4, 5); // When I send a value '232', this is called arguments, when I send a variable this is called params.

function sum(a, b = 2, c = 1) {
  console.log(a + b + c); // When I pass only one value the return will be NaN.
  // We can resolve this assing the default value to param
}
sum(2, 30); // If I send the value, it will be used, but I don't send a value, it will be used the default value.
// sum(2, '', 30); -> When I send a string, this values will be concatened
// sum(2, 0, 30); -> The param 'b' receive 0 and it don't assing the default value.
sum(2, undefined, 30); // This is the only way to don't pass the value to param 'b' and it assing the default value;

function person({ name, lastname, age }) { // desestructure
  console.log(name, lastname, age);
}

// person({ name: 'Andre', lastname: 'Alves', age: 22 });
const obj = { name: 'Andre', lastname: 'Alves', age: 22 };
person(obj);

function array([value1, value2, value3]) {
  console.log(value1, value2, value3);
}

const arr = ['Andre Alves', 'Pereira', 22];
// array(['Andre Alves', 'Pereira', 22]);
array(arr);

// function count(operator, accumulator, numbers) {
// I can assing the function in a variable
const account = function (operator, accumulator, ...numbers) { // Here I'm using the rest operator to get all the numbers
  for (let number of numbers) {
    if (operator === '+') accumulator += number;
    if (operator === '-') accumulator -= number;
    if (operator === '/') accumulator /= number;
    if (operator === '*') accumulator *= number;
  }
  console.log(accumulator);
};

// count('+', 0, [3, 54, 2, 90])
account('*', 1, 3, 54, 2);

// Get arguments using rest operator in a arrow function
const count = (...args) => { // This work like arguments
  console.log(args);
};
count('1', 2, '3');
