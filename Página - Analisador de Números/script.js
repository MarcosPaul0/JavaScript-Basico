var array = []

function biggerNum(array) {
    var bigNum
    for (var i = 0; i < array.length; i++) {
        if (i == 0) {
            bigNum = array[i];
        } else {
            if (bigNum < array[i]) {
                bigNum = array[i]
            }
        }
    }

    return bigNum
}

function smallerNum(array) {
    var smallNum
    for (var i = 0; i < array.length; i++) {
        if (i == 0) {
            smallNum = array[i];
        } else {
            if (smallNum > array[i]) {
                smallNum = array[i]
            }
        }
    }

    return smallNum
}

function sumNum(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

function meanNum(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    var mean = sum / array.length
    return mean
}

function add() {
    var number = document.getElementById('num')

    if (number.value.length == 0 || Number(number.value) < 1 || Number(number.value) > 100) {
        window.alert('[ERRO] Dados inválidos!')
    } else {
        var space = document.getElementById('top')
        
        if (space.childElementCount <= 3) {
            space.innerHTML += `<p><select id="selectNumbers"></select></p>
            <p><input type="button" value="confirmar" name="btnC" id="btn" onclick="confirm()"></p>`
        }
        var spaceNumber = document.getElementById('selectNumbers')
        var addNumber = document.createElement('option')
        array.push(Number(number.value))
        addNumber.innerHTML = `O número ${Number(number.value)} foi adicionado`
        spaceNumber.appendChild(addNumber);
        spaceNumber.size += 1

        
    }
}

function confirm() {
    var text = document.getElementById('down')

    text.innerHTML = `<p>O número de valores digitados foi ${array.length}</p>
    <p>O maior número informado foi ${biggerNum(array)}</p>
    <p>O menor número informado foi ${smallerNum(array)}</p>
    <p>A soma de todos os valores é ${sumNum(array)}</p>
    <p>A média dos valores é de ${meanNum(array)}</p>`
}