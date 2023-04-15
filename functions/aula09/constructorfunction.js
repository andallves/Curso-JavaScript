// Constructor Functions -> It's simular to the factory function, one diference between the both funtions is because in the factory function is returned a object 

// In the constructor functions something are do automatically, like create a object and return this object, we only need to create the function

// In the constructor function always the name start with the first letter in uppercase

// Constructor -> Person (new)

function Person(name, lastname) {

  //These are consider private variable bacause thay aren't avalible outside the funciton
  const ID = Number(Math.random()); // We can to have private key in the object that cannot to access outside by function to this we used the const ou let 

  const internMethod = () => {
    console.log('test');
  }; // This is a intern method that cannot to access outside of the function

  this.name = name;
  this.lastname = lastname;

  this.method = () => {
    console.log('I am the method');
  }
} // How this functions is a constructor functions because the firs letter of the funcation is uppercase the own key represent the body of the function

const p1 = new Person('Andre', 'Alves');
const p2 = new Person('Brena', 'Pereira');
console.log(p1.name);
console.log(p2.lastname);
p1.method();