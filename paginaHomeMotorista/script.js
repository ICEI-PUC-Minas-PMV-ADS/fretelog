document.addEventListener('DOMContentLoaded', (event) => {
  var dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario'));
  
  // Exibe o nome e o e-mail nos elementos correspondentes
  if(dadosUsuario) {
      document.getElementById('nomeUsuario').textContent = dadosUsuario.nome;
      // Você pode adicionar mais elementos ou lógica aqui para exibir outros dados ou realizar outras ações
  }
});

function logout() {
  // Aqui você pode adicionar o código necessário para encerrar a sessão do usuário
  window.location.href = '../paginaInicial/index.html'; // Redireciona o usuário para a página de login
}

document.addEventListener('DOMContentLoaded', function() {
  // Carregar dados do usuário do localStorage
  var dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario'));

  // Exibe o nome nos elementos correspondentes
  if (dadosUsuario) {
      document.getElementById('nomeUsuario').textContent = dadosUsuario.nome;
  } else {
      // Redireciona para a página inicial se não houver dados do usuário
      window.location.href = '../paginaInicial/index.html';
  }
});
  
  
  document.addEventListener('DOMContentLoaded', function() {
    // Dados de exemplo de fretes
    const fretesExemplo = [
        { id: 'frete1', origem: 'Betim-MG', destinatario: 'Guarulhos-SP', tipoDeVeículo: '3/4', valor: ' R$ 1.800,00', data: '25-06-24' },
        { id: 'frete2', origem: 'Betim-MG', destinatario: 'São Paulo-SP', tipoDeVeículo: 'Truck', valor: 'R$ 2.200,00', data:'25-06-24' },
        { id: 'frete3', origem: 'Betim-MG', destinatario: 'Osasco-SP', tipoDeVeículo: 'Truck', valor: 'R$ 2.500,00', data: '25-06-24'}, 
        { id: 'frete4', origem: 'Betim-MG', destinatario: 'Osasco-SP', tipoDeVeículo: 'Carreta', valor: 'R$ 4.000,00', data: '25-06-24'}, 
        { id: 'frete5', origem: 'Guarulhos-SP', destinatario: 'Betim-MG', tipoDeVeículo: 'Carreta', valor: 'R$ 4.500,00', data: '25-06-24'}, 
    ];
  
    // Função para carregar fretes do local storage ou inicializar com os dados de exemplo
    function carregarFretes() {
        let fretes = localStorage.getItem('fretes');
        if (!fretes) {
            localStorage.setItem('fretes', JSON.stringify(fretesExemplo));
            fretes = fretesExemplo;
        } else {
            fretes = JSON.parse(fretes);
        }
        return fretes;
    }
  
    // Função para renderizar a tabela de fretes
    function renderizarTabela(fretes) {
        const tbody = document.querySelector('#freteTable tbody');
        tbody.innerHTML = ''; // Limpa a tabela antes de adicionar os fretes
        fretes.forEach(frete => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${frete.id}</td>
                <td>${frete.origem}</td>
                <td>${frete.destinatario}</td>
                <td>${frete.tipoDeVeículo}</td>
                <td>${frete.valor}</td>
                <td>${frete.data}</td> 
                <td><input type="checkbox" name="select" value="${frete.id}" onclick="selecionarFrete(this)"></td>
            `;
            tbody.appendChild(row);
        });
    }
  
    // Carregar e renderizar os fretes
    const fretes = carregarFretes();
    renderizarTabela(fretes);
  });
   
  window.selecionarFrete = function(checkbox) {
    if (checkbox.checked) {
        // Recupera os dados do usuário do localStorage
        let dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario'));
        
        // Salva os dados do usuário em uma nova chave com o ID do frete escolhido
        localStorage.setItem('dadosFrete_' + checkbox.value, JSON.stringify(dadosUsuario));
        
        // Oculta a linha da tabela correspondente ao frete selecionado
        checkbox.closest('tr').style.display = 'none';
        
        alert('Coleta agendada! Favor aguardar contato da transportadora.');
    }
}
  