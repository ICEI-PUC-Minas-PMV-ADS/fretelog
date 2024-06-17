document.addEventListener('DOMContentLoaded', function() {
    var dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario'));
    if (dadosUsuario) {
        document.getElementById('email').value = dadosUsuario.email;
        document.getElementById('nome').value = dadosUsuario.nome;
        document.getElementById('senha').value = dadosUsuario.senha;
        document.getElementById('confirmSenha').value = dadosUsuario.senha; // Preenche o campo de confirmação de senha
        document.getElementById('tel').value = dadosUsuario.tel;
        document.getElementById('usertype').value = dadosUsuario.usertype;
    }

    document.getElementById('editProfileForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var senhaAtual = dadosUsuario ? dadosUsuario.senha : null;
        var novaSenha = document.getElementById('senha').value;
        var confirmNovaSenha = document.getElementById('confirmSenha').value;

        // Verifica se a nova senha e a confirmação são iguais
        if (novaSenha !== confirmNovaSenha) {
            alert('As novas senhas não correspondem.');
            return false;
        }

        // Atualiza os dados no localStorage apenas se uma nova senha for inserida
        if (novaSenha !== senhaAtual) {
            localStorage.setItem('dadosUsuario', JSON.stringify({
                email: document.getElementById('email').value,
                nome: document.getElementById('nome').value,
                senha: novaSenha, // Salva a nova senha
                tel: document.getElementById('tel').value,
                usertype: document.getElementById('usertype').value
            }));
            alert('Perfil atualizado com sucesso!');
        } else {
            // Atualiza os dados no localStorage sem alterar a senha
            localStorage.setItem('dadosUsuario', JSON.stringify({
                email: document.getElementById('email').value,
                nome: document.getElementById('nome').value,
                senha: senhaAtual, // Mantém a senha atual
                tel: document.getElementById('tel').value,
                usertype: document.getElementById('usertype').value
            }));
            alert('Informações atualizadas com sucesso!');
        }
    });
});

document.getElementById('editProfileForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // ... (seu código para atualizar os dados)

    // Após atualizar os dados com sucesso, redireciona para a página inicial do motorista
    window.location.href = '../paginaHomeMotorista/home1.html';
});

