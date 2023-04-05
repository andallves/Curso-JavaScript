// Diference between var and let

const verdadeira = true;

// Let has block scoope {... block}
// Var only has function scoope 

let name = 'Luiz'; // creating...
var name2 = 'Caio'; // creating

// They are two diferences variables

if (verdadeira) {
  let name = 'Octávio'; // creating...
  var name2 = 'Rogério'; // redeclare...
  console.log(name, name2);

  if (verdadeira) {
    let name = "Alves"; // creating
    var name2 = 'Ronaldo'; // redeclare...
  }
}
console.log(name, name2)