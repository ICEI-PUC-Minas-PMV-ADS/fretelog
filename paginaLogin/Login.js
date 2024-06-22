// Salvar dados do usuário 'Admin' no localStorage com uma chave única
var dadosUsuarioAdmin = {
        email: 'admin@transportadora.com.br',
        senha: '12345678'
    };
    
    localStorage.setItem('dadosUsuarioAdmin', JSON.stringify(dadosUsuarioAdmin));
    
    // Função de login modificada para verificar ambas as chaves
    function login() {
        let Email = document.getElementById("email").value;
        let Senha = document.getElementById("senha").value;
        let msgErro = document.getElementById("erro");
        let validaLogin = false;
        
        // Obtém os dados do usuário 'Admin' do localStorage
        let dadosAdmin = JSON.parse(localStorage.getItem('dadosUsuarioAdmin'));
        // Obtém os dados de outros usuários do localStorage
        let dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario'));
        
        // Verifica se o email e a senha correspondem aos dados salvos para 'Admin'
        if (dadosAdmin && Email == dadosAdmin.email && Senha == dadosAdmin.senha) {
            validaLogin = true;
            // Redireciona o usuário 'Admin' para a página de transportadora
            window.location.href = "../paginaHomeTransportadora/index.html";
        } else if (dadosUsuario && Email == dadosUsuario.email && Senha == dadosUsuario.senha) {
            // Verifica se o email e a senha correspondem aos dados salvos para outros usuários
            validaLogin = true;
            // Redireciona outros usuários para a página de motorista
            window.location.href = "../paginaHomeMotorista/home1.html";
        }
        
        if (!validaLogin) {
            msgErro.setAttribute('style', 'display: block');
            msgErro.textContent = "Erro: E-mail ou senha inválidos!";
        }
    }
    /*for(let i in dadosUsuario){
            if(Email == dadosUsuario[i].email && Senha == dadosUsuario[i].senha){
                    validaLogin = true;
                    break;
            }else{
                    validaLogin = false;
            }
    }

    if(validaLogin == true){
            alert('Deu bom')
    }else{
            alert('Deu ruim')
    }*/

/*dadosUsuario.forEach(item=> {
    if (usuario == item.email && Senha == item.senha) {
            userValid = {
                    nome: item.usuario,
                    Email: item.email,
                    senha: item.senha
            }
    }else if(usuario == empresa.cnpj && senha == empresa.senha){
    location.href = "HomeEmpresa.html"
    }else{
    
    }
});

console.log(userValid)*/