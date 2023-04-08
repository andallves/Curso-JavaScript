const a = [2, 4, 6];
const b = [5, 4, 2];

function compareTriplets(a, b) {
  let person1 = 0;
  let person2 = 0;
  for (let i = 0; i < a.length; i++) {
    a[i] > b[i] ? person1 += 1 : person1 += 0;
    console.log(person1);
    b[i] > a[i] ? person2 += 1 : person2 += 0;
    console.log(person2);
  }
  return [person1, person2];

}

console.log(compareTriplets(a, b));