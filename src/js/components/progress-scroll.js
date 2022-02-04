document.addEventListener("DOMContentLoaded", () => {
  const progress = document.querySelector('[data-progress]')
  const progressValue = document.querySelector('[data-progress-value]')
  const progressFilling = document.querySelector('[data-progress-filling]')
  const wrapper = document.querySelector('[data-wrapper]')

  const writeProgress = () => {
    let count = Math.round(pageYOffset * 100 / (document.body.scrollHeight - window.innerHeight));
    let deg = count * 3.6;
    progressValue.innerText = count + '%';
    progressFilling.style.transform = `rotate(${deg}deg)`;
    if (count >= 50) {
      progress.classList.add('right')
    } else {
      progress.classList.remove('right')
    }
    if (count == 100) {
      progress.classList.add('up')
    } else {
      progress.classList.remove('up')
    }
  }

  progress.addEventListener('click', () => {
    if (progress.classList.contains('up')) {
      wrapper.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        duration: 500
      })
    }
  })

  window.addEventListener('scroll', writeProgress);
  window.addEventListener('resize', writeProgress);
  writeProgress();
});