'use struct';
console.log("in side task03.js");

window.onload   = function() {
    // отправка сообщения и обавление сообщени в конец списка
    message.onclick = function() {
	  var input = document.getElementById('msg');
      console.log(input);
      var messageFromInput = input.value;
      var listMessages = document.getElementById('messages');
	  var newLi = document.createElement('li');
	  newLi.innerHTML = messageFromInput;
	  listMessages.appendChild(newLi);	  
      return false;
    };
};