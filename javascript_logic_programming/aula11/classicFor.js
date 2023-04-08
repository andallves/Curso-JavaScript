// // CLASSIC FOR (loop)

// for (let i = 0; i <= 5; i++) {
//   console.log(`Line ${i}`);
// }

// for (let i = 100; i <= 500; i += 50) {
//   console.log(`Line ${i}`);
// }

// for (let i = 500; i >= 0; i -= 10) {
//   console.log(`Line ${i}`);
// }

// I'll verify if number is old or even
// for (let i = 0; i <= 10; i++) {
//   const oldOrEven = i % 2 === 0 ? 'even' : 'old';
//   console.log(`The number ${i} its ${oldOrEven}`);
// }

// I'll verify if number is multiple 5 and 3 or 5 or 3
// for (let i = 0; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
//     console.log(`The number ${i} its multiple 5 and 3`);
//   } else if (i % 3 === 0 && i !== 0) {
//     console.log(`The number ${i} its multiple only 3`);
//   } else if (i % 5 === 0 && i !== 0) {
//     console.log(`The number ${i} its multiple only 5`);
//   } else {
//     console.log(`${i}`);
//   }
// }

const fruits = ['Apple', 'Pear', 'Grape', 'Pineapple', 'Lemon', 'Tomato', 'Banana', 'Orange'];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Index ${i}`, fruits[i]);
}

const elements = [{ t: one }, { t: two }];

for (let i = 0; i < elements.length; i++) {
  const { t: element } = elements[i];
  console.log(element)

}