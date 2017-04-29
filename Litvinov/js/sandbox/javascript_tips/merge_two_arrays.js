var A = [1, 34, 2, 'OLOLO', 73];
var B = [98, 1, '34', 121];
var C = A.concat(B);
var res = sortir(C);
console.log(res);
function sortir(arr)
{
	var workObj = {};
	for(var i = 0; i < arr.length; i++)
	{
		var string = arr[i];
		workObj[string] = true
	}
	return Object.keys(workObj);