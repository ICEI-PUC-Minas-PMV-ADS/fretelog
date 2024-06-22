document.addEventListener('DOMContentLoaded', function() {
    // Carrega os dados do localStorage
    var dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario')) || {};
  
    // Preenche os campos do formulário com os dados do usuário
    document.getElementById('email').value = dadosUsuario.email || '';
    document.getElementById('nome').value = dadosUsuario.nome || '';
    document.getElementById('senha').value = dadosUsuario.senha || '';
    document.getElementById('confirmSenha').value = dadosUsuario.senha || '';
    document.getElementById('tel').value = dadosUsuario.tel || '';
    document.getElementById('antt').value = dadosUsuario.antt || '';
    document.getElementById('endereco').value = dadosUsuario.endereco || ''; 
    document.getElementById('cpf').value = dadosUsuario.cpf || '';
    document.getElementById('placaVeiculo').value = dadosUsuario.placaVeiculo || '';
    document.getElementById('tipoVeiculo').value = dadosUsuario.tipoVeiculo || '';
    document.getElementById('autorizacaoDados').checked = dadosUsuario.autorizacaoDados || false;
  
    // Manipulação do formulário de edição
    document.getElementById('editProfileForm').addEventListener('submit', function(e) {
      e.preventDefault();
  
      // Obter os valores dos campos do formulário
      var email = document.getElementById('email').value;
      var nome = document.getElementById('nome').value;
      var senha = document.getElementById('senha').value;
      var confirmSenha = document.getElementById('confirmSenha').value;
      var tel = document.getElementById('tel').value;
      var antt = document.getElementById('antt').value;
      var endereco = document.getElementById('endereco').value;     
      var cpf = document.getElementById('cpf').value;
      var placaVeiculo = document.getElementById('placaVeiculo').value;
      var tipoVeiculo = document.getElementById('tipoVeiculo').value;
      var autorizacaoDados = document.getElementById('autorizacaoDados').checked;
  
      // Validação da confirmação de senha
      if (senha !== confirmSenha) {
        alert('As senhas não correspondem.');
        return false;
      }
  
      // Atualiza os dados do usuário no localStorage
      dadosUsuario = {
        email: email,
        nome: nome,
        senha: senha,
        tel: tel,
        antt: antt,
        endereco: endereco,
        cpf: cpf,
        placaVeiculo: placaVeiculo,
        tipoVeiculo: tipoVeiculo,
        autorizacaoDados: autorizacaoDados
      };
      localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));
  
      // Exibe mensagem de sucesso e redireciona para a página inicial do motorista
      alert('Perfil atualizado com sucesso!');
      window.location.href = '../paginaHomeMotorista/home1.html';
    });
  });