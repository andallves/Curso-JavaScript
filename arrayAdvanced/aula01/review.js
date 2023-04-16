// Review Array

// There are value by reference
//                0          1         2
const names = ['Andre', 'Cleylton', 'Brena'];
const newNames = names; // Everything that I have in 'names' will to pass to 'newNames' and all changes doing in 'names' will change in newNames too

const anotherNames = [...names] // This is a spread operator that I copy all elements of names to anotherNames and it this way I'm copy the value and don't pass by reference

names[2] = 'Caio';
delete names[0];
console.log(names)
console.log(anotherNames);

// Remove elements
const removeLast = anotherNames.pop(); // Remove the last element and return it.
const removeFirst = anotherNames.shift(); // Remove the first element and return it.

// Add elements
anotherNames.push('João'); // Add an element in the finish of the array
anotherNames.unshift('Caio'); // Add an elements in the first position of the array

const slice = anotherNames.slice(1, 3) // Get the element of the index 1 and 2 because the index 3 don't enter.

const otherSlice = anotherNames.slice(0, -1); // Get all vales but don't get the last.

// To convert the string in an array
const name = 'Andre Alves Pereira';
const arrayNames = name.split(' '); // The string will be separate and It will to be convert in an array with 3 elements.

// To convert the array in a string
const nameArray = ['Andre', 'Alves', 'Pereira'];
const stringName = nameArray.join(' '); // This method join the elements in an array

console.log(names);
console.log(anotherNames);
console.log(removeLast, removeFirst);
console.log(slice);
console.log(otherSlice);
console.log(name);
console.log(arrayNames);
console.log(nameArray);
console.log(stringName);



// String, objects, fuctions, numbers...
// Instead to create an array of literal, I can create using the array constructor.

// const words = new Array('new', 'chair', 'test'); // Little used