'use strict';

var a = parseInt(prompt('Введите число от 0 до 9'));

    switch (a) {
        case '0':
            document.write ('ноль');
        break;
        
        case '1':
            document.write ('один');
        break;
        
        case '2':
            document.write ('два');
        break;
        
        case '3':
            document.write ('три');
        break;
        
        case '4':
            document.write ('четыре');
        break;
        
        case '5':
            document.write ('пять');
            break;
            
        case '6':
            document.write ('шесть');
            break;
            
        case '7':
            document.write ('семь');
            break;
            
        case '8':
            document.write ('восемь');
            break;
            
        case '9':
            document.write ('девять');
            break;
            
        default:      
            document.write ('Введите число от 0 до 9');
            break;
    }

