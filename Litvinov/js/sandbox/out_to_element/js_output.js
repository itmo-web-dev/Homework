'use strict';
/* функция возвращает минимальное значение из переданного массива */

var cmd= "inside js_output";
console.log(cmd);
//String.prototype.trim = function(str) { return str.replace(/^\s+|\s+$/g, ""); }
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}


function use_indexOf(){
    var str=document.getElementById("find").innerHTML;
    // var str_trim = str.trim();
    var str_trim = myTrim(str);
    var pos = str_trim.indexOf("check");
    document.getElementById("findstr").innerHTML = "слов до слова в поиске: " + pos;
}

function use_search(){
    var str=document.getElementById("find").innerHTML;
    var str_trim = myTrim(str);
    var pos = str_trim.search("out");
    document.getElementById("find_search").innerHTML="count simbols from the begining: "+pos
}

function use_slice(){
    var str="Footbal, Tennis, Chess";
    document.getElementById("slice").innerHTML=str.slice(5,13);
}

function use_substring(){
    var str="Footbal, Tennis, Chess";
    document.getElementById("substring").innerHTML=str.substring(5,13);
}
function use_substr(){
    var str="Footbal, Tennis, Chess";
    document.getElementById("substr").innerHTML=str.substr(5,13);
}
function use_replace(){
    var str=document.getElementById("relpace").innerHTML;
    var txt = str.replace("Hello", "Hi");
    document.getElementById("relpace").innerHTML=txt;
}
function use_uppercase(str_in){
    var str=document.getElementById("case").innerHTML;
    var text = str;
    if (str_in == 'upper') text = str.toUpperCase();
    if (str_in == 'low') text=str.toLowerCase();

    document.getElementById("case").innerHTML=text;
}

document.getElementById("output").innerHTML=
    "результат вычислений: 42"+"<br>"+
    "some text"+"<br><hr>";

function print_some_thing(){
    console.log("hello world");
}
document.getElementById("prn_func").innerHTML=print_some_thing+"<hr>";
use_slice();
use_substring();
use_substr();