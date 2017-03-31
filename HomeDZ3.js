var chislo

chislo = parseInt(prompt("Введите число от 1 до 10"))

switch(chislo) {
    case 1:
        document.write("один");
        break;
    case 2:
        document.write("два");
        break;  
    case 3:
        document.write("три");
        break;
    case 4:
        document.write("четыре");
        break;  
    case 5:
        document.write("пять");
        break;
    case 6:
        document.write("шесть");
        break;  
    case 7:
        document.write("семь");
        break;
    case 8:
        document.write("восемь");
        break;  
    case 9:
        document.write("девять");
        break;
    case 0:
        document.write("ноль");
        break;  
    default: 
        document.write("вне диапазона");
}
    