document.addEventListener('DOMContentLoaded', (event) => {
    var dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario'));
    
    // Verifica se o usertype do conjunto de dados é 'Motorista'
    if(dadosUsuario && dadosUsuario.usertype === 'Motorista') {
        // Exibe o nome e o e-mail nos elementos correspondentes
        document.getElementById('nomeUsuario').textContent = dadosUsuario.nome;
        document.getElementById('emailUsuario').textContent = dadosUsuario.email;
        // Você pode adicionar mais elementos ou lógica aqui para exibir outros dados ou realizar outras ações
    }
});;


function logout() {
    // Aqui você pode adicionar o código necessário para encerrar a sessão do usuário
    window.location.href = '../paginaInicial/index.html'; // Redireciona o usuário para a página de login
}
