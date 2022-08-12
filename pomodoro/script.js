//Chamando items e Criando Variáveis

var timer = document.getElementById('timer')
var pomodoro = document.getElementById('pomodoro')
var pausa = document.getElementById('pausa')
var longa = document.getElementById('longa')
var audio = document.querySelector('audio')
sec = 0
cont = 0
pomodoro.value = 1
pausa.value = 1
longa.value = 1
estudo = pomodoro.value
descanso = pausa.value
descansoL = longa.value
interval
interval2
interval3

//Função que inicia a contagem de POMODORO

function iniciar(){
    if (pomodoro.value.length == 0 || pausa.value.length == 0 || longa.value.length == 0){
        alert('Complete todos os campos de texto')
    }else{
        interval = setInterval(time, 100)
        time()
    }
}

//Função que pausa o POMODORO

function pausar(){
    clearInterval(interval)
}

//Função que dá inicio a opção de REINICIAR

function reiniciar(){
    timer.innerHTML = '00:00'
    sec = 0
    pomodoro.value = estudo
    pausa.value = descanso
    longa.value = descansoL
    clearInterval(interval)
    clearInterval(interval2)
    clearInterval(interval3)
}

//Função que da utilidade a Função INICIAR

function time(){
    var timer = document.getElementById('timer')


    timer.innerHTML = zero(pomodoro.value)+':'+zero(sec)
    sec--
    if (sec == -1){
        sec = 59
        pomodoro.value--
            if (pomodoro.value == -1 && sec == 59){
                sec = 0
                pomodoro.value = estudo
                cont++
                if(cont == 4){
                    clearInterval(interval)
                    interval3 = setInterval(time3, 100)
                    audio.play()
                    cont = 0
                }else{
                    clearInterval(interval)
                    pomodoro.value = estudo
                    interval2 = setInterval(time2, 100)
                    audio.play()
                }
                
            }
        }
    }

//Função que dá inicio ao contador da PAUSA

function time2(){
    timer.innerHTML = zero(pausa.value)+':'+zero(sec)

    sec--
    if (sec == -1){
        sec = 59
        pausa.value--
        if (pausa.value == -1 && sec == 59){
            clearInterval(interval2)
            sec = 0
            pausa.value = descanso
            interval = setInterval(time, 100)
            audio.play()
        }
    }  
}

//Função que dá inicio ao contador da PAUSA LONGA

function time3(){
    timer.innerHTML = zero(longa.value)+':'+zero(sec)

    sec--
    if (sec == -1){
        sec = 59
        longa.value--
        if (longa.value == -1 && sec == 59){
            clearInterval(interval3)
            sec = 0
            longa.value = descansoL
            interval = setInterval(time, 100)
            audio.play()
        }

    }
}

//Função que bota um zero a esquerda dos números no contador

function zero(n){
    if (n < 10){
        return '0'+n
    }else{
        return n
    }
}