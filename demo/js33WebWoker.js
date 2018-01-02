var worker = new Worker("js33message.js");
worker.onmessage=function(message){
	var result = message.data;
	document.writeln(result);
}