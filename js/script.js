document.addEventListener('DOMContentLoaded', () => {

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

});
