'use struct';
console.log("in side task01.js");
/*
2 Одномерным массивом задана доска 3 на 3 
var area = [ null, null, null, null, null, null, null, null, null ]
Необходимо сформировать игровое поле, состоящее из квадратов для крестиков-ноликов в HTML. 
При появлении в массиве 0-ля рисовать нолик , 1-цы крестик. 
Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.
Для вывода html поля использовать document.write(). Код генерации html поля 
вынести в отдельную функцию в отдельный подключаемый js модуль.
*/
var board_ui = (function(){
    return{
         tableCreate: function(row, col, table_id) {
            var table = document.getElementById(table_id);
            table.style.width = "400px";
            table.style.height = "400px";
            table.style.marginLeft="200px";
            table.style.border = 0;
            table.style.padding = 0;
            table.style.fontSize = "72px";
            table.style.textAlign = "center";
            table.style.verticalAlign = "middle";
            table.setAttribute('border', '1');

            var tbdy = document.createElement('tbody');
            var tr, td;
            var pos=1, array=[];
            for (var i = 0; i < row; i++) {
                tr = document.createElement('tr');
                for (var j = 0; j < col; j++) {
                    td = document.createElement('td');
                    td.style.height = "130px";
                    td.style.width = "130px";
                    //td.innerText=10;
                    tr.appendChild(td);
                    array[pos]=td;
                    pos++;
                    }
                tbdy.appendChild(tr);
            }
            table.appendChild(tbdy);
            return array;
            }
    };
}());

var area = [ 1, null, 0, null, 1, null, null, null, null ];
var field = board_ui.tableCreate(3,3,"tic-tac");
// console.log(field);

for(var i=0, char=""; i<area.length; i++){
    if (area[i] != null){
        char = area[i] && "X" || "O";
        field[i+1].innerText = char || " ";
        }
    };
/*
describe("task_01 student_info", function(){
    var res_correct, msg;
    beforeEach(function() {
        student.interests = ["программирование","гольф","музыку"];
    });
    res_correct='программирование, гольф, музыку';
    msg = "увлечения студента: {1}".replace('{1}',res_correct);
    it(msg, function(){
       expect(student.get_interests()).toEqual(res_correct);
    });
});    
*/   

