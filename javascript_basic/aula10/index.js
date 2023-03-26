
/** ARITHMETIC OPERATORS
 *
 * '+' Sum / Concatenation
 * '-' Subtraction
 * '/' Division
 * '*' Multiply
 * '**' Potentiation
 * '%' Mod 
 */


// Order of precedence
// ()
// **
// * / %
// + -


// const num1 = 10;
// const num2 = 5;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 / num2);
// console.log(num1 * num2);
// console.log(num1 ** num2);
// console.log(num1 % num2);


// ASSIGNMENT OPERATORS

// (+=) counter = counter + 3; -> counter += 3
// (*=) counter = counter * 2; -> counter *= 2
// (-=) counter = counter - 2; -> counter -= 2
// (/=) counter = counter / 2; -> counter /= 2
// (**=) counter = counter ** 2; -> counter **= 2



// INCREMENT OPERATORS

// let counter = 1;

// (++) counter = counter + 1; -> counter++ increment after || ++counter increment before
// (--) counter = counter - 1; -> counter-- decrement after || --counter decrement before


const number1 = 10;
const number2 = 'Andre';
console.log(number1 * number2); // The result it's a NaN

//NaN (Not a number) -> indicates that result it's not a number, because I try to do a sum with a String and a number

const number3 = 12;
// const number4 = parseInt('5.8');
// const number4 = parseFloat('5.8');
const number4 = Number('5.8'); //To convert this String in a number I can use parseInt, parseFloat or Number;
console.log(number3 + number4)


