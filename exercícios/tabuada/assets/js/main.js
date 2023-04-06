// Pegar a operação que será utilizada
// Escolher entre as opções
// Realizar a operação deseja


const form = document.querySelector('.input-field');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputOperator = e.target.querySelector('#operator');
  const operator = inputOperator.value;
  const again = true;
  setTable(null, again);
  chooseOperation(operator);



})

const chooseOperation = (operator) => {
  const title = document.querySelector('.container h1');

  switch (operator) {
    case '+':
      title.innerHTML = 'TABUADA DE ADIÇÃO';
      for (let j = 1; j <= 3; j++) {
        setTable(j);
        for (let i = 1; i <= 10; i++) {
          setResult(`${i} + ${j} = ${i + j}`, `${j}`);
        }
      }
      return;

    case '-':
      title.innerHTML = 'TABUADA DE ADIÇÃO';
      for (let j = 1; j <= 3; j++) {
        setTable(j);
        for (let i = 1; i <= 10; i++) {
          setResult(`${i} - ${j} = ${i - j}`, `${j}`);
        }
      }
      return;

    case '/':
      title.innerHTML = 'TABUADA DE ADIÇÃO';
      for (let j = 1; j <= 3; j++) {
        setTable(j);
        for (let i = 1; i <= 10; i++) {
          setResult(`${(i * j)} / ${j} = ${(i * j) / j}`, `${j}`);
        }
      }
      return;

    case '*':
      title.innerHTML = 'TABUADA DE ADIÇÃO';
      for (let j = 1; j <= 3; j++) {
        setTable(j);
        for (let i = 1; i <= 10; i++) {
          setResult(`${i} * ${j} = ${i * j}`, `${j}`);
        }
      }
      return;

    default:
      return 'Invalid Operation';
  }
}


const createDiv = () => {
  const div = document.createElement('div');
  return div;
}

const createP = () => {
  const p = document.createElement('p');
  return p;
}

const setResult = (msg, i) => {
  const result = document.querySelector(`.result${i}`);

  const p = createP();
  p.innerHTML = msg;
  result.appendChild(p);

}

const setTable = (i, again) => {
  const allTable = document.querySelector('.allTable');
  const div = createDiv();
  div.classList.add(`result${i}`);
  allTable.appendChild(div);
}


