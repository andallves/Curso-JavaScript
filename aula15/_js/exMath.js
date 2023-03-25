const number = Number(prompt('Hello, could you inform any number: '));

const numberTitle = document.getElementById('numberTitle');
const text = document.getElementById('text');

numberTitle.innerHTML = number;
text.innerHTML = `<p>The √${number} (square root) of number informed is <strong>${number ** 0.5}</strong> </p>`;
text.innerHTML += `<p><strong>${number}</strong> is integer: ${Number.isInteger(number)}</strong> </p>`;
text.innerHTML += `<p>I's NaN: <strong>${Number.isNaN(number)}</strong> </p>`;
text.innerHTML += `<p>Rounding your number to down: <strong>${Math.floor(number)}</strong> </p>`;
text.innerHTML += `<p>Rounding your number to up: <strong>${Math.ceil(number)}</strong> </p>`;
text.innerHTML += `<p>Your number with two decimal places: <strong>${(number.toFixed(2))}</strong> </p>`;

