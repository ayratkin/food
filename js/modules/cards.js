function cards() {
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
}

module.exports = cards;