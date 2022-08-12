document.getElementById('tempo')
sec=0
min=0
interval


function ZeroAtras(n){
    if (n < 10){
        return '0'+n
    }else{
        return n
    }
}
function iniciar(){
    time()
    interval = setInterval(time, 10)
}
function pausar(){
    clearInterval(interval)
}
function reiniciar(){
    document.getElementById('tempo')
    sec = 0
    min = 0
    tempo.innerHTML = '00:00'
    clearInterval(interval)
}

function time(){
    document.getElementById('tempo')

    sec++
    if (sec == 100){
        sec = 0
        min++
    }
    tempo.innerHTML = ZeroAtras(min)+':'+ZeroAtras(sec)
}