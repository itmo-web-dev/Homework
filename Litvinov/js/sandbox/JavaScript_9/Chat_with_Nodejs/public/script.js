$(document).ready(function() {
    
    var socket = io();
    var user = 'Guest';

    // подтверждение имени
    $('#confirmName').click(function() {
      user = $('#username').val();
      socket.emit('user confirm', user);
      $('#username').prop('disabled', true);
      $('#confirmName').prop('disabled', true);
    });

    // отправка сообщения
    $('form').submit(function() {
      var val = user + ": " + $('#msg').val();
      socket.emit('chat message', val);
      $('#msg').val('');
      return false;
    });

    // добавление сообщени в конец списка
    socket.on('add message', function(msg) {
      $('#messages').append($('<li>').text(msg));
      fixScrollBar();
    });
});

// прокрутка скроллбара до конца списка
function fixScrollBar() {
  var msgsUL = document.getElementById('messages');
  msgsUL.scrollTop = msgsUL.scrollHeight;
}