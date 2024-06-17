function login() {
    let Email = document.getElementById("email").value;
    let Senha = document.getElementById("senha").value;
    let msgErro = document.getElementById("erro");
    let validaLogin = false;
    
    // Obtém os dados do usuário do localStorage
    let dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario'));
    
    // Verifica se o email e a senha correspondem aos dados salvos
    if (dadosUsuario && Email == dadosUsuario.email && Senha == dadosUsuario.senha) {
        validaLogin = true;
    }
    
        if (validaLogin) {
            if (dadosUsuario.usertype == "Motorista") {
                window.location.href = "../paginaHomeMotorista/home1.html";
            } else if (dadosUsuario.usertype == "Transportador") {
                window.location.href = "../paginaHomeTransportadora/index.html";
            }
        } else {
            msgErro.setAttribute('style', 'display: block');
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