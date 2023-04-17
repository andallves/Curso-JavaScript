// Manipuling Prototypes

// new Object -> Object.prototype
const objA = {
  keyA: 'A'
  // __proto__: Object.prototype
};

const objB = {
  keyB: 'B'
  // __proto__: objA
}

const objC = new Object();
objC.keyC = 'C';
// __proto__: objB

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.keyA);



function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.discount = function (percentage) {
  return this.price = this.price - (this.price * (percentage / 100));
}

Product.prototype.increase = function (percentage) {
  return this.price = this.price + (this.price * (percentage / 100));
}

const p1 = new Product('Cup', 75);
console.log(p1.discount(10));

const p2 = { name: 'T-shirt', price: 100 }
Object.setPrototypeOf(p2, Product.prototype);

console.log(p2.discount(10));

console.log(p1);
console.log(p2);

const p3 = Object.create(Product.prototype, {
  price: {
    value: 120,
    writable: true,
    enumerable: true,
    configurable: true
  },
  size: {
    value: 40,
    writable: true,
    enumerable: true,
    configurable: true,
  }
});

p3.size = 'G';
console.log(p3, p3.increase(15));
console.log(p3.size);