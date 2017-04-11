var data = '[{"blue" : "is ok", "red" : "is my fave color"}]';
var letters_data = JSON.parse(data);
console.log(letters_data[0].red);


var data = '{"name": "russian","test": "temp"}';
var letters_data = JSON.parse(data);
console.log(letters_data.test);

// save json
// html
<div id="content"></div>
// javascript
var data = {a:1, b:2, c:3};
var json = JSON.stringify(data);
var blob = new Blob([json], {type: "application/json"});
var url  = URL.createObjectURL(blob);

var a = document.createElement('a');
a.download    = "backup.json";
a.href        = url;
a.textContent = "Download backup.json";

document.getElementById('content').appendChild(a);