function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 50) nav.classList.add('active-header');
  else nav.classList.remove('active-header');
}

// evento adicionado ao iniciar o scroll...
window.addEventListener('scroll', scrollHeader);