let interval;
let isTimerRunning = false;

document.getElementById('startTimer').addEventListener('click', function() {
  if (isTimerRunning) return;

  const timeInput = document.getElementById('timeInput').value;
  let timeLeft = parseInt(timeInput) * 60;

  const countdownElement = document.getElementById('countdown');
  const alarmSound = document.getElementById('alarmSound');

  countdownElement.classList.remove('finished');
  updateCountdownDisplay(timeLeft);

  document.getElementById('stopTimer').disabled = false;
  isTimerRunning = true;

  interval = setInterval(() => {
    timeLeft--;
    updateCountdownDisplay(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(interval);
      countdownElement.textContent = "Час вийшов!";
      countdownElement.classList.add('finished');
      alarmSound.play();
      document.getElementById('stopTimer').disabled = true;
      isTimerRunning = false;
    }
  }, 1000);
});

document.getElementById('stopTimer').addEventListener('click', function() {
  clearInterval(interval);
  document.getElementById('countdown').textContent = "Таймер зупинено.";
  document.getElementById('stopTimer').disabled = true; // Вимикаємо кнопку зупинки
  isTimerRunning = false;
});

function updateCountdownDisplay(timeLeft) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById('countdown').textContent = `${minutes} хвилин ${seconds} секунд залишилося`;
}
