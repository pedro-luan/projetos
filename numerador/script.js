var numero = document.getElementById('materia-prima')
seg = 0

function retirar(){
    var numero = document.getElementById('materia-prima')
    seg--
    numero.innerHTML = seg
    if (seg < 0){
        numero.style.color = 'red'
    }
    else if (seg == 0){
        numero.style.color = 'black'
    }
}
function reiniciar(){
    seg = 0
    numero.innerHTML = '0'
    if (seg == 0){
        numero.style.color = 'black'
    }
}
function adicionar(){
    var numero = document.getElementById('materia-prima')
    seg++
    numero.innerHTML = seg
    if (seg > 0){
        numero.style.color = 'green'
    }
    else if (seg == 0){
        numero.style.color = 'black'
    }
}
