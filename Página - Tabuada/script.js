function confirmar() {
    var numero = document.getElementById('numero');
    var espaco = document.getElementById('tabela');
    var verificador = 0;

    if (numero.value.length == 0) {
        window.alert('[ERRO] Digite um número!');
    } else {
        var tabela = document.createElement('select');
        tabela.size = 10;
        espaco.appendChild(tabela);

        for (n = 1; n <= 10; n++) {
            var conta = document.createElement('option');
            var num = Number(numero.value);

            conta.innerText = `${num} x ${n} = ${num * n}`;
            tabela.appendChild(conta);
        }
    }

    var botoes = document.getElementById('botoes');

    if (botoes.childElementCount < 2) {
        var botao_resetar = document.createElement('input');
        botao_resetar.type = 'button';
        botao_resetar.value = 'resetar';
        botao_resetar.id = 'botaoResetar';
        botao_resetar.addEventListener('click', resetar);
        botoes.appendChild(botao_resetar);
    }
}

function resetar() {
    var tabelaEspaco = document.getElementById('tabela');
    var botoes = document.getElementById('botoes');
    
    tabelaEspaco.innerHTML = '';
    botoes.removeChild(botoes.children[1]);
}