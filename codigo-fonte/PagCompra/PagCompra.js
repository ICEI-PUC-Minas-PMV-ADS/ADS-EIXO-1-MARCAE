
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

var botoes = document.querySelectorAll('.quantidadeButton');

botoes.forEach(function (botao) {

    botao.addEventListener('click', function () {

        let totalX = parseFloat(document.getElementById('total1').textContent.replace(',', '.'));
        let totalY = parseFloat(document.getElementById('total2').textContent.replace(',', '.'));
        let totalZ = parseFloat(document.getElementById('total3').textContent.replace(',', '.'));
        let totalDefin = totalX + totalY + totalZ;

        document.getElementById('totalDefinitivo').textContent = totalDefin.toFixed(2).replace('.', ',');

        document.getElementById('totalIng1').textContent = totalX.toFixed(2).replace('.', ',');
        document.getElementById('totalIng2').textContent = totalY.toFixed(2).replace('.', ',');
        document.getElementById('totalIng3').textContent = totalZ.toFixed(2).replace('.', ',');
    });
});

