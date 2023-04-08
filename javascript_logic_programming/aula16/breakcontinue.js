// BREAK and CONTINUE

// CONTINUE -> Always the word CONTINUE is found, the code come back to the start of the loop
// We'll use the word CONTINUE before the action that we don't want to execute.
// Keep going to the next iteration
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let number of numbers) {

  if (number % 2 === 0) {
    continue; // If the number is even, It'll come back to the start the loop and the number won't to be print.
  }
  console.log(number);
}

console.log('=========================')

// BREAK -> The work break, stop the loop and leave the block

const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40];

for (let evenNumber of evenNumbers) {

  if (evenNumber === 16) {
    console.log(`I found the number ${evenNumber}`)
    break; // After number 16 was found the loop stoped
  }
  console.log(evenNumber);
}