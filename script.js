let timer;
let isRunning = false;
let studyTime = 25 * 60; // Default to 25 minutes
let currentTimer = studyTime;
let isDarkMode = true;

const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const stopResetBtn = document.getElementById('stop-reset-btn');
const themeToggleInput = document.getElementById('theme-toggle');
const emoji = document.getElementById('emoji');

function updateTimerDisplay() {
    const minutes = Math.floor(currentTimer / 60);
    const seconds = currentTimer % 60;
    timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            currentTimer--;
            if (currentTimer < 0) {
                clearInterval(timer);
                notifyUser();
                resetTimer();
            } else {
                updateTimerDisplay();
            }
        }, 1000);
        isRunning = true;
        startBtn.textContent = 'Stop';
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = 'Start';
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    currentTimer = studyTime;
    updateTimerDisplay();
    startBtn.textContent = 'Start';
}

function notifyUser() {
    alert('Time is up!');
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('light-mode', !isDarkMode);
    emoji.textContent = isDarkMode ? '🌜' : '🌞'; // Change emoji based on mode
}

startBtn.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
});

stopResetBtn.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
    } else {
        resetTimer();
    }
});

themeToggleInput.addEventListener('change', toggleTheme);

updateTimerDisplay();
