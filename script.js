let timerStart = false
let seconds = 0, minutes = 0

const minute = document.querySelector('#minute')
const second = document.querySelector('#second')
const button = document.querySelector('button')
const timer = document.querySelector('#timer-display')

button.onclick = () => {
    if(timerStart) {
        button.innerText = 'Set'
        timer.style.display = 'none'
        minute.value = ''
        second.value = ''
        timerMinutes = 0
        timerSeconds = 0
        minutes = 0
        seconds = 0
    }else {
        if(minute.valueAsNumber || second.valueAsNumber) {
            if(minute.valueAsNumber < 0 || second.valueAsNumber < 0) {
                return
            }

            button.innerText = 'Stop'
            minutes = (isNaN(minute.valueAsNumber) ? 0 : minute.valueAsNumber) + Math.floor((isNaN(second.valueAsNumber) ? 0 : second.valueAsNumber) / 60)
            seconds = (isNaN(second.valueAsNumber) ? 0 : second.valueAsNumber) % 60
            timer.style.display = ''
        }else {
            timerStart = true;
        }
    }
    timerStart = !timerStart
}

setInterval(timerRun, 1000)

function timerRun() {
    if(!timerStart) {
        return
    }

    if(seconds > 0) {
        seconds--
    }else {
        if(minutes > 0) {
            seconds = 59
            minutes-- 
        }
    }

    if(seconds == 0 && minutes == 0) {
        window.alert('Timer ends')
        timerStart = false
        button.innerText = 'Set'
        minutes = 0
        seconds = 0
        timer.style.display = 'none'
        minute.value = ''
        second.value = ''
    }

    timer.innerText = `${minutes}:${Math.floor(seconds / 10) > 0 ? seconds : `0${seconds}`}`
}