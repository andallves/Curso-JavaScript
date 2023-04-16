// Concatenating Array

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1 + a2; // When I doing this I together the a1 and a2 values 
console.log(typeof a3); // So a3 its a string

// Then to resolve this problem we can using a function to do it.
const a4 = a1.concat(a2, [7, 8, 9]);
console.log(a4, typeof a4)

// Another way to do the concatenating its using the spread operator
const a5 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]];
console.log(a5, typeof a5);