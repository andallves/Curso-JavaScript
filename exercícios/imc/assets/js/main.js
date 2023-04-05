// Capturar o evento
// E
// Pega os valores de peso e altura
// calcula o imc
// verifica o resultado
// imprime o resultado

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputWeight = e.target.querySelector('#weight');
  const inputHeight = e.target.querySelector('#height');

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);


  if (!weight || weight >= 200) {
    setResult('Peso invalido!', false);
    return;
  }

  if (!height) {
    setResult('Altura invalida!', false);
    return;
  }

  const imc = getImc(weight, height);
  const categoryImc = getCategoryImc(imc);

  const msg = `Seu IMC é ${imc} ${categoryImc}`;
  setResult(msg, true)

})

const getImc = (weight, height) => {
  const imc = weight / height ** 2;
  return imc.toFixed(2);
}

const criaP = () => {
  const p = document.createElement('p');
  return p;
}

const setResult = (msg, isValid) => {
  const resul = document.querySelector('.result');
  resul.innerHTML = '';

  const p = criaP();
  p.innerHTML = msg;
  resul.appendChild(p);

  if (isValid) {
    p.classList.add('valid')
  } else {
    p.classList.add('invalid')
  }
}

const getCategoryImc = (imc) => {
  const category = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau l', 'Obesidade grau 2', 'Obesidade grau 3']

  if (imc >= 40) return category[5];
  if (imc >= 35) return category[4];
  if (imc >= 30) return category[3];
  if (imc >= 25) return category[2];
  if (imc >= 18.5) return category[1];
  if (imc < 18.5) return category[0];

}





