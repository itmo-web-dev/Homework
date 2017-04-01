console.log("in side array");


function prn(str){
    console.log(str);
}
var arr = [];
console.log(arr);

var arr=[1,
         "ghgh",
         null,
         [1,1,1,],
         true];
console.log(arr);

var pict=["forest.jpg", "tree.jpg", "cool.jpg"];
var forest = pict[2];
console.log(forest);

pict[2] = "new_tree";
var forest = pict[2];
console.log(forest);

pict[3] = "winter";
var forest = pict[3];
console.log(forest);
console.log(pict.length);
console.log(pict.sort); // TODO: понять как сортировать

prn(pict);
var a = pict.pop();
prn(('last item: %s', a));
prn(pict);
pict.push("new winter"); prn(pict);
// -------------------------------
pict.shift();
pict.unshift("dfd");
prn(pict);
// ------------------------------
var str= "shj sdhj sdhjsd shdjshd";
arr = str.split(' ');
prn(arr);
var str= "shj,sdhj,  sdhjsd,shdjshd";
arr = str.split(',');
prn(arr);
// ограничение количества элементов
var str= "shj,sdhj,  sdhjsd,shdjshd";
arr = str.split(',', 2);
prn(arr);
//------------------
var arr= ["shj","sdhj","dhjsd"];
str = arr.join('/');
prn(str);

//------------
var picture = pict.reverse();
prn(pict);
prn(pict.reverse());
prn('var01: '+picture);

// с какого элемента и сколько 
picture = pict.slice(2,3);
prn(picture);

pict.splice(1, 0, "Newelemrnt");


var newArray = pict.slice(1,2);
prn(newArray);
prn(pict);
pict.slice(1)

var newArray = pict.slice(1,3);
prn(("newArray "+ newArray));

// возвращает 
var b = pict.indexOf('tree.jpg');
prn(('element in arr: '+ b))
// если -1 то элемента нет в массиве
var b = pict.indexOf('tree1.jpg');
prn(('no element in arr: '+ b))


pict.splice(1, 0, "tree.jpg");
var b = pict.lastIndexOf('tree.jpg');
prn(pict);
prn(('element in arr: '+ b))
/////////////////////////////

var pict;
prn(pict)
var graph = '';
for(var i=0; i<pict.length; i++){
    graph = '';
    for(var ind=0; ind<i; ind++){
        graph =graph+"*";
    }
    prn((graph +'  '+pict[i]));
 }
// можно стереть все элементы массива 
pict.length =0
prn(pict);

var matrix = [
    [1, 2, 3],
    [6, 7, 8],
    [15, 0, 2]
    ];
prn(matrix);



