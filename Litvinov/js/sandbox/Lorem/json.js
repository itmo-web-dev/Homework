var data = '[{"blue" : "is ok", "red" : "is my fave color"}]';
var letters_data = JSON.parse(data);
console.log(letters_data[0].red);


var data = '{"name": "russian","test": "temp"}';
var letters_data = JSON.parse(data);
console.log(letters_data.test);