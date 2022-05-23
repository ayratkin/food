function modal() {
    // Modal

    const btnShowModal = document.querySelectorAll('[data-modal]'),
        btnCloseModal = document.querySelector('[data-close]'),
        modal = document.querySelector('.modal');

    // Функция открытия модалки
    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearInterval(time);
    }

    // Функция закрытия модалки
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    // Открытие модалки при клике на кнопку
    btnShowModal.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

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

    // Срабатывание модалки после n секунд
    // const time = setTimeout(openModal, 3000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= 
            document.documentElement.scrollHeight) {
        
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    // Срабатывание модалки при прокрутке до конца страницы
    window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;