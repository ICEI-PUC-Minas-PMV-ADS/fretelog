// Dados do usuário
var usuario = {
    nome: 'Teste',
    email: 'teste@teste.com.br'
};

// Salva os dados do usuário no localStorage
localStorage.setItem('usuario', JSON.stringify(usuario));

// Carrega os dados do usuário do localStorage
var usuario = JSON.parse(localStorage.getItem('usuario'));

console.log(usuario.nome);  // Imprime o nome do usuário
console.log(usuario.email); // Imprime o e-mail do usuário
