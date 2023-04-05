// Pega os valores de peso e altura
// calcula o imc
// verifica o resultado
// imprime o resultado

const container = () => {

  const calculate = document.querySelector('#calculate');

  calculate.addEventListener('submit', (e) => {
    e.preventDefault();

    const resul = document.querySelector('.result');

    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);

    const imc = (weight / (height ** 2))

    if (!weight && !height) {
      resul.innerHTML = `Calculo invalido! Nenhuma informação fornecida`;
    } else if (!height || Number.isNaN(height)) {
      resul.innerHTML = 'Altura invalida!'
    } else if (!weight || weight >= 200) {
      resul.innerHTML = 'Peso invalido!'
    } else {

      if (imc < 18.5) {
        resul.innerHTML = `Seu IMC é ${imc.toFixed(1)} (Abaixo do peso)`;
      } else if (imc >= 18.5 && imc < 25) {
        resul.innerHTML = `Seu IMC é ${imc.toFixed(1)} (Peso normal)`;
      } else if (imc >= 25 && imc < 29.9) {
        resul.innerHTML = `Seu IMC é ${imc.toFixed(1)} (Sobrepeso)`;
      } else if (imc >= 30 && imc < 35) {
        const message = `Seu IMC é ${imc.toFixed(1)} (Obesidade grau l)`;
      } else if (imc >= 35 && imc < 40) {
        resul.innerHTML = `Seu IMC é ${imc.toFixed(1)} (Obesidade grau 2)`;
      } else if (imc >= 40) {
        resul.innerHTML = `Seu IMC é ${imc.toFixed(1)} (Obesidade grau 3)`;
      }
    }


  })

}
container();


