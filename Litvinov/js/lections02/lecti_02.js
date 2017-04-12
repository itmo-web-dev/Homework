"use strict";
/*
while( условие)
  - 0 false
    '' false
остальное true
*/
var picture=5;
while(picture){
    console.log(picture);
    picture--;
}

var data_array = [];
var ind = 0;
picture = 3;
do{
    data_array[ind++]=picture++;
}while(picture < 10);
console.log(data_array);
/* задать количество моющего тарелок и моющего средства расходуется 0.5 из расчета на одну тарелку
*/
var tarelki=20, fairy=30;
//while (tarelki || fairy){
while (tarelki > 0 || fairy > 0){
    tarelki=tarelki-1;
    fairy=fairy-0.5;
    // после условия происходят вычисления поэтому вторая проверка
    if (tarelki <= 0 || fairy <= 0) break;
    console.log("осталось %s тарелки %s", fairy, tarelki);
}
console.log("осталось фэйри: %s тарелки: %s", fairy, tarelki);

/*   ------------------   */
var summ=0;
for(var i=0; i< 5; i++){
    summ = summ + 1;
    console.log(summ);
    }
console.log(summ);

/* ---- */
var funt=1;
var kg = 0;
for (funt; funt<11; funt++){
    console.log(funt + ' фунт='+ (funt*0.453).toFixed(3))
    kg=funt*0.453;
    console.log(funt + ' фунт='+ kg.toFixed(3))
}
/* ------------------*/

for(var i=0; i<10; i++){
    if (i%2) continue;
    console.log(i);
}
