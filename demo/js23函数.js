function print(message){
	document.writeln(message+"<br>");
	var result = "已经处理信息";
	return result;
}
var msg = print("请进行信息处理");
document.writeln(msg+"<br>");

var print2 = function(message){
	document.writeln(message+"<br>");
	var result = "已经处理信息";
	return result;
};
var msg2 = print2("请进行信息再次处理");
document.writeln(msg2+"<br>");

var print3 = new Function("message","document.writeln(message+'<br>')");
print3("hello function");

print4("end");
function print4(message){
	document.writeln(message+"<br>");
}