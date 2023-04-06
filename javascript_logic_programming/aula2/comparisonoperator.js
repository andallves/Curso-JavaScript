// LOGIC COMPARATION

/*
  && -> AND -> E -> All the expression need to be true to return true.
  || -> OR  -> OU
  !  -> NOT -> NÃO
*/

// all sentence needs to be true to result to be true
const expressionAnd = 4 > 3 && 3 > 1; // true && true = true
console.log(expressionAnd);

// It's necessary that one of the sentence to be true to result to be true
const expressionOr = 4 > 4 || 9 < 10; // false or true = true
console.log(expressionOr);

// '!' change the value 
const not = !4 > 2; // not(true) = false
console.log(not);

const user = 'Andre';
const password = '12345678';

const logIn = (user === 'Andre' && password === '12345678');
console.log(logIn);