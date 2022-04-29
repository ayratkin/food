// Модальное окно

const btnShowModal = document.querySelector('.btn_white'),
      btnCloseModal = document.querySelector('.modal__close'),
      modal = document.querySelector('.modal');


btnShowModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

btnCloseModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
