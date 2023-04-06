// // Diference between var and let

// const verdadeira = true;

// // Let has block scoope {... block}
// // Var only has function scoope

// let name = 'Luiz'; // creating...
// var name2 = 'Caio'; // creating

// // They are two diferences variables

// if (verdadeira) {
//   let name = 'Octávio'; // creating...
//   var name2 = 'Rogério'; // redeclare...
//   console.log(name, name2);

//   if (verdadeira) {
//     let name = "Alves"; // creating
//     var name2 = 'Ronaldo'; // redeclare...
//   }
// }
// console.log(name, name2)

// var lastName = 'Alves';
// function sayHi() {
//   var name = 'Andre'; // This variable has scoop only in this fuction, if I want to access this value outside the functions I will can't it.
//   console.log(name);
//   console.log(lastName); // I use the variable's value outside the function, This is possible

//   if (verdadeira) {
//     let name = 'Andre';
//     var lastName = 'Pereira';
//   }
//   console.log(lastName);
// }

// sayHi();

// console.log(fullName); // When I use the variable before declare using the 'var' It's will returned to me undefined value

// var fullName = 'Andre A Pereira';


// console.log(letFullName); // When I try to use the variable before initial it, de code give a error

// let letFullName = 'Andre A P';