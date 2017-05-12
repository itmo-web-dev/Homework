(function () {
    'use strict';
    /*2. Создать объект «Товар» включающий:
    - свойства, такие как фото, артикул, описание и т.п.;
    - метод, которому при вызове передается id пустого div элемента и в этот html элемент данный 
    метод создаст и внесёт все необходимые html элементы, стили, и содержание для отображения 
    всей информации хранящихся в свойствах объекта о данном товаре. Дизайн оформления информации 
    в html о товаре – это ваше творчество. */
    var good = {
        name: 'Balalaika',
        photo: "Balalaika.png",
        description: 'Ну же - купи балалайку, стань русским!',
        price: '9 990',
        output: function(id) {
            var tag = document.getElementById(id);
            var photoContainer = document.createElement('div');
            photoContainer.classList.add('imageOfGood');
            tag.appendChild(photoContainer);
            var imgOfGood = document.createElement('img');
            imgOfGood.setAttribute('src', this.photo);
            imgOfGood.classList.add('iPhone');
            photoContainer.appendChild(imgOfGood);
            var container = document.createElement('div');
            container.classList.add('imageOfGood');
            tag.appendChild(container);
            var hTag = document.createElement('h2');
            hTag.setAttribute('style', 'padding-top: 2vh;');
            var pTag = document.createElement('p');
            var buttonTag = document.createElement('div');
            buttonTag.classList.add('butoon');
            hTag.innerHTML = this.name;
            pTag.innerHTML = this.description;
            buttonTag.innerHTML = 'Купить за ' + this.price + '&#8399;';            
            container.appendChild(hTag);
            container.appendChild(pTag);
            container.appendChild(buttonTag);
        }
    };
good.output('goods');
}());