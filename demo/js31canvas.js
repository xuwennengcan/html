var hellocanvas = function(){
	var canvas = document.getElementById("canvas");
	var crc2d = canvas.getContext("2d");
	crc2d.fillStyle = "yellowgreen";
	crc2d.fillRect(10,10,100,100);
}

var draw = function(){
	var canvas = document.getElementById("canvas2");
	var crc2d = canvas.getContext("2d");
	crc2d.beginPath();
	crc2d.strokeStyle = "red";
	crc2d.arc(70,70,50,0,2*Math.PI);
	crc2d.stroke();
}

var drawText = function(){
	var canvas = document.getElementById("canvas3");
	var crc2d = canvas.getContext("2d");
	crc2d.font = "40px 楷体";
	crc2d.fillText("绘制一下文本!!!",50,50);
}

var drawImage = function(){
	var canvas = document.getElementById("canvas4");
	var crc2d = canvas.getContext("2d");
	var image = new Image();
	image.src = "before.jpg";
	image.onload = function(){
		crc2d.drawImage(image,0,0);
	}
}