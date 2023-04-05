const a = 2;
const b = 8;
const c = -24;


console.log(`A equação do 2º grau ficou ${a}x² + ${b}x + ${c}`);
console.log(`Para que possamos resolver essa equação é preciso aplicar na fórmula de baskara`);
console.log(`-b +/- √Δ`);
console.log(`Pra aplicar a fórmula de baskara precisamos saber o valor de Δ`);
console.log(`Pra saber o valor Δ usamos a seguite fórmula: Δ = b² + 4ac`);
const delta = (b ** 2) - 4 * a * c;
console.log(`O valor de Δ é ${delta}`);
console.log(`Agora que sabemos o valor de delta podemos aplicar a fórmula de baskara`);
const x1 = ((b * (-1)) + (Math.sqrt(delta))) / (2 * a);
console.log(`O valor de x¹ é ${x1}`);
const x2 = ((b * (-1)) - (Math.sqrt(delta))) / (2 * a);
console.log(`O valor de x² é ${x2}`);