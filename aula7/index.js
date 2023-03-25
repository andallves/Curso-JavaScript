const name = 'Andre';
const lastName = 'Alves Pereira';
const age = 23;
const weight = 82;
const heightInM = 1.77;
let imc = weight / (heightInM ** 2);
let bothYear = 2023 - age;

console.log(name, lastName, 'nasceu em', bothYear, 'e tem', age, 'anos, pesa', weight + 'kg tem', heightInM, 'altura e seu IMC é de', imc + '.')


// template strings
console.log(`${name} ${lastName} nasceu em ${bothYear} e tem ${age} anos, pesa ${weight}kg tem ${heightInM} altura e seu IMC é de ${imc}.`)