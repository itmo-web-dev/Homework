'use strict';
function cesar(string, crypt)
{
    var upperC = 
    ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я',
    'А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
    var lowerC = 
    ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я',
    'а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
    var str = string.split('');
    var encrString = [];
    var joinedStr, x;
    for(var i = 0; i < str.length; i++)
    {
        if(str[i].toLowerCase() == str[i])
        {
            x = lowerC.indexOf(str[i])+crypt;
            encrString.push(lowerC[x]);
        }
        if(str[i].toUpperCase() == str[i])
        {
            x = upperC.indexOf(str[i])+crypt;
            encrString.push(upperC[x]);
        }
    }
    joinedStr = encrString.join('');
    return joinedStr;
}
console.log(cesar('Привет', 4));