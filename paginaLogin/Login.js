function login(){
        
    let Email = document.getElementById("email").value;
    let Senha = document.getElementById("senha").value;
    let msgErro = document.getElementById("erro");
    let dadosUsuario = []
    let validaLogin = false;
    
    dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario'))

    if(Email == dadosUsuario.email && Senha == dadosUsuario.senha){
            validaLogin = true;
           
    }else{
            validaLogin = false;
    }

    if(validaLogin == true){
            window.location.href = "Transportadora.html"
    }else{
            msgErro.setAttribute('style', 'display: block')
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

}

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