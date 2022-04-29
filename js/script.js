document.addEventListener('DOMContentLoaded', () => {
    // Табы

    const tabs = document.querySelectorAll('.tabheader__item'), // Пункты табов
          tabContent = document.querySelectorAll('.tabcontent'), // Блоки табов
          tabContainer = document.querySelector('.tabheader__items');

    function hideTabContent() {

        tabContent.forEach((element) => {
            element.style.display = 'none';
        });

        tabs.forEach((element) => {
            element.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabContainer.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((element, i) => {
                if (element == target) {           
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

// Modal

const btnShowModal = document.querySelectorAll('[data-modal]'),
    btnCloseModal = document.querySelector('[data-close]'),
    modal = document.querySelector('.modal');

// Открытие модалки при клике на кнопку
btnShowModal.forEach(btn => {
    btn.addEventListener('click', openModal);
});

// Функция открытия модалки
function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Функция закрытия модалки
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Закрытие модального окна при клике на крестик внутри модалки
btnCloseModal.addEventListener('click', closeModal);

// Закрытие модального окна при клике мимо него
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Закрытие модального окна на Escape
document.addEventListener('keydown', (e) => {
    if (e.code === ('Escape')) {
        closeModal();
    }
});

});
