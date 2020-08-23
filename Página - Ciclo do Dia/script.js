function carregar() {
    var relogio = document.getElementById('relogio');
    var imagem = document.getElementById('img');
    var mensagem = document.getElementById('msg');
    var fundo = document.querySelector('body');
    var display = document.querySelector('section');

    var elemento = new Date();
    var horas = elemento.getHours();
    var minutos = elemento.getMinutes();
    
    if (horas > 4 && horas < 12) {
        relogio.innerHTML = `${horas}:${minutos}`;
        imagem.src = '_imagens/manha.png';
        mensagem.innerHTML = 'Bom Dia!';
        fundo.style.background = 'yellow';
    } else if (horas >= 12 && horas < 18) {
        relogio.innerHTML = `${horas}:${minutos}`;
        imagem.src = '_imagens/tarde.png';
        mensagem.innerHTML = 'Boa Tarde!';
        fundo.style.background = 'rgb(223, 128, 51)';
    } else if (horas >= 18 || horas <= 4) {
        relogio.innerHTML = `${horas}:${minutos}`;
        imagem.src = '_imagens/noite.png';
        mensagem.innerHTML = 'Boa Noite!';
        fundo.style.background = 'black';
        fundo.style.color = 'white';
        display.style.color = 'black';
        display.style.boxShadow = '3px 3px 5px rgba(255, 255, 255, 0.527)'
    }
}