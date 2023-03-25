// MORE ABOUT STRING

let firstString = "A \"text\""; // -> We can using "" inside and "" outside, but for you getting do this, it's necessary to use \ to get.

let secunString = "A \\text"; // -> If you want or need using a \ in your code is must use two \\.

// The String work as a array
// The String give us a lot of types of method to work with String

//                 012345 -> range
let thirdString = 'A beach in a sunny day';

console.log(thirdString[4]); // I can get a value by index
console.log(thirdString.charAt(3)) //This is another way to get a value by index

console.log(thirdString.concat(' in a beautiful day.')); // -> Those are three way to concatenate with String.
console.log(thirdString + ' in a beautiful day.');
console.log(`${thirdString} in a beautiful day.`);

console.log(thirdString.indexOf('ext')); // -> Return the index where the word that I pass start, if it don't find any word, it will be return -1
console.log(thirdString.indexOf('x', 2)); // -> I'm passing two params, first the ward that I want to find, and the secund value is start point where to beggin to looking for.
console.log(thirdString.lastIndexOf('x')); // -> This method start the search from end to start.

// Regular Expression
console.log(thirdString.match(/[a-z]/)); // -> This method return the first element, if It belongs some word.
console.log(thirdString.match(/[a-z]/g)); // -> Now It will be returned an array with all elements lowercase in my string;
console.log(thirdString.search(/x/)); // -> This method return the index of the word that I informed.
console.log(thirdString.search(/x/g));
console.log(thirdString.replace('A', 'Another')); // -> This method change the word.
console.log(thirdString.replace(/x/g, '#')); // -> This way change all 'x' letter was found.
console.log(thirdString.replace(/t/, '1')); // -> This way change the first 't' was found.

console.log(thirdString.length); // -> This is a atribute that return the length of the string

console.log(thirdString.slice(2, 5)); // -> This method get a piece from index 2 to < 5
console.log(thirdString.slice(-9, thirdString.length - 4));
console.log(thirdString.slice(-9, -4));
console.log(thirdString.substring(thirdString - 9, thirdString - 4));

console.log(thirdString.split(' ')); // -> This method separte the string in a many elements, I define where it will to be break, like a array
console.log(thirdString.split(' ', 3)); // -> This secund params that I assign to define how many elements I want to take it. 

console.log(thirdString.toUpperCase()); // -> To transform in UpperCase
console.log(thirdString.toLowerCase()); // -> To transform in LowerCase