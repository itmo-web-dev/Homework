window.onload   = function() {
    
    // отправка сообщения и обавление сообщени в конец списка
    submitMsg.onclick = function() {
	  var input = document.getElementById('msg');
      var messageFromInput = input.value;
      var listMessages = document.getElementById('messages');
	  var newLi = document.createElement('li');
	  newLi.innerHTML = messageFromInput;
	  listMessages.appendChild(newLi);	  
      return false;
    };
};