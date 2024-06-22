function recoverPassword() {
    var email = document.getElementById('email').value;
    if(email) {
        document.getElementById('message').textContent = 'Um e-mail de recuperação foi enviado para ' + email;
    } else {
        document.getElementById('message').textContent = 'Por favor, insira o e-mail cadastrado.';
    }
}