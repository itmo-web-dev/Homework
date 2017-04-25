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
    
var person ={
  name: "Ted",
  age: 220
};    
    
function User(name, age){
    this._name = name;
    this._age = age;
    this.toString = function(){ 
        return "name: "+ this._name + " age: " + this._age.toString();
        };
};
//----- new one 22-04-2017---    
User.create_anonymous_user = function(){
        var user = new User();
        user._name = "unknown_name";
        user._age = "unknown_age";
        return user;
}

User.create_user = function(obj){
       if(obj){
            var user = new User();
            user._name = obj.name;
            user._age = obj.age;
            return user;
       }else{
            return User.create_anonymous_user();
            }
}
//-------------
    
    
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
    
var user1 = new User.create_anonymous_user()
console.log(user1)
console.log(user1.toString())

var user2 = new User.create_user(person)
console.log(user2)
console.log(user2.toString())

var user3 = new User.create_user()
console.log(user3)
console.log(user3.toString())

}());