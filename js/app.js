function timer() {
    return {
        startTime: 300, // 5 minutos
        remainingTime: 300,
        isRunning: false,
        interval: null,
        inputTime: null,

        startTimer() {
            if (!this.isRunning) {
                this.isRunning = true;
                this.interval = setInterval(() => {
                    if (this.remainingTime > 0) {
                        this.remainingTime--;
                    } else {
                        this.pauseTimer();
                    }
                }, 1000);
            }
        },

        pauseTimer() {
            clearInterval(this.interval);
            this.isRunning = false;
        },

        toggleTimer() {
            if (this.isRunning) {
                this.pauseTimer();
            } else {
                this.startTimer();
            }
        },

        addTime(seconds) {
            this.remainingTime += seconds;
            if (this.remainingTime < 0) {
                this.remainingTime = 0;
            }
        },

        setTime() {
            if (this.inputTime) {
                this.startTime = this.inputTime * 60;
                this.remainingTime = this.startTime;
            }
        },

        formatTime(time) {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

document.getElementById('tutorial').addEventListener('click', function () {
    Swal.fire({
        title: "Dicas legais:",
        html: "Use <strong>Ctrl + ou Ctrl -</strong> para ajustar o tamanho da tela. \<br> Tecle F11 para usar tela cheia e ESC para sair. \<br><br> Veja mais dicas em: BJJCOMPETIDOR.COM.BR",
        icon: "info"
    });
});

document.getElementById('pix').addEventListener('click', function () {
    Swal.fire({
        html: '<img src="./img/pix/donation.jpeg">'
    });
});