function add() {
    var number = document.getElementById('num')

    if (number.value.length == 0 || Number(number.value) < 1 || Number(number.value) > 100) {
        window.alert('[ERRO] Dados inválidos!')
    } else {
        var space = document.getElementById('top')
        
        if (space.childElementCount <= 3) {
            space.innerHTML += `<p><select id="selectNumbers"></select></p>
            <p><input type="button" value="confirmar" name="btn" id="btn" onclick="confirm"></p>`
        }

        var spaceNumber = document.getElementById('selectNumbers')
        var addNumber = document.createElement('option')
        var array = []
        array.push(Number(number.value))
        addNumber.innerHTML = `O número ${Number(number.value)} foi adicionado`
        spaceNumber.appendChild(addNumber);
        spaceNumber.size += 1
    }
}



function confirm() {

}