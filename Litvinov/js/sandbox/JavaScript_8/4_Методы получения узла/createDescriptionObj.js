function createDescriptionObj(domElement){
	if (domElement.nodeType == 9){
		//Имеем дело с корневым элементом HTML
		var objTemp = {
			"name": "root",
			"nodeType": 9,
			children: []
		}
		
		for(var i = 0; i < domElement.childNodes.length; i++)
		{
			objTemp.children.push(createDescriptionObj(domElement.childNodes[i]));
		}
		
		return objTemp;
	} else if (domElement.nodeType == 1) {
		//Имеем дело с тэгом
		var objTemp = {
			"name": domElement.nodeName,
			"nodeType": 1,
			children: []
		}
		
		for(var i = 0; i < domElement.childNodes.length; i++)
		{
			objTemp.children.push(createDescriptionObj(domElement.childNodes[i]));
		}
		
		return objTemp;
	} else if (domElement.nodeType == 3) {
		//Имеем дело с текстом
		var objTemp = {
			"name": domElement.nodeName,
			"nodeType": 3,
			"content": domElement.data
		}			

		return objTemp;				
	} else if (domElement.nodeType == 8) {
		//Имеем дело с текстом
		var objTemp = {
			"name": domElement.nodeName,
			"nodeType": 8,
			"content": domElement.data
		}			

		return objTemp;				
	}
			
}