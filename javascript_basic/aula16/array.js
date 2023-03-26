// BASIC ABOUT ARRAY
// Array works like a list, It's a object index 

const list = ['FirstElement', 'SecundElement', 'ThirdElement', 'FourthElement'];
console.log(list); // When I print the array name will be showed all elements from array.

// The array are index by element diferent of the String

//            01234
const name = 'Andre';
//                   0        1        2       3
const students = ['Andre', 'Wesna', 'Brena', 'Diva'];

// So to I acess some value in my array, I can do it using the index
console.log(students[0]); // It's will be returned the first element in my array Stutends 

// If I want to change any value e my array, I can do it assing a new value in the index that I would like to change.
students[2] = 'Brenna'; // 'Brena' will change to 'Brenna'
console.log(students);


// INSERT ELEMENT IN ARRAY

// If I assing a value to the index that doesn't exist will be to create a new element in my array.
students[4] = 'Uriel'; // Adding a new element
console.log(students);

students[students.length] = 'Cley'; // I taking the array length = 5 and assing a value to its.
console.log(students);

students.push('Otavio'); // This function add a new element in the last position in my array.
console.log(students);

students.unshift('Caio'); // This function add a new element in the first position e increment +1 in the index all of elements exists
console.log(students);

// REMOVE ELEMENT

const removedLastElement = students.pop(); // Will be removed the last element in my array and the value of the last element will be returned, so I can getting this element and save in variable.
console.log(students);
console.log(removedLastElement);

const removedFirstElement = students.shift(); // Will be removed the first element and the value that was in there position will be returned, and I can save this value in a variable too, if I want it.
console.log(students);
console.log(removedFirstElement);

// It's possible delete a element, but when I do it, the index has not been deleted, it's keep going, but Its value is empty.
delete students[2]; // Will delete 'Wesna' and element will be empty.
console.log(students)

// -> In JavaScript when you try access a value that doesn't exist, it will be returned 'undefined' always.


// GET ELEMENT  

const threeStudents = students.slice(0, 3); // I'm getting the elements 0, 1, 2 the last will not returned.
console.log(threeStudents);

const twoStudents = students.slice(0, -2); // I'm getting all elements, but two last elements
console.log(twoStudents);

// I can verify if my variable(object) it's a instance of array
console.log(students instanceof Array); // It's return a boolean value true or false.
