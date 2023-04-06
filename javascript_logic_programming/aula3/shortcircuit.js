// Avaliation Short-Circuit

/* Logic Operators
 * && -> Only true when all the expression are true. -> false && true = false "value" = 0
 * || -> Only false when all the expression are false -> false || true = true
 * 
  
  FALSY -> This values are evalute like false
  *false
  0
  ' ', " ", ` `
  null / undefined
  NaN

  TRUE -> Anything diference this are evalute like true
 */

// In Javascript when we're using logic operator &&, when it's find a false value will happen a short cicuit and it will return the value to represent the false.
console.log('Andre Alves' && 0 && 'Brian'); // 0

console.log('Andre Alves' && true && 'Maria'); // 'Maria' = true.

// Ex. &&
const speakHi = () => 'HI';
const goExecute = true;
console.log(goExecute && speakHi());

// Ex. ||

const colorUser = 'red';
const colorDefault = colorUser || 'black';
console.log(colorDefault);


const a = 0;
const b = null;
const c = 'joazin';  // This value will be returned
const d = false;
const e = NaN;

const a = 0;
const b = null;
const c = undefined;
const d = false;
const e = NaN; // This value will be returned