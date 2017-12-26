   var date=new Date();      
   document.write("Date()="+Date()+"<br>");
   document.write("getFullYear()="+date.getFullYear()+"<br>");
   document.write("getMonth()="+date.getMonth()+"<br>");
   document.write("getDate()="+date.getDate()+"<br>");
   document.write("getHours()="+date.getHours()+"<br>");
   document.write("getMinutes()="+date.getMinutes()+"<br>");
   document.write("getSeconds()="+date.getSeconds()+"<br>");

   var num1=3.14; 
   var num2=9.527;
   var num3=Math.max(88,99); 
   var num4=Math.random();  
   var num5=Math.pow(3,4); 
   var num6=Math.round(65.23);
   document.write("Math.ceil("+num1+")="+Math.ceil(num1)+"<br>");
   document.write("Math.floor("+num2+")="+Math.floor(num2)+"<br>");
   document.write("Math.max(88,99)="+Math.floor(num3)+"<br>");
   document.write("Math.random()="+num4+"<br>");
   document.write("Math.round(62.73)="+num6+"<br>");

var words="abcdefg";
var index=words.indexOf("b");
document.writeln("index="+index+"<br>");
var subString=words.substring(2,4);
document.writeln("subString="+subString+"<br>");
var upperString=words.toUpperCase(words);
document.writeln("upperString="+upperString+"<br>");

function Start(name,country){
	this.name = name;
	this.country = country;
	this.print = function(){
		document.writeln(this.name+" , "+this.country+"<br>")
	}
}
var start1 = new Start();
start1.name = "张星星";
start1.country = "中国";
var start2 = new Start("李宁","中国");
start1.print();
start2.print();

var start3 = new Object();
start3.name = "李文文";
start3.country = "韩国";
start3.print = function(){
	document.writeln(this.name+" , "+this.country+"<br>");
};
start3.print();

start4 = {
	name:"张珊珊",
	country:"美国",
	print:function(){
		document.writeln(this.name+" , "+this.country+"<br>");
	}
};
start4.print();

function Student(id,name){
	this.id = id;
	this.name = name;
	Student.national = "China";
	this.print = function(){
		document.writeln("id = "+this.id+" name = "+this.name+"<br>");
	}
}
var stu = new Student(1111,"张小星星");
stu.print();
document.writeln("id = "+stu.id+" name = "+stu.name+" national = "+Student.national+"<br>");