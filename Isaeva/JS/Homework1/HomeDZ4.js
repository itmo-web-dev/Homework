"use script"

var ocenka
ocenka = parseInt(prompt("Введите оценку"))

switch (ocenka) {
    case 1: 
        document.write("плохо");
        break;
    case 2: 
        document.write("неудовлетворительно");
        break;
    case 3: 
        document.write("удовлетворительно");
        break;
    case 4: 
        document.write("хорошо");
        break;
    case 5: 
        document.write("отлично");
        break;
    default:
        document.write("нет такой оценки")
}
        