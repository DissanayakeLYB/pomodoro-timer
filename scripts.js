document.addEventListener("DOMContentLoaded", () => {
    let minutes = 25;
    let seconds = 0;
    let interval;

    const startButton = document.getElementById("start");
    const resetButton = document.getElementById("reset");

    startButton.addEventListener("click", startTimer);
    resetButton.addEventListener("click", resetTimer);

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
});
