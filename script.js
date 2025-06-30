document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    const key = item.getAttribute('data-item');
    document.getElementById('modal-' + key).style.display = 'flex';
  });
});

document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.getAttribute('data-close');
    document.getElementById('modal-' + key).style.display = 'none';
  });
});

window.addEventListener('click', e => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener('click', (e) => {
    const isClickInsideNav = navLinks.contains(e.target) || hamburger.contains(e.target);
    if (!isClickInsideNav) {
      navLinks.classList.remove('show');
    }
  });

  const navLinksList = document.querySelectorAll('.nav-links li a');

navLinksList.forEach(link => {
  link.addEventListener('click', () => {
    // Fecha o menu mobile se estiver aberto
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });
});

  

 

  
