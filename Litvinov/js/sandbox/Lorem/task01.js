'use struct';
console.log("in side task01.js");
/*
//Задача Написать генератор случайных слов от 3 до 5 букв в правилах грамматики русского языка

в русском языке буквы появляются с разной частотой
количество слов в предложении от 10-13 в среднем 
существует таблица вероятности соседсвия разных букв 
и есть предположение что и заглавные буквы появляются с разной частотой

алгоритм:
 составить таблицу применимости букв языка 

*/	
(function(){
    

// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById("open_file").addEventListener('change', function(){
        var fr= new FileReader();
        var output = [];
        alphabet.load(data);
        fr.onload = function(){
            document.getElementById("file_content").textContent = this.result;
            var text = this.result;
            var lines = text.split(/[\r\n]+/g);
            var lines__line = "";
            for(var i=0; i<lines.length; i++){
                if (i%50 == 0){ console.log("строка: ", i);}
                
                lines__line = lines[i];
                for(var j=0; j< lines__line.length; j++){
                    alphabet.count_letters(lines__line[j]);
                    }
            }
            console.log("количество буквы б: ",alphabet.letters[2].counter);
            console.log("алфавит: ",alphabet.get_alphabet());
            console.log("количество символов: ",alphabet.get_symbols_count());
            alphabet.get_all_letters_count();
        }
        fr.readAsText(this.files[0], "UTF-8");
    })
    
    
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
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
    
})();
