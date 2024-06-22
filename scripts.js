let minutes = 25;
let seconds = 0;
let interval;

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

function updateDisplay() {
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(interval);
                alert("Time's up!");
                return;
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
        updateDisplay();
    }, 1000);
}

function resetTimer() {
    clearInterval(interval);
    minutes = 25;
    seconds = 0;
    updateDisplay();
}

updateDisplay();
