// CLOSURES -> It's ability to access the lexical scope

function returnFunction(name) {
  return function () {
    return name;
  }
}
const func = returnFunction('Andre'); // This do closures of the function with value 'Andre' and  I can change;
const func1 = returnFunction('Cleylton');
console.log(func(), func1());