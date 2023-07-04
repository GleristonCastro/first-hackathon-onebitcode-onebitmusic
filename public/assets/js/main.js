const targetDate = new Date('2023-07-13T00:00:00Z');

function formatRemainingTime(remainingTime) {
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function updateCountdown() {
  const now = new Date().getTime();
  const remainingTime = targetDate - now;
  
  if (remainingTime > 0) {
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = formatRemainingTime(remainingTime);
  } else {
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = 'Show iniciado!'
  }
}

updateCountdown();

setInterval(updateCountdown, 1000);
