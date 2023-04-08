// DESTRUCTURING -> Assinging by destructuring in arrays

// '...varibleName' => This is called REST OPERATOR when it's take the remainder;
// '...' => but it's can to call spread

// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letters = [b, c, a];
// [a, b, c] = letters; // I'm reassingning the varible value

// console.log(a, b, c);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [firstNumber, secundNumber, ...remainder] = numbers; // The first element will be assinging to first variable and secund element will be assinging in the secund variable successively.
// '...variableName' means that I take remainder of the array and I assing to the variable.

console.log(firstNumber, secundNumber);
console.log(remainder); // This variable has reaminder of the elements

// If I want to take alternate values it's possible
const [first, , third, , fifth, , seventh, , ninth] = numbers; // In this case I'm getting alternate values
console.log(first, third, fifth, seventh, ninth);

//                        0          1          2
//                     0  1  2    0  1  2    0  1  2
const otherNumbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// If I want to access the value 7, I need to do it;
console.log(otherNumbers[2][0])

// To destructing the array inside another array it's vary complicated, if I want to get the value 6
const [, [, , sixth]] = otherNumbers;
console.log(sixth);

// So, to facilitate I can do it
const [, list2] = otherNumbers;
console.log(list2);
// Now I can access the index in my secund list and getting any value tha I want it.

const [, , sixthValue] = list2;
console.log(sixthValue);