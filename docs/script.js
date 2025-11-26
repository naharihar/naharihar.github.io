document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('#site-nav');
  const toggle = document.querySelector('.nav-toggle');
  const links = nav ? nav.querySelectorAll('.nav-link') : [];
  const sections = document.querySelectorAll('section[id]');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(section => observer.observe(section));
});

