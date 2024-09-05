let timerInterval1;
let timerInterval2;
let secondsRemaining1 = 20;
let secondsRemaining2 = 20;
let isRunning1 = false;
let isRunning2 = false;

function startTimer1() {
    timerInterval1 = setInterval(() => {
        secondsRemaining1--;
        if (secondsRemaining1 >= 0) {
            document.getElementById("timer1").textContent = formatTime(secondsRemaining1);
        } else {
            clearInterval(timerInterval1);
            document.getElementById("timer1").textContent = "00:00";
        }
    }, 1000);
}

function stopTimer1() {
    clearInterval(timerInterval1);
    isRunning1 = false;
}

function startTimer2() {
    timerInterval2 = setInterval(() => {
        secondsRemaining2--;
        if (secondsRemaining2 >= 0) {
            document.getElementById("timer2").textContent = formatTime(secondsRemaining2);
        } else {
            clearInterval(timerInterval2);
            document.getElementById("timer2").textContent = "00:00";
        }
    }, 1000);
}

function stopTimer2() {
    clearInterval(timerInterval2);
    isRunning2 = false;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

document.getElementById("startStopButton1").addEventListener("click", function () {
    if (isRunning1) {
        stopTimer1();
        secondsRemaining1 = 20;
        document.getElementById("timer1").textContent = formatTime(secondsRemaining1);
        document.getElementById("startStopButton1").textContent = "INICIAR";
    } else {
        startTimer1();
        isRunning1 = true;
        document.getElementById("startStopButton1").textContent = "PARAR";
    }
});

document.getElementById("startStopButton2").addEventListener("click", function () {
    if (isRunning2) {
        stopTimer2();
        secondsRemaining2 = 20;
        document.getElementById("timer2").textContent = formatTime(secondsRemaining2);
        document.getElementById("startStopButton2").textContent = "INICIAR";
    } else {
        startTimer2();
        isRunning2 = true;
        document.getElementById("startStopButton2").textContent = "PARAR";
    }
});