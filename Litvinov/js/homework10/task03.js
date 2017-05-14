'use struct';
console.log("in side task03.js");
/*
3. Задача повышенной сложности:
Дана таблица. Несколько столбцов и строк. У каждого 
столбца есть заголовок (например, №, ФИО, возраст). 
По нажатию на заголовок столбца осуществлять сортировку 
строк таблицы по значениям этого столбца. По возможности 
использовать объектно-ориентированное программирование.

*/
;(function(){
    console.log("under construction");
    
    function SDTable(div){
        this._div = div;
        this.table = "zero_table";
        this.caption = null;
        this.table_header = "null";
        this.arr_cells = [];
        
        this.init_css = function(el){
            el.border = 1;
            el.width = "100%";
            el.hight = "600px";
            el.style.width = "400px";
            el.style.height = "400px";
            el.style.marginLeft="200px";
            el.style.border = 0;
            el.style.padding = 0;
            el.style.fontSize = "72px";
            el.style.textAlign = "center";
            el.style.verticalAlign = "middle";
            el.setAttribute('border', '1');
            };
        
        this.create_table = function(row, col) {
            this.table = document.createElement("table");
            var tbdy = document.createElement('tbody');
            var tr, td;
            var pos=1, array=[];
            for (var i = 0; i < row; i++) {
                tr = document.createElement('tr');
                for (var j = 0; j < col; j++) {
                    td = document.createElement('td');
                    // td.style.height = "130px";
                    // td.style.width = "130px";
                    //td.innerText=10;
                    tr.appendChild(td);
                    array[pos]=td;
                    pos++;
                    }
                tbdy.appendChild(tr);
                }
            this.table.appendChild(tbdy);
            this._div.appendChild(this.table);
            
            this.arr_cells = array;
            return this.table;
            };
        
          this.caption = function(title, font_size, text_align, vertical_align){
              this.caption = document.createElement("caption"); 
              this.caption.innerText = title;
              this.caption.style.fontSize = font_size;
              this.caption.style.textAlign = text_align;
              this.caption.style.verticalAlign = vertical_align;
              this.table.appendChild(this.caption);
            }
          this.table_header=function(){
              this.table_header  = this.table.createTHead();
              var row = this.table_header.insertRow(0);
              var cell = row.insertCell(0);
              cell.innerHTML = "<b>ФИО</b>";
              
          }
        
        };
    
    
    var div_table = document.getElementById("tab-container");
    var tab_persons = new SDTable(div_table);
    var table_el = tab_persons.create_table(4, 4);
    tab_persons.init_css(table_el);
    tab_persons.caption("Cотрудники организации", "28px", "center", "middle");
    tab_persons.table_header();
}());