'use struct';
console.log("in side task02.js");

var button=document.getElementsByClassName('num_button');
button[0].onclick =  function(event){
    var number = Number(this.textContent);
    this.textContent = number + 1;
    // console.log(this.textContent);
}