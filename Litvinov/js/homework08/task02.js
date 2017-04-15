'use struct';
console.log("in side task02.js");
/*
2. Создать объект «Товар» включающий:
- свойства, такие как фото, артикул, описание и т.п.;
- метод, которому при вызове передается id пустого div элемента и в этот html элемент данный 
метод создаст и внесёт все необходимые html элементы, стили, и содержание для отображения 
всей информации хранящихся в свойствах объекта о данном товаре. Дизайн оформления информации 
в html о товаре – это ваше творчество. 

*/

var div_module = (function(){
    var html_template=' <div class="container">            <div class="row">                <div class="col-md-4 col-md-offset-2 fade_dark__image" id="img">                </div>                <div class="col-md-2">                   <h2 class="main_window__header" id="header"> Товар: </h2><br/>                   <p class="main_window__about" id="about"> sdkhfskdhfkhskdhfsdfshfkhsdhfsdhf                   sdfjsdjflsjdfjsldjfljsdlfjsdljfsjdfljsdlj                   sdfkjsdljflsjfjslflsjd</p>                    <br/><br/>                   <p class="main_window__category" id="category">Категория: Часы </p>                </div>                <div>                    <button onclick="switch_off_panel(\'hide\',\'0\')" id="close" class="btn_close" >X </button>                </div>             </div>        </div>'
    return{
        set_html: function(id){
            var base_div=document.getElementById(id);
            base_div.innerHTML = html_template;
            }
     
    };
    
})();


function shop_item(header, about, category, img){
    this.header = header;
    this.about = about;
    this.category= category;
    this.img = img;
    return this;
    };


function switch_off_panel(state, type){
    var fade, fade_class, main;
    element_id = ["fade", "main", "img", "header", "about", "category", "close"];
    
    var obj01 = new shop_item("лот №C000133 Часы карманные «John Salter»", "высота — 30 см", "Категория: часы.", "img/01_maage00023.jpg");
    
    var obj02 = new shop_item("лот №C000132 Часы кабинетные", "2 крышки, ключевка; Ag 900; «Джон Сальтер» для Г.Мозера, конец 19 века; вес — 78 г,  диаметр — 44 мм", "Категория: часы.", "img/02_Imaage00005_tn.jpg");
    
    var obj03 = new shop_item("лот №C000157 Часы-кулон «Qte Boutte»", "Au 56; начало XX века; вес — 23,85 г, диаметр — 32 мм", "Категория: часы.", "img/03_DSC02836w_tn.jpg");
        
    var value = state;
    for(var i=0; i<element_id.length; i++){
        fade = document.getElementById(element_id[i]); 
        if(value=="hide"){
            var x = fade.className;
            fade.className = x +" main_window__hide" 
         };
        if(value=="show"){
            var x = fade.className;
            var remove_last = x.split(" ");
            var shorter = remove_last.splice(-1,1);
            var line = remove_last.join(", ");
            line_clean = line.replace(", "," ");
            fade.className = line_clean;
        }; // end init html
        
    console.log(state +" " + type);        
    if(type=='1'){
         document.getElementById("header").innerHTML=obj01.header;
         document.getElementById("about").innerHTML=obj01.about;
         document.getElementById("category").innerHTML=obj01.category;
         var cmd = `url(${obj01.img}) center center no-repeat`
         $('.fade_dark__image').css('background', cmd);    
         }
    if(type=='2'){
         document.getElementById("header").innerHTML=obj02.header;
         document.getElementById("about").innerHTML=obj02.about;
         document.getElementById("category").innerHTML=obj02.category;
         var cmd = `url(${obj02.img}) center center no-repeat`
         $('.fade_dark__image').css('background', cmd);    
         }
    if(type=='3'){
         document.getElementById("header").innerHTML=obj03.header;
         document.getElementById("about").innerHTML=obj03.about;
         document.getElementById("category").innerHTML=obj03.category;
         var cmd = `url("${obj03.img}") center center no-repeat`
         console.log(cmd);
         $('.fade_dark__image').css('background', cmd);    
         }
    };
};