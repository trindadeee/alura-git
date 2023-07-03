/**
 * requisitos: nome; email; senha; telefone; identidade; cpf; numero_apartamento;
 * separar academia pras 8 da manha
 *
 */

const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const telefoneInput = document.querySelector('#telefone');
const identidadeInput = document.querySelector('#identity');
const cpfInput = document.querySelector('#cpf');
const apartamentoInput = document.querySelector('#number');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (nameInput.value === '') {
    alert('Favor, preencher seu nome');
    return;
  }

  if (emailInput.value === '' || !isEmailValid(emailInput.value)) {
    alert('Favor, preencher com um email existente');
    return;
  }

  if (passwordInput.value === '' || passwordInput.lenght < 8) {
    alert('Favor, preencher com uma senha de no mínimo 8 digitos');
    return;
  }

  if (telefoneInput.value === '') {
    alert('Favor, preencher um número para contato');
    return;
  }

  if (identidadeInput.value === '') {
    alert('Favor, preencher uma identidade válida');
    return;
  }

  if (cpfInput.value === '') {
    alert('Favor, preencher um cpf válido ');
    return;
  }

  if (apartamentoInput.value === '') {
    alert('Favor, preencher o número do apartamento ');
    return;
  }

  alert('Cadastro realizado com sucesso');
  window.location.href = 'index.html';
});

function isEmailValid(email) {
  const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);

  if (emailRegex.test(email)) {
    return true;
  }

  return false;
}

function verificarPreenchimento() {
  var reserva = document.getElementById('reserva').ariaSelected;
  var data = document.getElementById('data').value;
  var horario = document.getElementById('horario').value;
  var checkbox = document.getElementById('checkbox').checked;
  console.log(reserva);
  console.log(data);
  console.log(horario);
  console.log(checkbox);

  if (reserva === '' || data === '' || horario === '' || !checkbox) {
    alert('Por favor, preencha todos os campos e aceite os termos.');
    return false;
  } else {
    alert('Reserva realizada com sucesso');
    window.location.href = 'index.html';
  }
}
