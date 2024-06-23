// Seleciona os elementos do formulário pelo ID
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation"); 

// Adiciona um ouvinte de evento para lidar com o envio do formulário

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    checkForm(); // Chama a função para verificar o formulário
}) 

// Adiciona ouvintes de evento para cada campo de entrada que chamam funções de validação quando o campo perde o foco

email.addEventListener("blur", () => {
    checkInputEmail(); // Verifica o campo de e-mail
})


username.addEventListener("blur", () => {
    checkInputUsername(); // Verifica o campo de nome de usuário
})

tel.addEventListener("blur", () => {
    checkInputTel(); // Verifica o campo de telefone
})

password.addEventListener("blur", () => {
    checkInputPassword(); // Verifica o campo de senha
})

passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation(); // Verifica o campo de confirmação de senha
})


// Funções de validação para cada campo de entrada
function checkInputUsername() { 
    const usernameValue = username.value; // Obtém o valor do campo de nome de usuário

    if (usernameValue === "") {
        errorInput(username, "Preenche o nome do usuário") // Exibe erro se o campo estiver vazio
    } else {
        const formItem = username.parentElement; // Define a classe para o estado válido
        formItem.className = "form-content"
    }

}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "O email é obrigatório.")
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }

}


function checkInputTel() {
    const telValue = tel.value

    if (telValue === "") {
        errorInput(tel, "O número do celular é obrigatório.")
    } else {
        const formItem = tel.parentElement;
        formItem.className = "form-content"
    }

}

function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        errorInput(password, "A senha é obrigatória.")
    } else if (passwordValue.length < 8) {
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres.")
    } else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }


}


function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if (confirmationPasswordValue === "") {
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.")
    } else if (confirmationPasswordValue !== passwordValue) {
        errorInput(passwordConfirmation, "As senhas não são iguais.")
    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }


}

// Chama todas as funções de validação
function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputTel();
    checkInputPassword();
    checkInputPasswordConfirmation();

     // Seleciona todos os elementos do formulário com a classe 'form-content'

    const formItems = form.querySelectorAll(".form-content")

    // Verifica se todos os campos são válidos

    const isValid = [...formItems].every((item) => {
        return item.className === "form-content"
    });

    if (isValid) {
        var dadosUsuario = { 
            nome: username.value,
            email: email.value,
            tel: tel.value,
            senha: password.value
        }; 

         // Salva os dados do usuário no localStorage
        
        localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));
        
        alert("CADASTRADO COM SUCESSO!");
    
        // Limpa os campos do formulário
        username.value = '';
        email.value = '';
        tel.value = '';
        password.value = '';
        passwordConfirmation.value = '';
    }

}

// Função para exibir mensagens de erro

function errorInput(input, message) {
    const formItem = input.parentElement; // Seleciona o elemento pai do campo de entrada
    const textMessage = formItem.querySelector("a") // Seleciona o elemento que exibirá a mensagem de erro


    textMessage.innerText = message; // Define o texto da mensagem de erro

    formItem.className = "form-content error" // Altera a classe para exibir o erro

}