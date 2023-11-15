const wrapper = document.createElement('div');
wrapper.setAttribute('id', 'stopwatch-wrapper');
document.body.appendChild(wrapper);

const timer = document.createElement('p');
timer.setAttribute('id', 'timer');
document.getElementById('stopwatch-wrapper').appendChild(timer);

const minutesDisplay = document.createElement('span');
minutesDisplay.setAttribute('id', 'minutes-display');
minutesDisplay.innerText = '00';
document.getElementById('timer').appendChild(minutesDisplay);

const divider1 = document.createElement('span');
divider1.innerText = ':';
document.getElementById('timer').appendChild(divider1);

const secondsDisplay = document.createElement('span');
secondsDisplay.setAttribute('id', 'seconds-display');
secondsDisplay.innerText = '00';
document.getElementById('timer').appendChild(secondsDisplay);

const divider2 = document.createElement('span');
divider2.innerText = ':';
document.getElementById('timer').appendChild(divider2);

const tensDisplay = document.createElement('span');
tensDisplay.setAttribute('id', 'tens-display');
tensDisplay.innerText = '0';
document.getElementById('timer').appendChild(tensDisplay);

const btnStart = document.createElement('button');
btnStart.setAttribute('id', 'start');
btnStart.innerText = 'start';
document.getElementById('stopwatch-wrapper').appendChild(btnStart);

const btnStop = document.createElement('button');
btnStop.setAttribute('id', 'stop');
btnStop.innerText = 'stop';
document.getElementById('stopwatch-wrapper').appendChild(btnStop);

const btnReset = document.createElement('button');
btnReset.setAttribute('id', 'reset');
btnReset.innerText = 'reset';
document.getElementById('stopwatch-wrapper').appendChild(btnReset);

let minutes = 0;
let seconds = 0;
let tens = 0;
let interval;

btnStart.addEventListener('click', (e) => {
    clearInterval(interval);
    interval = setInterval(startTimer, 1_00);
    btnStart.innerText = 'start';
    btnStart.classList.add('clicked');

});

btnStop.addEventListener('click', (e) => {
    clearInterval(interval);
    if (btnStart.classList.contains('clicked')) {
        btnStart.innerText = 'wznów';
    }
    btnStart.classList.remove('clicked');
});

btnReset.addEventListener('click', (e) => {
    clearInterval(interval);
    minutes = '00';
    seconds = '00';
    tens = '0';

    minutesDisplay.innerText = minutes;
    secondsDisplay.innerText = seconds;
    tensDisplay.innerText = tens;

    btnStart.innerText = 'start';

});

const startTimer = () => {
    tens++;

    if (tens <= 9) {
        tensDisplay.innerText = tens;
    }

    if (tens > 9) {
        tensDisplay.innerText = tens;

        seconds++;
        secondsDisplay.innerText = '0' + seconds;
        tens = 0;
        tensDisplay.innerText = 0;
    }

    if (seconds <= 9) {
        secondsDisplay.innerText = '0' + seconds;
    }

    if (seconds > 9) {
        secondsDisplay.innerText = seconds;
    }

    if (seconds > 59) {
        minutes++;
        minutesDisplay.innerText = '0' + minutes;
        seconds = 0;
        secondsDisplay.innerText = '0' + 0;
    }

    if (minutes > 9) {
        minutesDisplay.innerText = minutes;
    }

};
