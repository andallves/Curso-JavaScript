// Getters - Setters -> Its a way to protect the property

function Product(name, price, stock) {
  this.name = name;
  this.price = price;

  let privateStock = stock; // this is a private variable

  Object.defineProperty(this, 'stock', {
    enumerable: true,
    configurable: true,

    get: function () { // I use to access the value
      return privateStock;
    },

    set: function (value) { // I use to change the value and I can to do some verify
      if (typeof value !== 'number') {
        throw new TypeError('Invalid value, stock diferent of number');
      }
      privateStock = value;
    }

  });
}

const p1 = new Product('T-shirt', 30, 5);
p1.stock = 10;
console.log(p1.stock);

// Using the getter and setter in the factory function

function createProduct(name, price) {
  return {
    name: name,
    get price() {
      return price;
    },
    set price(value) {
      price = value;
    }
  };
}

const p2 = createProduct('Jeans', 23);
p2.price = 55; // I can to change the value of my variable because I'm using the get and set too.
console.log(p2.price);
