// The JavaScript give us some way to work to number

let number1 = 2;
let number2 = 3.8;
// This varibles has number values

//If I want to show this varibles like a string
console.log(number1.toString() + number2.toString()); // -> Retorn the value number as a string
// number1 = number1.toString(); // -> This transform a number to string
console.log(number1.toString(2)); // -> This method return the value in binary 

//We can round value in a float number
let number3 = 21.308948730;
console.log(number3);
console.log(number3.toFixed(2)); // After '.' will be showed two numbers

console.log(Number.isInteger(number3)); // This method of the function Number return a boolean vale if my number is interger or not, so we can hava true or false

let temp = number1 * 'Olá'; // This is a NaN
// If I want to know if my calculation is a number or NaN
console.log(Number.isNaN(temp)); // This return a boolean value, true if the my operation result it's a NaN or false if the operation happens correctly and my result it's a number.


// JavaScript follows the default IEEE 754-2008

let num1 = 0.8;
let num2 = 0.1;

// // num1 += num2;
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // More complex but more efficient 

// // num1 += num2;
// num1 = ((num1 * 100) + (num2 * 100)) / 100;

num1 = Number(num1.toFixed(2)); // Depeding your reasons, this could the best way 

// num1 = num1.toFixed(2)
num1 = parseFloat(num1.toFixed(2));
console.log(Number.isInteger(num1));
console.log(num1);