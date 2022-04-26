// Модальное окно

const btnShowModal = document.querySelector('.btn_white'),
      btnCloseModal = document.querySelector('.modal__close'),
      modal = document.querySelector('.modal');

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

btnShowModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
