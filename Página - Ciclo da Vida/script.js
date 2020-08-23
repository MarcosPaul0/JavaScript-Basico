function confirmar() {
    var ano_nascimento = Number((document.getElementById('ano')).value);
    var sexo = (String((document.querySelector('input#sexo')).value)).toUpperCase()[0];
    var mensagem = document.getElementById('mensagem');
    var imagem = document.getElementById('img');

    var agora = new Date();
    var ano = agora.getFullYear();
    var idade = ano - ano_nascimento;

    if (sexo.length == 0 || sexo != 'M' && sexo != 'F') {
        window.alert('[ERRO] Sexo inválido');
    }

    if (idade < 0) {
        imagem.src = '_imagens/nemnasceu.png';
        mensagem.innerHTML = 'Você nem nasceu ainda!';
    } else if (idade >= 0 && idade < 6) {
        imagem.src = '_imagens/bebe.png';
        mensagem.innerHTML = 'Você é um bebê fofinho!';
    } else if (idade >= 6 && idade < 12) {
        if (sexo == 'M') {
            imagem.src = '_imagens/menino.png';
            mensagem.innerHTML = `Você é um menino de ${idade} anos!`;
        } else if (sexo == 'F') {
            imagem.src = '_imagens/menina.png';
            mensagem.innerHTML = `Você é uma menina de ${idade} anos!`;
        }
    } else if (idade >= 12 && idade < 18) {
        if (sexo == 'M') {
            imagem.src = '_imagens/adolescente.png';
            mensagem.innerHTML = `Você é um adolescente de ${idade} anos!`;
        } else if (sexo == 'F') {
            imagem.src = '_imagens/adolescenta.png';
            mensagem.innerHTML = `Você é uma adolescente de ${idade} anos!`;
        }
    } else if (idade >= 18 && idade < 60) {
        if (sexo == 'M') {
            imagem.src = '_imagens/adulto.png';
            mensagem.innerHTML = `Você é um adulto de ${idade} anos!`;
        } else if (sexo == 'F') {
            imagem.src = '_imagens/adulta.png';
            mensagem.innerHTML = `Você é uma adulta de ${idade} anos!`;
        }
    } else if (idade >= 60) {
        if (sexo == 'M') {
            imagem.src = '_imagens/idoso.png';
            mensagem.innerHTML = `Você é um idoso de ${idade} anos!`;
        } else if (sexo == 'F') {
            imagem.src = '_imagens/idosa.png';
            mensagem.innerHTML = `Você é uma idosa de ${idade} anos!`;
        }
    }
}