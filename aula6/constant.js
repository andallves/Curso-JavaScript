// RULES:
// We can't create a constant using a reserved word;
// Constant needs to have a meaningful name;
// we can't start the constant name using a number;
// The constant name can't contain a hyphen '-' ou space ' ';
// Use a camelCase to declare a composite constant name;
// The constant are case-sensitive, there are diferente between a lowercase and uppercase;
// The constant value can't be modified
// When creating a constant it's necessary initialize its.

//String = text | Number = number
const name = 'Andre';

const firstNumber = '5';
const secundNumber = 3;

const sum = firstNumber + secundNumber;
const sub = firstNumber - secundNumber;
const multiply = firstNumber * secundNumber;
const division = firstNumber / secundNumber;

// console.log(sum);
// console.log(sub);
// console.log(multiply);
// console.log(division);

//We can using 'typeof' to know whick type is the data.
console.log(typeof division);
console.log(typeof (firstNumber + secundNumber))