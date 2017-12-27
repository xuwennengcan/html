var getByID = function(){
	var nameValue = document.getElementById("name").innerHTML;
	var introduceValue = document.getElementById("introduce").innerHTML;
	alert("nameValue = "+nameValue+" , introduceValue = "+introduceValue);
}

var getBySelector = function(){
	var nameValue = document.querySelector("#name").innerHTML;
	var introduceValue = document.querySelector("#introduce").innerHTML;
	alert("nameValue = "+nameValue+" , introduceValue = "+introduceValue);
}

var getByNode = function(){
	var currentNode = document.getElementById("java");
	var previousNode = currentNode.previousSibling.previousSibling;
	var previousNodeValue = previousNode.innerHTML;
	var nextNode = currentNode.nextSibling.nextSibling;
	var nextNodeValue = nextNode.innerHTML;
	alert("previousNodeValue = "+previousNodeValue+" , nextNodeValue = "+nextNodeValue);
}

var updateNode = function(){
	var node = document.getElementById("java");
	node.innerHTML = "JavaScript";
	var title = document.getElementById("introduce");
	title.innerHTML = "修改后的介绍";
}

var addNode = function(){
	var node = document.getElementById("course");
	var newNode = document.createElement("li");
	newNode.innerHTML = "WEB";
	node.insertBefore(newNode,node.firstChild);
}

var deleteNode = function(){
	var node = document.getElementById("course");
	var deleteNode = document.getElementById("java");
	node.removeChild(deleteNode);
}