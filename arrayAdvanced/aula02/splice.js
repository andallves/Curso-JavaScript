// splice -> This function do the same thing that pop, push, shift do.
//                -5      -4       -3         -2        -1
//                0        1        2          3         4
const names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// names.splice(index, delete, elem1, elem2, elem3);

// pop
// const removed = names.splice(-1, 1);

// const removed = names.splice(4, 1); // The function will remove the element of the index 4 and one element and return the element removed in an arry.

// const removed = names.splice(2, 2); // The function will start to remove by index 2 and it will remove two elements and return an array with this elements removed.

// const removed = names.splice(-2, 2); // The function will start to remove the last and it comes backwards 

// const add = names.splice(3, 0, 'Andre'); // Now it will to add an element 'Andre' in the index 3 and it don't remove any element

// I cant remove an element and add a now element in its places
// const removed = names.splice(4, 1, 'Carlos'); // I will remove an element of the index 4 and set 'Carlos' in its place;

// shift
// const removed = names.splice(0, 1);

// push
names.splice(names.length, 0, 'Claudia', 'Marcos'); // add elements in the last postion

// unshift
names.splice(0, 0, 'Pedro'); // add elements in the beggin of the array

console.log(names,);
