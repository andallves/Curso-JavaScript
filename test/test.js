function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  const itsPossible = ((x2 > x1 && v2 > v1) || (x1 > x2 && v1 > v2));
  if (itsPossible) return 'NO';

  let kangaroo1 = x1;
  let kangaroo2 = x2;

  for (let i = 1; i < 1000; i++) {
    kangaroo1 += v1;
    kangaroo2 += v2;
    if (kangaroo1 === kangaroo2) return 'YES';
    console.log(kangaroo1, kangaroo2);
    i++
  }
  return 'NO';
}

console.log(kangaroo(4523, 8092, 9419, 8076));