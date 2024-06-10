document.addEventListener('DOMContentLoaded', function() {
    const chatIcon = document.querySelector('.icon');
    const chatContainer = document.getElementById('aba');
    const closeChatButton = document.getElementById('fechar');
    const chatMessages = document.getElementById('chat-messages');
    const loginQuestionButton = document.getElementById('login-question');
    const signupQuestionButton = document.getElementById('signup-question');
    const outros = document.getElementById('others-question');

    chatIcon.addEventListener('click', function() {
        chatContainer.classList.toggle('oculto');
        chatContainer.classList.toggle('visivel');
    });

    closeChatButton.addEventListener('click', function() {
        chatContainer.classList.toggle('oculto');
        chatContainer.classList.remove('visivel');
    });

    loginQuestionButton.addEventListener('click', function() {
        addMessage('Como fazer login?', 'sent-message');
        addMessage('Clique no botão de login.', 'received-message');
    });

    signupQuestionButton.addEventListener('click', function() {
        addMessage('Como cadastrar?', 'sent-message');
        addMessage('Clique no botão de cadastro.', 'received-message');
    });

    outros.addEventListener('click', function() {
        addMessage('Outros', 'sent-message');
        addMessage('Entre em contato com a gente (31)4002-8922.', 'received-message');
    });

    function addMessage(text, className) {
        const messageElement = document.createElement('div');
        messageElement.className = className;
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});