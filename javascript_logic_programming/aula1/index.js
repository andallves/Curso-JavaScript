// Comparation sign

/*
< smaller then
> bigger then
<= smaller then or equal
>= bigger then or equal
== equal (value) -> never used
=== stric equal (value and type)
!= diference (value) -> never used
!== stric diference (value and type)
*/
const number1 = 5;
const number2 = 49;
const number3 = 9;
const number4 = -12;
const number5 = 'Andre';
const number6 = '9';

const bigger = number1 >= number4; // true
console.log(bigger);
const smaller = number3 < number2; // true
console.log(smaller);

const equal = number3 == number6; // true
console.log(equal);
const equalTriple = number3 === number6; // false
console.log(equalTriple);

const diference = number3 != number6; // false
console.log(diference);
const diferenceTriple = number3 !== number6; // true
console.log(diferenceTriple);

console.log(5 > 7); // Return a boolean value.
