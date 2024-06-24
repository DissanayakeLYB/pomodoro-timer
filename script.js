let hour = 0;
    let minute = 0;
    let second = 0;
    let timerInterval;
    let isTimerRunning = false;

    function incrementHour() {
      if (!isTimerRunning) {
        hour = (hour + 1) % 24;
        updateTimer();
      }
    }

    function decrementHour() {
      if (!isTimerRunning) {
        hour = (hour - 1 + 24) % 24;
        updateTimer();
      }
    }

    function incrementMinute() {
      if (!isTimerRunning) {
        minute = (minute + 1) % 60;
        updateTimer();
      }
    }

    function decrementMinute() {
      if (!isTimerRunning) {
        minute = (minute - 1 + 60) % 60;
        updateTimer();
      }
    }

    function incrementSecond() {
      if (!isTimerRunning) {
        second = (second + 1) % 60;
        updateTimer();
      }
    }

    function decrementSecond() {
      if (!isTimerRunning) {
        second = (second - 1 + 60) % 60;
        updateTimer();
      }
    }

    function updateTimer() {
      document.getElementById("hour").textContent = String(hour).padStart(2, '0');
      document.getElementById("minute").textContent = String(minute).padStart(2, '0');
      document.getElementById("second").textContent = String(second).padStart(2, '0');
    }

    function startStopTimer() {
      if (isTimerRunning) {
        stopTimer();
        document.getElementById("startStop").textContent = "Start";
      } else {
        startTimer();
        document.getElementById("startStop").textContent = "Stop";
      }
      isTimerRunning = !isTimerRunning;
    }

    function startTimer() {
      timerInterval = setInterval(() => {
        second--;
        if (second < 0) {
          second = 59;
          minute--;
          if (minute < 0) {
            minute = 59;
            hour--;
            if (hour < 0) {
              stopTimer();
              // Add alarm sound or other functionality here
            }
          }
        }
        updateTimer();
      }, 1000);
    }

    function stopTimer() {
      clearInterval(timerInterval);
    }

    function resetTimer() {
      stopTimer();
      hour = 0;
      minute = 0;
      second = 0;
      updateTimer();
      document.getElementById("startStop").textContent = "Start";
      isTimerRunning = false;
    }

    function startTimer() {
        timerInterval = setInterval(() => {
          second--;
          if (second < 0) {
            second = 59;
            minute--;
            if (minute < 0) {
              minute = 59;
              hour--;
              if (hour < 0) {
                hour = 0;
                minute = 0;
                second = 0;
                stopTimer();
                playAlarmSound();
              }
            }
          }
          updateTimer();
        }, 1000);
      }
      
      function playAlarmSound() {
        const alarmSound = new Audio('path/to/alarm-sound.mp3');
        alarmSound.play();
      }