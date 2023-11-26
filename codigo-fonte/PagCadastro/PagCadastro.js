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

function submitForms() {
    var camposObrigatorios = document.querySelectorAll('[required]');

    for (var i = 0; i < camposObrigatorios.length; i++) {
        if (!camposObrigatorios[i].value) {
            alert("Preencha todos os campos obrigatórios.");
            return false;
        }
    }
    alert('Cadastro realizado com sucesso.');
    window.location.href = 'caminho/pagina';
}