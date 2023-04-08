// Escreva uma funçao que recebe um número e returne o seguinte:
// Número é divisível por 3 = Fizz;
// Número é divisível por 5 = Buzz;
// Número é divisível por 3 e 5 = FizzBuzz;
// Número não é divisível por 3 e 5 = retorne o próprio número
// Checar se o número é realmente um núemro = retorne o próprio número
// Use a funão com números de 0 a 100

const fizzBuzz = (number) => {
  if (typeof number !== 'number') return number;
  if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
  if (number % 3 === 0) return 'Fizz';
  if (number % 5 === 0) return 'Buzz';
  return number;
}

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}

