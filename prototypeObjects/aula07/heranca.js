// Herança (succession)

function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.discount = function (percentage) {
  this.price = this.price - (this.price * (percentage / 100));
}
Product.prototype.increase = function (percentage) {
  this.price = this.price + (this.price * (percentage / 100));
}

function Tshirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}
Tshirt.prototype = Object.create(Product.prototype);
Tshirt.prototype.constructor = Tshirt;

function Cup(name, price, material, stock) {
  Product.call(this, name, price);
  this.material = material;

  Object.defineProperty(this, 'stock', {
    enumerable: true,
    configurable: false, // This property cannot to be delete or change
    get: function () {
      return stock;
    },
    set: function (value) {
      if (typeof value !== 'number') return;
      stock = value;
    }
  });
}
Cup.prototype = Object.create(Product.prototype);
Cup.prototype.constructor = Cup;

const product = new Product('Gen', 110);
const tshirt = new Tshirt('Regata', 80, 'black');
const cup = new Cup('StarWars Cup', 65, 'porcelain', 5);

Cup.prototype.custom = function (custom) {
  if (custom) {
    this.price = this.price * 2.5;
    console.log('The value is greater because your Cup is custom.')
  }
  return this.price
}

console.log(product);
console.log(tshirt);
console.log(cup);

