function clicar() {
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');

    var contador = document.getElementById('sequencia');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || Number(passo.value) < 1) {
        window.alert('[ERRO] Dados Inválidos!');
    } else {
        inicio = Number(inicio.value);
        fim = Number(fim.value);
        passo = Number(passo.value);

        contador.innerHTML = 'Contando: </br>';

        if (inicio < fim) {
            for (inicio; inicio <= fim; inicio += passo) {
                contador.innerHTML += `${inicio} \u{1F449} `;
            }
        } else {
            for (inicio; inicio >= fim; inicio -= passo) {
                contador.innerHTML += `${inicio} \u{1F449} `;
            }
        }
        contador.innerHTML += '\u{1F609}';
    }
}