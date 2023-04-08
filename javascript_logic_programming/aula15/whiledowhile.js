// WHILE AND DO WHILE -> repeating structure

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++
// }

// let j = 0;
// const name = 'Andre';

// while (j < name.length) {
//   console.log(name[j]);
//   j++;
// }

// console.log('Follow the life');

const random = (min, max) => {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}
const min = 1;
const max = 20;
let rand = 10;

while (rand !== 10) { // Verify conditional first, after execute
  rand = random(min, max);
  console.log(rand)
}

do { // Execute first, after verify the conditional
  console.log(rand);
} while (rand !== 10);