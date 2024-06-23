// Dados do usuário
/* const dadosUsuario = {
  nome: "Fulano da Silva",
  email: "fulano@email.com",
  estado: "Minas Gerais",
  contato: "(31)4002-8922",
  empresa: "FulanoStore"
};
localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario)); */

const dadosArmazenados = localStorage.getItem('dadosUsuario');
const usuario = JSON.parse(dadosArmazenados);

document.getElementById('quadrado1').innerHTML = `${usuario.nome}`;
document.getElementById('quadrado2').innerHTML = `${usuario.email}`;
document.getElementById('quadrado3').innerHTML = `${usuario.estado}`;
document.getElementById('quadrado4').innerHTML = `${usuario.contato}`;

// Funções para gerenciar os itens de destino de viagens
let itens = getItensBD();

function getItensBD() {
  return JSON.parse(localStorage.getItem('destinoViagens')) ?? [];
}

function setItensBD() {
  localStorage.setItem('destinoViagens', JSON.stringify(itens));
}

function inserItem(item) {
  let tr = document.createElement('tr');
  tr.innerHTML = `
      <td></td>
      <td></td>
      <td>${item.origem || ''}</td>
      <td>${item.destino || ''}</td>
  `;
  tbody.appendChild(tr);
}

function loadItens() {
  let itens = getItensBD();
  tbody.innerHTML = '';
  itens.forEach((item) => {
      inserItem(item);
  });
}

// Função para recuperar e exibir os fretes selecionados
function loadSelectedFretes() {
  for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key.startsWith('dadosFrete_')) {
          let frete = JSON.parse(localStorage.getItem(key));
          // Verificação para garantir que todos os campos existam
          if (frete && frete.id && frete.origem && frete.destinatario && frete.tipoDeVeículo && frete.valor && frete.data) {
              let tr = document.createElement('tr');
              tr.innerHTML = `
                  <td>${frete.id || ''}</td>
                  <td>${usuario.nome || ''}</td>
                  <td>${frete.origem || ''}</td>
                  <td>${frete.destinatario || ''}</td>
                  <td>${frete.valor || ''}</td>
              `;
              tbody.appendChild(tr);
          }
      }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.tbody = document.querySelector('tbody');
  loadItens();
  loadSelectedFretes(); // Carrega os fretes selecionados na tabela
});
