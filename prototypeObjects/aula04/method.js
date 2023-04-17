// Methods useful

/*
Object.values
Object.entries
Object.assing(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
{ ...spread }
// Seen
Object.keys (return the keys)
Object.freeze (freeze the object)
Object.defineProperties (define several properties)
Object.defineProperty (define one property)
*/

const product = { name: 'Cup', price: 1.8 };
const otherProduct = product; // The both variables ponteir to the same memory address

// If I change the value in some variable the value will be change in another variable too.
otherProduct.name = 'Whatever';
console.log(product);
console.log(otherProduct);

// To copy the value by variable to another variable its using the spread operator (...)
const newProduct = { ...product, material: 'porcelain' }; // I'm copy the value by product to newProduct with spread operator.
newProduct.name = 'Cup';
console.log(newProduct);

// Another way to copy the value to a variable its using the Object.assin.
const cup = Object.assign({}, product, { material: 'porcelain' }) // All of this thing that are to be pass it will be add in my variable cup.
console.log(cup);

// The 3rd way to copy the variable by a variable and adding another variable
const plate = { name: product.name, price: product.price, material: 'parcelain' }; // I'm copy only the value.
console.log(plate)

console.log(Object.keys(plate)); // Show the keys of my objects
Object.freeze(cup); // I cannot to change any value in my object


Object.defineProperty(plate, 'name', {
  writable: false,
  enumerable: false,
  configurable: false
})
// getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor(plate, 'name')); // I'm access the property name by 'plate' and seeing the definition properties (enumerable, writable, configurable...)

// To get the object values 
console.log(Object.values(plate)); // Instead to return the key, it will be returned values from keys.

// If I want to get the key and the value of the object I can use 
console.log(Object.entries(plate)); // Return an array with keys and values 

// for (let entry of Object.entries(product)) {
//   console.log(entry);
// }

for (let [key, value] of Object.entries(product)) {
  console.log(key, value);
}

