// PROTOTYPES
/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servido de modelo ou molde para futuras produções.

Todos os objetos tem um referência interna para um protótipo (_proto_) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não ) tal membro.
*/

// Constructor -> mold (class)
function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  // this.fullName = () => `${this.name} ${this.lastname}`;
}
Person.prototype.fullName = function () {
  return `${this.name} ${this.lastname}`
}
// Instance
const person1 = new Person('Andre', 'Alves');
const person2 = new Person('Brena', 'Pereira');

console.log(person1.fullName());
console.log(person2);