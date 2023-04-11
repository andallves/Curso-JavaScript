const clock = () => {
  const getDataSeconds = (seconds) => {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const p = document.querySelector('p');

  let seconds = 0;
  let timer;

  const startTimer = () => {
    timer = setInterval(() => {
      seconds++;
      p.innerHTML = getDataSeconds(seconds);
    }, 1000);
  }

  document.addEventListener('click', (e) => {
    const element = e.target;

    if (element.classList.contains('start')) {
      p.classList.remove('paused');
      clearInterval(timer);
      startTimer();
    }

    if (element.classList.contains('pause')) {
      p.classList.add('paused');
      clearInterval(timer);
    }

    if (element.classList.contains('restart')) {
      clearInterval(timer);
      seconds = 0;
      p.innerHTML = getDataSeconds(seconds);
      p.classList.remove('paused');
    }
  });
}

clock();







