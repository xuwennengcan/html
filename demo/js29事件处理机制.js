function buttonClick(){
	alert("you click the button");
}

var b = document.getElementById("button");
b.onclick = function(){
	alert("you click the button");
}

var b2 = document.getElementById("button2");
var onClick = function(){
	alert("you click the button2");
}
b2.addEventListener("click",onClick(),false);

