let timerStart = false
let timerSeconds = 0, timerMinutes = 0, seconds = 0, minutes = 0

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
            button.innerText = 'Stop'
            timerMinutes = (isNaN(minute.valueAsNumber) ? 0 : minute.valueAsNumber) + Math.floor(second.valueAsNumber / 60)
            timerSeconds = (isNaN(second.valueAsNumber) ? 0 : second.valueAsNumber) % 60
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

    seconds++
    if(seconds == 60) {
        minutes++
        seconds = 0
    }

    if(seconds == timerSeconds && minutes == timerMinutes) {
        window.alert('Timer ends')
        timerStart = false
        button.innerText = 'Set'
        timerMinutes = 0
        timerSeconds = 0
        minutes = 0
        seconds = 0
        timer.style.display = 'none'
        minute.value = ''
        second.value = ''
    }

    timer.innerText = `${minutes}:${seconds}`
}