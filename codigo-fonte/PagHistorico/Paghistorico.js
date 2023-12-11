let titulo = document.querySelector("h1");
        titulo.innerHTML = "Ingressos";
        titulo.onmouseenter = function() {
            titulo.style.color="#FAB638";
    };
        titulo.onmouseleave = function() {
            titulo.style.color="#5176A2";
        };

document.addEventListener('DOMContentLoaded', function () {
    // Código a ser executado após o carregamento da página

    // Seletor para o botão de pesquisa
    const searchButton = document.querySelector('.botao[type="submit"]');

    // Seletor para o campo de pesquisa
    const searchInput = document.querySelector('.inp[type="search"]');

    // Evento de clique no botão de pesquisa
    searchButton.addEventListener('click', function (event) {
        event.preventDefault(); // Impede que o formulário seja enviado
        const searchTerm = searchInput.value;
        if (searchTerm) {
            // Execute a ação desejada com o termo de pesquisa, por exemplo, redirecione para uma página de resultados.
            alert('Você pesquisou por: ' + searchTerm);
        } else {
            alert('Digite um termo de pesquisa válido.');
        }
    });
})

function mostrarFormulario() {
            var form = document.getElementById("feedbackForm");
            form.style.display = "block";
        }

        function enviarFeedback() {
            var feedback = document.getElementById("feedbackText").value;
            alert("Feedback enviado: " + feedback);

            // Você pode adicionar código adicional aqui para processar o feedback, como enviá-lo para o servidor.
            
            // Para este exemplo, apenas ocultaremos o formulário novamente.
            var form = document.getElementById("feedbackForm");
            form.style.display = "none";
        }

function imprimeingresso(){
	var conteudo = document.getElementById('imprimir').innerHTML;
	tela_impressao = window.open('about:blank');
	tela_impressao.document.write(conteudo);
	tela_impressao.window.print();
	ela_impressao.window.close();
}
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})