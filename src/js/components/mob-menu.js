document.addEventListener("DOMContentLoaded", () => {
  const burger = document?.querySelector('[data-burger]');
  const nav = document?.querySelector('[data-nav]');
  const navItems = nav?.querySelectorAll('[data-link]');
  const body = document.body;

  burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger?.classList.toggle('active');
    nav?.classList.toggle('visible');
  })

  navItems.forEach(el => {
    el.addEventListener('click', () => {
      body.classList.remove('stop-scroll');
      burger?.classList.remove('active');
      nav?.classList.remove('visible');
    })
  })
})