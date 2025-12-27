// УБРАЛ document.addEventListener('DOMContentLoaded', function() { ... }) - 
// так как у вас в HTML стоит defer

const logo = document.getElementById('logo');
const photoPopup = document.getElementById('photoPopup');
const closeBtn = document.getElementById('closeBtn');

// При клике на логотип - показываем фото
logo.addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке
    photoPopup.classList.add('active');
});

// При клике на кнопку закрытия - скрываем фото
closeBtn.addEventListener('click', function() {
    photoPopup.classList.remove('active');
});

// Закрытие при клике на затемненный фон
photoPopup.addEventListener('click', function(event) {
    if (event.target === this) {
        this.classList.remove('active');
    }
});

// Закрытие при нажатии ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        photoPopup.classList.remove('active');
    }
});