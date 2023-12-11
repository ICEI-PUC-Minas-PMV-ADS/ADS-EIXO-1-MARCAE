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

function adicionarLinha() {
    var tabela = document.getElementById('ticketsTable');
    var novaLinha = tabela.insertRow();

    for (var i = 0; i < 7; i++) {
        var novaCelula = novaLinha.insertCell(i);

        if (i === 1) {
            novaCelula.innerHTML = '<select name="tipoIngresso"><option value=" ">Tipo</option><option value="Meia">Meia entrada</option><option value="Inteira">Inteira</option></select>';
        } else if (i === 4) {
            novaCelula.innerHTML = '<input type="datetime-local" class="form-control" name="eventStartDate"><br><input type="datetime-local" class="form-control" name="eventEndDate">';
        } else if (i === 5) {
            novaCelula.innerHTML = '<select name="visibility"><option value=" ">Indique a Visibilidade do evento</option><option value="maça">Privado</option><option value="goiaba">Público</option></select>';
        } else if (i === 3) {
            novaCelula.innerHTML = '<b>R$</b> <input type="number" min="0.00" step="0.01" name="ticketPrice" placeholder="Preço" />';
        } else if (i === 2) {
            novaCelula.innerHTML = '<input type="number" name="ticketQtd" placeholder="Quantidade" />';
        } else if (i === 6) {
            novaCelula.innerHTML = '<button type="button" class="btn" id="buttonRemove" onclick="removerLinha(this)">-</button>';
        } else if (i === 0){
            novaCelula.innerHTML = '<input type="text" name="ticketName" value="" placeholder="Nome">';
        }
    }
}

function removerLinha(botao) {
    var linha = botao.parentNode.parentNode;

    linha.parentNode.removeChild(linha);
}

function validarArquivos() {
    var inputArquivo = document.getElementById('formFileMultiple');

    var tamanhoMaximo = 2000000;
    for (var i = 0; i < inputArquivo.files.length; i++) {
        if (inputArquivo.files[i].size > tamanhoMaximo) {
            alert("O tamanho do arquivo '" + inputArquivo.files[i].name + "' excede o limite permitido (2MB).");
            inputArquivo.value = '';
            return;
        }
    }

    alert("Arquivo(s) válido(s).");
}