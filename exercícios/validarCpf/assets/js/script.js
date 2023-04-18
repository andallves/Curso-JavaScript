const btnValidate = document.querySelector('.btn-validate');


btnValidate.addEventListener('click', (e) => {
  const inputCpf = document.querySelector('.cpf');
  const cpf = inputCpf.value;
  validateCpf(cpf);
});

const validateCpf = (cpf) => {
  const numberToCalculator = numberToCalculator(cpf);
}

const numberToCalculator = (cpf) => {
  const cpf = cpf;
  let clearCpf = cpf.replace(/\D+/g, '');

  for (let i = 0; i < 9; i)
}
