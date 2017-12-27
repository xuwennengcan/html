var school = "北大";
function Student(id,name){
	this.id = id;
	this.name = name;
}

function printStudentMessage(s){
	if(typeof s =="object")
		document.writeln("id = "+s.id+" , name = "+s.name+"<br>");
	else
		document.writeln("该类型不是Student<br>");
}

var student = new Student(201,"张星星");
window.printStudentMessage(student);