'use struct';
console.log("in side task03.js");
/*
3. Создать шаблон объектов «Пользователь».
Метод преобразования к строке выводит имя пользователя.
Два фабричных метода:
- «Создать анонимного пользователя» не получает аргументов,
 в качества имя пользователя устанавливает «Аноним».
- «Создать пользователя из данных» в качества аргументов 
получает объект с именем и возрастом пользователя.   
*/
;(function(){
    
function User(name, age){
    this._name = name;
    this._age = age;
    this.toString = function(){ 
        return "name: "+ this._name + " age: " + this._age.toString();
        };
    };

function createUser(name, age){
    if (name==undefined && age==undefined){
        return new User("uknown", "unknown");
        }
    var obj = new User(name, age);
    return obj;
    };
    
    
var unknown = createUser();
var admin = createUser("Ivanov", 25);
console.log(unknown.toString());
console.log(admin.toString());
        
}());