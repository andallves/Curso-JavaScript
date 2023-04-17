// ForEach

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let value of a1) {
  console.log(value);
}

// Using forEach to iterate my array
a1.forEach(function (value, index, array) {
  console.log(value, index);
})

// Simular to reduce
let total = 0;
a1.forEach(value => {
  total += value;
});
console.log(total);