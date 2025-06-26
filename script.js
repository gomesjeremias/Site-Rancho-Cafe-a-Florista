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
