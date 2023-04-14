// Lexical Scope -> The function know where it was create and all the neighbors.

// Inside the function I can to access the neighbor
const name = 'Andre';
function sayName() { // This function can to use the variable outside the scope.
  console.log(name);
}

function useSayName() {
  const name = 'Luiz';
  sayName();
}
useSayName();