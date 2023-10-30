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