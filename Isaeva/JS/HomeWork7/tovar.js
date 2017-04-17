//2. Создать объект «Товар» включающий:
//- свойства, такие как фото, артикул, описание и т.п.;
//- метод, которому при вызове передается id пустого div элемента и в этот html элемент данный 
//метод создаст и внесёт все необходимые html элементы, стили, и содержание для отображения 
//всей информации хранящихся в свойствах объекта о данном товаре. Дизайн оформления информации 
//в html о товаре – это ваше творчество. 

var tovar = {
    opisanie: "Летнее платье из хлопка голубого цвета.",
    art: "123.456.93",
    foto: "img_32051.jpg",
    cena: "6 000 руб."
}

tovar.pushtoshop = function(){
    
var a = document.getElementsByTagName("div"); 
    
var foto1 = document.createElement("div");
foto1.className = "col-6";
a[0].appendChild(foto1);
    
var foto2 = document.createElement("img");
foto1.appendChild(foto2);
foto2.src = tovar.foto;


var opisanie1 = document.createElement("div");
a[0].appendChild(opisanie1);
opisanie1.className = "col-6 opisanie1";
opisanie1.innerHTML = tovar.opisanie;
    
    
var articul1 = document.createElement("div");
a[0].appendChild(articul1);
articul1.className = "col-6 opisanie1";
articul1.innerHTML = "Артикул: " + tovar.art;
    
    
var cena1 = document.createElement("div");
a[0].appendChild(cena1);
cena1.className = "col-6 opisanie1";
cena1.innerHTML = "Цена: " + tovar.cena;
    
}

tovar.pushtoshop()


