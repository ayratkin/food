document.addEventListener('DOMContentLoaded', () => {
    // Табы

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent'),
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
const time = setTimeout(openModal, 3000);

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= 
        document.documentElement.scrollHeight) {
    
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
}

// Срабатывание модалки при прокрутке до конца страницы
window.addEventListener('scroll', showModalByScroll);

// Добавление новых карточек в ежедневное меню
class Card {
    constructor(imgSrc, imgAtlText, menuName, menuDescriptions,
                price, ...classes) {

        this.imgSrc = imgSrc;
        this.imgAtlText = imgAtlText;
        this.menuName = menuName;
        this.menuDescriptions = menuDescriptions;
        this.price = price;
        this.classes = classes;
    }

    render() {

        let container = document.querySelector('.menu__field .container');
        const card = document.createElement('div');
        
        // Добавляем карточке css класс,
        // Если он не задан, задаем дэфолтный.
        if (this.classes.length === 0) {
            this.classes.push('menu__item');

            this.classes.forEach( (defaultClass) => {
                card.classList.add(defaultClass);
            });
        } else {
            this.classes.forEach( (myClass) => {
                card.classList.add(myClass);
            } );
        }

        card.innerHTML = `
            <img src= ${this.imgSrc} alt=${this.imgAtlText}>
            <h3 class="menu__item-subtitle">${this.menuName}</h3>
            <div class="menu__item-descr">${this.menuDescriptions}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total">
                <span>${this.price}</span> грн/день</div>
            </div>
            `;

        container.append(card);
    }
}

new Card(
    'img/tabs/elite.jpg', 'some img', 'lorem', 
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel officiis porro est possimus enim ad aut voluptatibus, unde recusandae consequatur.',
    '100', 'menu__item'
    ).render();


    // Timer
    const deadline = '2023-05-09';

    function getTimeRemainig(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24) ),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
            
              updateClock();

        function updateClock() {
            const t = getTimeRemainig(endtime);

            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);



}); 

