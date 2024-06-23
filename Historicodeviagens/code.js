/* const dadosUsuarios = {
  nome: "Fulanos da Silva",
  email: "fulano@email.com",
  estado: "Minas Gerais",
  contato: "(31)4002-8922",
  empresa: "FulanoStore"
};
localStorage.setItem('dadosUsuarios', JSON.stringify(dadosUsuarios)); */
const dadosArmazenados = localStorage.getItem('dadosUsuario');
const usuario = JSON.parse(dadosArmazenados);
const espaco1 = document.getElementById('quadrado1');
espaco1.innerHTML = `${usuario.nome}`;
const espaco2 = document.getElementById('quadrado2');
espaco2.innerHTML = `${usuario.email}`;
/* const espaco3 = document.getElementById('quadrado3');
espaco3.innerHTML = `${usuario.estado}`; */
const espaco4 = document.getElementById('quadrado4');
espaco4.innerHTML = `${usuario.tel}`;

let itens = getItensBD();

function getItensBD() {
  return JSON.parse(localStorage.getItem('fretes')) ?? [];
}

function setItensBD() {
  localStorage.setItem('fretes', JSON.stringify(itens));
}

function inserItem(item) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
  <td>${item.id}</td>
  <td>${usuario.nome}</td>
  <td>${item.origem}</td>
  <td>${item.destinatario}</td>
  <td>${item.valor}</td>
  `;
  tbody.appendChild(tr);
}

function loadItens() {
  let itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item) => {
    inserItem(item)
  })  
}

document.addEventListener('DOMContentLoaded', () => {
  window.tbody = document.querySelector('tbody');
  loadItens();
});