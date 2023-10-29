
function incremento(type) {
    let preco = parseFloat(document.getElementById(`preco${type}`).textContent.replace(',', '.'));
    let quantidade = parseInt(document.getElementById(`quantidade${type}`).textContent);

    quantidade++;
    document.getElementById(`quantidade${type}`).textContent = quantidade;

    let total = preco * quantidade;
    document.getElementById(`total${type}`).textContent = total.toFixed(2).replace('.', ',');
}

function decremento(type) {
    let preco = parseFloat(document.getElementById(`preco${type}`).textContent.replace(',', '.'));
    let quantidade = parseInt(document.getElementById(`quantidade${type}`).textContent);

    if (quantidade > 0) {
        quantidade--;
        document.getElementById(`quantidade${type}`).textContent = quantidade;

        let total = preco * quantidade;
        document.getElementById(`total${type}`).textContent = total.toFixed(2).replace('.', ',');
    }
}

