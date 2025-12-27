const burger = document.getElementById('burger');
const menu = document.querySelector('.menu');
const modal = document.getElementById('modal');
const openButtons = document.querySelectorAll('.open-modal');
const close = document.querySelector('.close');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

openButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});