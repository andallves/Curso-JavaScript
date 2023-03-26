// The math functions allow to make math operations acess the methods

let num1 = 8.2422;
console.log(num1);

let num2 = Math.floor(num1); // This method allows round the number to down.
console.log(num2);

let num3 = Math.ceil(num1); // This method allows round the number to up.
console.log(num3);

let num4 = Math.round(num1); // This method allows round automatic to up or to down depending how near it's was.
console.log(num4)

let num5 = Math.max(1, 4, 6, 2, 9, 0, -1, -4, -7); // This method return the bigger value;
console.log(num5);
num5 = Math.min(1, 4, 6, 2, 9, 0, -1, -4, -7);  // This method return the smaller value;
console.log()

let randomNumber = Math.random(); // This value return random value between 0 and 1
console.log(randomNumber);

randomNumber = Math.random() * (10 - 5) + 5; // This method return a float value beteween 5 and 10
console.log(randomNumber);

randomNumber = Math.round(Math.random() * (10 - 5) + 5); // This method return a rounded value beteween 5 and 10
console.log(randomNumber);

randomNumber = Math.pow(10, 2) // This method return a poteciation 10²
console.log(randomNumber);
randomNumber = 10 ** 2; // This operation return a potenciation 10²
console.log(randomNumber)

randomNumber = (num1 ** 0.5); // This operation return √num1
console.log(randomNumber);

// In JavaScript we can do a divison by 0 100/0 the result will be a boolean valeu and a type Infinity
console.log(100 / 0);
