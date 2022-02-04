document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('[data-link]')
  const sections = document.querySelectorAll('[data-section]')

  links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      sections[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        duration: 500
      })
      links.forEach(link => {
        link.classList.remove('active')
      })
      link.classList.add('active')
    })
  })
});