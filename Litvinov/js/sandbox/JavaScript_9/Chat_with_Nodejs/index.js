var app = require('express')();
var http = require('http').Server(app);
var socket = require('socket.io')(http);
var express = require('express');
var users = {};

app.use(express.static(__dirname, '/public'));

app.get('/', function(req, res){
 	res.sendfile('index.html');
});

socket.on('connection', function(client){
	client.on('user confirm', function(nickname){
		users[client.id] = nickname;
		socket.sockets.emit('update users', users);
		socket.sockets.emit('add message', nickname + ' has joined the chat.');
	});

	client.on('chat message', function(msg){
		socket.sockets.emit('add message', msg);
	});
});

http.listen(3000, function(){
	console.log('Просматривается порт: 3000');
});