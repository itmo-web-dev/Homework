(function () {
    'use strict';

    console.log('Задачки');
    /*2. Создать объект «Товар» включающий:
    - свойства, такие как фото, артикул, описание и т.п.;
    - метод, которому при вызове передается id пустого div элемента и в этот html элемент данный 
    метод создаст и внесёт все необходимые html элементы, стили, и содержание для отображения 
    всей информации хранящихся в свойствах объекта о данном товаре. Дизайн оформления информации 
    в html о товаре – это ваше творчество. */

    var objGood = {
        name: 'Iphone',
        photo: "assets/iPhone.png",
        description: 'Этот элегантный смартфон идеально подойдёт к вашему стилю. Но это не точно.',
        price: '5 990',
        setToHTML: function(id) {
            var setTag = document.getElementById(id);
            var div_photo = document.createElement('div');
            div_photo.classList.add('col-sm-6');
            setTag.appendChild(div_photo);
            var good_photo = document.createElement('img');
            good_photo.setAttribute('src', this.photo);
            good_photo.classList.add('iPhone');
            div_photo.appendChild(good_photo);
            var div_desc = document.createElement('div');
            div_desc.classList.add('col-sm-6');
            setTag.appendChild(div_desc);
            var h_desc = document.createElement('h2');
            h_desc.setAttribute('style', 'padding-top: 2vh;');
            var p_desc = document.createElement('p');
            var div_buy = document.createElement('div');
            div_buy.classList.add('btn-green');
            h_desc.innerHTML = this.name;
            p_desc.innerHTML = this.description;
            div_buy.innerHTML = 'Купить за ' + this.price + '&#8399;';            
            div_desc.appendChild(h_desc);
            div_desc.appendChild(p_desc);
            div_desc.appendChild(div_buy);
        }
    };
objGood.setToHTML('goods');
}());