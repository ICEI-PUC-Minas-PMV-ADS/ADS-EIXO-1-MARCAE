// Lógica para mostrar/ocultar senha
function mostrarSenha() {
    var inputPass = document.getElementById('senha');
    var btnShowPass = document.querySelector('.toggle-password');

    if (inputPass.getAttribute('type') === 'password') {
        inputPass.setAttribute('type', 'text');
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        inputPass.setAttribute('type', 'password');
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}


// validacao.js
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("Logo");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que o formulário seja enviado

        // Obter os valores dos campos
        var email = form.elements["email"].value;
        var senha = form.elements["senha"].value;

        // Simples validação (pode ser aprimorado)
        if (email.trim() === "" || senha.trim() === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            // Simulação de um login bem-sucedido
            alert("Login efetuado com sucesso!");
            // Aqui você pode redirecionar o usuário para outra página ou realizar outras ações após o login
        }
    });
});

// Lógica para mostrar o formulário de recuperação de senha
function mostrarFormRecuperarSenha() {
    document.getElementById("Logo").style.display = "none";
    document.getElementById("RecuperarSenha").style.display = "block";
}

// Lógica para enviar o código de recuperação de senha (simulado)
function enviarCodigo() {
    var emailRecuperacao = document.getElementById("emailRecuperacao").value;

    if (emailRecuperacao.trim() === "") {
        alert("Por favor, preencha o campo de e-mail.");
    } else {
        alert("Código de recuperação enviado para " + emailRecuperacao);
        // Aqui você pode implementar lógica adicional, como enviar um código por e-mail
    }
}
