const targetDate = new Date('2023-07-17T00:00:00Z');

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

window.addEventListener('scroll', function() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 0);
});

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 5
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})