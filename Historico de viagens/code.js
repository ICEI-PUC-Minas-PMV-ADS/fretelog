const dadosUsuario = {
  nome: "Fulano da Silva",
  email: "fulano@email.com",
  estado: "Minas Gerais",
  contato: "(31)4002-8922",
  empresa: "FulanoStore"
};
localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));
const dadosArmazenados = localStorage.getItem('dadosUsuario');
const usuario = JSON.parse(dadosArmazenados);
const espaco1 = document.getElementById('quadrado1');
espaco1.innerHTML = `${usuario.nome}`;
const espaco2 = document.getElementById('quadrado2');
espaco2.innerHTML = `${usuario.email}`;
const espaco3 = document.getElementById('quadrado3');
espaco3.innerHTML = `${usuario.estado}`;
const espaco4 = document.getElementById('quadrado4');
espaco4.innerHTML = `${usuario.contato}`;

let itens = getItensBD();

function getItensBD() {
  return JSON.parse(localStorage.getItem('destinoViagens')) ?? [];
}

function setItensBD() {
  localStorage.setItem('destinoViagens', JSON.stringify(itens));
}

function inserItem(item) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
  <td></td>
  <td></td>
  <td>${item.origem}</td>
  <td>${item.destino}</td>
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