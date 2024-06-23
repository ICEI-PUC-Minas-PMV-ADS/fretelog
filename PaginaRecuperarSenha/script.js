function recoverPassword() {
    var email = document.getElementById('email').value;
    // Verifica se o campo de e-mail não está vazio
    if(email) {
        // Tenta recuperar os dados do usuário do localStorage
        var dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario'));
        // Verifica se dadosUsuario existe e contém o e-mail
        if(dadosUsuario && dadosUsuario.email === email) {
            document.getElementById('message').textContent = 'Um e-mail de recuperação foi enviado para ' + email;
            // Envia mensagem de recuperação para e-mail cadastrado
        } else {
            // Alerta o usuário se o e-mail não estiver cadastrado
            alert('O e-mail informado não está cadastrado.');
        }
    } else {
        document.getElementById('message').textContent = 'Por favor, insira o e-mail cadastrado.';
    }
}