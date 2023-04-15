// Generator Function -> Stop the code

function* generator1() {
  // Code block
  yield 'value 1'; // Stop temporarilly my code and return this value
  // Code block
  yield 'value 2';
  // Code block
  yield 'value3';
}

const g1 = generator1();
console.log(g1.next()); // 'next()' is a method of the generator function to get the value, and it will be returned two key 'value' (It would be where is the value) and 'done' (returned if my function finish or not) - return the first value
console.log(g1.next().value); // return the second value
console.log(g1.next().value, g1.next().done); // return the third value

console.log('===========================');

function* generator2() {
  yield 'generator value 1';
  yield 'generator value 2';
  yield 'generator value 3';
  yield 'generator value 4';
  yield 'generator value 5';
}

const g2 = generator2();
// It's possible to iterate
for (let g of g2) {
  console.log(g);
}

function* generator3() {
  let i = 0;
  while (true) { // This is a infinit loop
    yield i;
    i++;
  }
}

console.log('===========================');

const g3 = generator3();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value); // Always that I call this function will be returned a diferente value because my while is a infinit loop 

console.log('===========================');

function* generator4() {
  yield 1;
  yield 2;
  yield 3;
}
function* generator5() {
  yield* generator4();
  yield 4;
  yield 5;
  yield 6;
}

const g5 = generator5()
for (let value of g5) {
  console.log(value);
}

console.log('===========================')

function* generator6() {
  yield function () {
    console.log('I come to y1');
  }

  return function () { // Return the value and finish the generator function
    console.log('I come to retutn');
  }
  // yield function () {
  //   console.log('I come to y2');
  // }
}

const g6 = generator6();
const func1 = g6.next().value;
const func2 = g6.next().value;

func1();
func2();
