// Object.defineProperty() -> Its possible freeze the object, but if I don't freeze all the object it's possible freeze only only one property.

// defineProperty - defineProperties

function Product(name, price, stock) {
  Object.defineProperty(this, 'stock', {
    // Here I can define something
    enumerable: true, // This do that stock to be print together anothers key
    value: stock, // This is a way to assingment the value
    writable: false, // The value cannot to be changed (writable say if the value can to be change or not)
    configurable: true  // If I can config this variable after;
  });

  // I'm using the 'defineProperties' to define the properties of any variable in the same time.
  Object.defineProperties(this, {
    name: {
      enumerable: true,
      value: name,
      writable: true,
      configurable: true
    },
    price: {
      enumerable: true,
      value: price,
      writable: true,
      configurable: true,
    }
  });
}

const p1 = new Product('T-shirt', 25, 5);

console.log(p1.name, p1.stock);
console.log(p1); // Return the array with the keys
