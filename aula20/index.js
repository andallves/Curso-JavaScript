/*
Primitive (immutable) - String, number, undefined, null (bigint, symbol)
*/

let name = 'Andre';
// name = 'Alves';
name[0] = 'E'; // This line don't execute any action, because the String is immutable;
console.log(name);


let a = 'A';
let b = a; // Copy

// Both variables have 'A' value
console.log(a, b);

// But if I change the variable 'a' value,'b' keep going 'A'.
a = 'Another thing';
console.log(a, b)


/*
Reference (mutable) - array, object, function
*/

let c = [1, 2, 3, 4];
let d = c; // When I doing this, 'b' is point to the same place in the memory that 'a'.
let e = [...c] // When I do sprat, the value will be copied
console.log(c, d);

c.push(4)
console.log(c, d); // Both variable has the same value because the both indicate to same localization in the memory.

d.pop();
console.log(c, d);

console.log(e);

const person = {
  name: 'Andre',
  lastname: 'Alves'
};

const otherPerson = { ...person };

console.log(person, otherPerson);

person.name = 'Carlos';
console.log(person, otherPerson);